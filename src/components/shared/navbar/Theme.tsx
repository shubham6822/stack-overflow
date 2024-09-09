"use client";
import { useTheme } from "@/context/ThemeProvider"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Image from "next/image";

export default function Theme() {
    const { mode, setmode } = useTheme()
    return (
        <div>
            <Menubar className="relative border-none bg-transparent shadow-none">
                <MenubarMenu>
                    <MenubarTrigger className="focus:bg-light-900 data-[state==open]:bg-light-900 dark:bg-dark-200 dark: data-[state==open]:bg-dark-200">
                        {
                            mode === "dark" ? (
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
                            )
                        }
                    </MenubarTrigger>
                    <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark: border-dark-100 dark: bg-dark-300">
                        <MenubarItem>Dark</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Light</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>System</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>
    )
}
