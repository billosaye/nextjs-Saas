"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Companions",
        href: "/companions",
    },
    {
        label: "My-Journey",
        href: "/my-journey",
    },
    {
        label: "Subscription",
        href: "/subscription",
    },
    {
        label: "Sign In",
        href: "/signin",
    },
]

const NavItems = () => {
    const pathname = usePathname()
      
    return (
        <nav className="flex items-center gap-4">
            {navItems.map((item) => (
                <Link 
                    key={item.href}
                    href={item.href}
                    className={cn(
                        "transition-colors hover:text-primary",
                        pathname === item.href ? "text-primary font-semibold" : "text-foreground"
                    )}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}

export default NavItems