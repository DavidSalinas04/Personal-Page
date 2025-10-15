import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export default function About() {
    return (
        <section id="about" className="py-24">
            <div className="space-y-12">
                <ScrollReveal variant="slideRight">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-left" >
                            <span className="text-accent font-mono text-lg">01.</span> Sobre mí
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
                            Hola! Soy un estudiante apasionado por la tecnología y el desarrollo de software. Mi interés por la
                            programación comenzó cuando descubrí que podía crear soluciones a problemas reales a través del código.
                        </p>
                        <p>
                            Actualmente estoy cursando{" "}
                            <span className="text-foreground font-medium">Ingeniería en Tecnologías Computacionales</span>, donde he
                            desarrollado habilidades en desarrollo web, algoritmos, estructuras de datos y arquitectura de software.
                        </p>
                        <p>
                            Me enfoco en escribir código limpio, escalable y mantenible. Disfruto aprendiendo nuevas tecnologías y
                            aplicándolas en proyectos que generen impacto.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal variant="scale" delay={0.4}>
                        <Card className="p-6 space-y-4 bg-card/50 backdrop-blur">
                            <h3 className="font-semibold text-lg">Educación</h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-medium">Ingeniería en Tecnologías Computacionales</p>
                                    <p className="text-sm text-muted-foreground">Tu Universidad</p>
                                    <p className="text-sm text-muted-foreground">2021 - 2025</p>
                                </div>
                            </div>
                        </Card>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
