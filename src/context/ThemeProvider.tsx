"use client"
import React, { createContext, useContext, ReactNode, useState, useEffect } from "react"

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeContextType {
    mode: string;
    setmode: (mode: string) => void;
}


export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [mode, setmode] = useState("")
    const handleThemeChange = () => {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            setmode("dark")
            document.documentElement.classList.add("dark")
        } else {
            setmode("light")
            document.documentElement.classList.remove("dark")
        }
    }

    useEffect(() => {
        handleThemeChange()
    }, [mode])

    return (
        <ThemeContext.Provider value={{ mode, setmode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}
