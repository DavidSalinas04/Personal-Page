import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const experiences = [
    {
        title: "Desarrollador Full-Stack",
        company: "Nombre de la Empresa",
        period: "Jun 2024 - Presente",
        description:
            "Desarrollo de aplicaciones web utilizando React, Next.js y Node.js. Implementación de APIs RESTful y optimización de rendimiento.",
        technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
        title: "Desarrollador Frontend",
        company: "Otra Empresa",
        period: "Ene 2024 - May 2024",
        description:
            "Creación de interfaces de usuario responsivas y accesibles. Colaboración con diseñadores para implementar diseños pixel-perfect.",
        technologies: ["React", "Tailwind CSS", "JavaScript", "Git"],
    },
]

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="space-y-12">
                <ScrollReveal variant="slideRight">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-left">
                            <span className="text-accent font-mono text-lg">02.</span> Experiencia
                        </h2>
                        <div className="h-px bg-border max-w-md" />
                    </div>
                </ScrollReveal>

                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <ScrollReveal key={index} variant="slideUp" delay={index * 0.2}>
                            <Card className="p-6 hover:border-accent/50 transition-colors">
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                                            <p className="text-accent">{exp.company}</p>
                                        </div>
                                        <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
