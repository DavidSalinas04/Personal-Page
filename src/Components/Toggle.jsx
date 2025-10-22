import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/Components/ui/button";

export function ThemeToggle() {
    const [theme, setTheme] = useState("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
        setTheme(initialTheme);
        document.documentElement.classList.add(initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(newTheme);
    };

    if (!mounted) {
        return (
            <Button variant="ghost" size="icon" className="w-9 h-9">
                <div className="w-5 h-5" />
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-9 h-9 bg-transparent hover:bg-transparent focus:ring-0 active:bg-transparent group"
            aria-label={`change mode ${theme === "light" ? "dark" : "light"}`}
        >
            {theme === "light" ? (
                <Moon
                    className="w-5 h-5 stroke-current text-black group-hover:text-gray-500 transition-colors duration-200"
                />
            ) : (
                <Sun
                    className="w-5 h-5 stroke-current fill-current text-gray-100 group-hover:text-yellow-400 transition-colors duration-200"
                />
            )}
        </Button>
    );
}
