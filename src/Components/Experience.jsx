import { Card } from "@/Components/ui/card"
import { Badge } from "@/Components/ui/badge"
import { ScrollReveal } from "@/Components/ui/scroll-reveal"

const experiences = [
    {
        title: "Intern",
        company: "Grupo AlEn",
        period: "Dic 2024 - Jun 2025",
        description:
            "Optimized and digitized workflows by developing applications and automated processes, improving efficiency and reducing manual work. Streamlined operations through innovative digital solutions, enhancing productivity and scalability.",
        technologies: ["Power apps", "Power automate", "Html", "Azure", "Power Bi", "Google cloud functions"],
    },
    {
        title: "Event assistant",
        company: "Auditorium luis Elizondo",
        period: "August 2022 - Present",
        description:
            "Supported event operations by delivering customer service to guests, assisting with ticketing, seating, and inquiries to ensure a smooth and welcoming experience.",
        technologies: []
    },
]

export default function Experience() {
    return (
        <section id="experience" className="py-24">
            <div className="space-y-12">
                <ScrollReveal variant="slideRight">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-left">
                            <span className="text-accent font-mono text-lg">02.</span> Experience
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
