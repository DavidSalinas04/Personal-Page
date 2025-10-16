import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export default function About() {
    return (
        <section id="about" className="py-24">
            <div className="space-y-12">
                <ScrollReveal variant="slideRight">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-left" >
                            <span className="text-accent font-mono text-lg">01.</span> About me
                        </h2>
                        <div className="h-px bg-border max-w-md" />
                    </div>

                </ScrollReveal>

                <div className="grid lg:grid-cols-3 gap-8">
                    <ScrollReveal
                        variant="slideUp"
                        delay={0.2}
                        className="lg:col-span-2 space-y-4 text-muted-foreground leading-relaxed"
                    >
                        <p>
                            Hello! I'm a student passionate about technology and software development.
                            My interest in programming began when I discovered I could create solutions to real-life problems through code.
                        </p>
                        <p>
                            I am currently on my 7 semester of my degree
                            <span className="text-foreground font-medium"> computer science</span>, where I have
                            developed skills in web development, algorithms, data structures, and software architecture.
                        </p>
                        <p>
                            Me enfoco en escribir código limpio, escalable y mantenible. Disfruto aprendiendo nuevas tecnologías y
                            aplicándolas en proyectos que generen impacto.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal variant="scale" delay={0.4}>
                        <Card className="p-6 space-y-4 bg-card/50 backdrop-blur">
                            <h3 className="font-semibold text-lg">Education</h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-medium">Computer science </p>
                                    <p className="text-sm text-muted-foreground">El Instituto Tecnológico y de Estudios Superiores de Monterrey </p>
                                    <p className="text-sm text-muted-foreground">2022 - 2026</p>
                                </div>
                            </div>
                        </Card>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
