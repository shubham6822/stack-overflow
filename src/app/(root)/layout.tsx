import Navbar from "@/components/shared/navbar/Navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <main className=" bg-light-850 dark:bg-dark-100 relative">
            <Navbar />
            <div className="flex">
                leftsidebar
                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
                    <div className="mx-auto w-full max-w-5xl">
                        {children}
                    </div>
                </section>
                rightsidebar
            </div>
            toaster
        </main>
    )
}
