"use client";

import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export const NavbarRoutes = () => {
    const pathName = usePathname();
    const router = useRouter();
    const isTeacherPage = pathName?.startsWith("/teacher");
    const isPlayerPage = pathName?.includes("/chapter");
    return (
        <div className="flex gap-x-2 ml-auto">
            {isTeacherPage || isPlayerPage ? 
                <Button onClick={() => router.push("/")}><LogOut/>Exit</Button>
                :
                <Button variant="ghost" size="sm"  className="font-bold" onClick={() => router.push("/teacher/courses")}><LogIn/>Teacher Mode</Button>
            }
            
        </div>
    )
}