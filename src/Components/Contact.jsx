import { Card } from "@/components/ui/card"
import { Input } from "@/Components/ui/input.js"
import { Textarea } from "@/Components/ui/textarea.js"
import { Mail, MapPin, Phone } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import React from 'react'

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Formulario enviado")
    }


    return (
        <section id="contact" className="py-24">
            <div className="space-y-12">
                <ScrollReveal variant="slideRight">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-left">
                            <span className="text-accent font-mono text-lg">05.</span> Contacto
                        </h2>
                        <div className="h-px bg-border max-w-md" />
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12">
                    <ScrollReveal variant="slideLeft" delay={0.2}>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 text-left">Hablemos</h3>
                                <p className="text-muted-foreground leading-relaxed text-left">
                                    Estoy siempre abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto en mente o
                                    simplemente quieres conectar, no dudes en contactarme.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <Card className="p-4 flex items-center gap-4 bg-card/50">
                                    <div className="p-3 rounded-lg bg-accent/10">
                                        <Mail className="h-5 w-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Email</p>
                                        <p className="font-medium">tu@email.com</p>
                                    </div>
                                </Card>

                                <Card className="p-4 flex items-center gap-4 bg-card/50">
                                    <div className="p-3 rounded-lg bg-accent/10">
                                        <Phone className="h-5 w-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Teléfono</p>
                                        <p className="font-medium">+52 123 456 7890</p>
                                    </div>
                                </Card>

                                <Card className="p-4 flex items-center gap-4 bg-card/50">
                                    <div className="p-3 rounded-lg bg-accent/10">
                                        <MapPin className="h-5 w-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Ubicación</p>
                                        <p className="font-medium">Ciudad, México</p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="slideRight" delay={0.4}>
                        <Card className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="flex flex-col space-y-2 items-start">
                                    <label htmlFor="name" className="text-sm font-medium ">
                                        Nombre
                                    </label>
                                    <Input id="name" placeholder="Tu nombre" required />
                                </div>

                                <div className="flex flex-col space-y-2 items-start">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <Input id="email" type="email" placeholder="tu@email.com" required />
                                </div>

                                <div className="flex flex-col space-y-2 items-start">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Mensaje
                                    </label>
                                    <Textarea id="message" placeholder="Cuéntame sobre tu proyecto..." rows={5} required />
                                </div>

                                <button type="submit" className="w-full">
                                    Enviar Mensaje
                                </button>
                            </form>
                        </Card>
                    </ScrollReveal>
                </div>

                <ScrollReveal variant="fadeIn" delay={0.6}>
                    <div className="pt-12 text-center">
                        <p className="text-sm text-muted-foreground">
                            Diseñado y construido por <span className="text-accent font-medium">Tu Nombre</span>
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
