"use client";
import { useTheme } from "@/context/ThemeProvider";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { themes } from "@/constant";

export default function Theme() {
    const { mode, setmode } = useTheme();
    return (
        <div>
            <Menubar className="relative border-none bg-transparent shadow-none">
                <MenubarMenu>
                    <MenubarTrigger className={`focus:bg-light-900 dark:bg-dark-200 dark:focus:bg-dark-200 data-[state=open]:bg-light-900 dark:data-[state=open]:bg-dark-200`}>
                        {mode === "dark" ? (
                            <Image
                                src={"/assets/icons/moon.svg"}
                                alt="moon"
                                width={20}
                                height={20}
                            />
                        ) : (
                            <Image
                                src={"/assets/icons/sun.svg"}
                                alt="sun"
                                width={20}
                                height={20}
                            />
                        )}
                    </MenubarTrigger>
                    <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300">
                        {themes.map((theme, index) => (
                            <MenubarItem
                                key={index}
                                onClick={() => {
                                    setmode(theme.value);
                                    if (theme.value !== "system") {
                                        localStorage.setItem("theme", theme.value);
                                    } else {
                                        localStorage.removeItem("theme");
                                    }
                                }}
                                className={`flex items-center gap-4 px-3 py-2 cursor-pointer hover:bg-light-300 dark:hover:bg-dark-200 ${mode === theme.value ? "bg-primary-100 dark:bg-primary-200" : ""
                                    }`}
                            >
                                <Image
                                    src={theme.icon}
                                    alt={theme.value}
                                    width={16}
                                    height={16}
                                    className={`${mode === theme.value ? "active-theme" : ""}`}
                                />
                                <p className={`body-semibold ${mode === theme.value ? "text-primary-500" : "text-dark100_light900 dark:text-light-500"}`}>
                                    {theme.label}
                                </p>
                            </MenubarItem>
                        ))}
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>
    );
}
