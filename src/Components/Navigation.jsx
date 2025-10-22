import { useState, useEffect } from "react"
import { Button } from "./ui/button.tsx"
import { ThemeToggle } from "./Toggle.jsx"

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About me", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
]

export default function Navigation() {
    const [activeSection, setActiveSection] = useState("home")
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            const sections = navItems.map((item) => item.href.slice(1))
            const current = sections.find((section) => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) setActiveSection(current)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (href) => {
        const element = document.getElementById(href.slice(1))
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : ""
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between h-16">
                    <Button
                        variant = 'Ghost'
                        onClick={() => scrollToSection("#home")}
                        className="text-lg font-mono font-semibold hover:text-accent transition-colors"
                    >
                        {"David Salinas"}
                    </Button>

                    <div className="hidden md:flex items-center gap-1">
                        {navItems.slice(1).map((item) => (
                            <Button
                                key={item.name}
                                variant='Ghost'
                                onClick={() => scrollToSection(item.href)}
                                className={`text-sm transition-colors ${
                                    activeSection === item.href.slice(1) ? "text-accent" : "text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {item.name}
                            </Button>
                        ))}
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    )
}
