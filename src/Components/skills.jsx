import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const skillCategories = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
        title: "Herramientas",
        skills: ["Git", "Docker", "VS Code", "Figma", "Vercel"],
    },
    {
        title: "Otros",
        skills: ["Python", "Java", "C++", "Algoritmos", "Estructuras de Datos"],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="space-y-12">
                <ScrollReveal variant="slideRight">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-left">
                            <span className="text-accent font-mono text-lg">04.</span> Skills
                        </h2>
                        <div className="h-px bg-border max-w-md" />
                    </div>
                </ScrollReveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <ScrollReveal key={index} variant="slideUp" delay={index * 0.1}>
                            <Card className="p-6 space-y-4 hover:border-accent/50 transition-colors h-full">
                                <h3 className="text-lg font-semibold text-accent">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
