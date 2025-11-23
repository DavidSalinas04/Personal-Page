import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { Card } from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Textarea } from "@/Components/ui/textarea"
import { Mail, MapPin, Phone, Check } from "lucide-react"
import { ScrollReveal } from "@/Components/ui/scroll-reveal"
import { Button } from "./ui/button"
import emailjs from "@emailjs/browser"

export default function Contact() {
    const formRef = useRef()
    const [isSending, setIsSending] = useState(false)
    const [isSent, setIsSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSending(true)

        emailjs
            .sendForm(
                "service_4g7fvyr",
                "template_5v5mjip",
                formRef.current,
                "9Z59DkbiszPjdhYsa"
            )
            .then(
                () => {
                    setIsSending(false)
                    setIsSent(true)

                    setTimeout(() => {
                        setIsSent(false)
                        formRef.current.reset()
                    }, 3000)
                },
                () => {
                    setIsSending(false)
                    alert("Error")
                }
            )
    }

    return (
        <section id="contact" className="py-24">
            <div className="space-y-12">
                <ScrollReveal variant="slideRight">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-left">
                            <span className="text-accent font-mono text-lg">05.</span> Contact
                        </h2>
                        <div className="h-px bg-border max-w-md" />
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12">
                    <ScrollReveal variant="slideLeft" delay={0.2}>
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <Card className="p-4 flex items-center gap-4 bg-card/50">
                                    <div className="p-3 rounded-lg bg-accent/10">
                                        <Mail className="h-5 w-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground text-left">Email</p>
                                        <p className="font-medium">David360salinas@gmail.com</p>
                                    </div>
                                </Card>

                                <Card className="p-4 flex items-center gap-4 bg-card/50">
                                    <div className="p-3 rounded-lg bg-accent/10">
                                        <Phone className="h-5 w-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground text-left">Phone number</p>
                                        <p className="font-medium">+52 81 23 51 08 77</p>
                                        <p className="font-medium">+33 7 74 16 59 78</p>
                                    </div>
                                </Card>

                                <Card className="p-4 flex items-center gap-4 bg-card/50">
                                    <div className="p-3 rounded-lg bg-accent/10">
                                        <MapPin className="h-5 w-5 text-accent" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground text-left">Location</p>
                                        <p className="font-medium">Monterrey, México</p>
                                        <p className="font-medium text-left">Lyon, Francia</p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal variant="slideRight" delay={0.4}>
                        <Card className="p-6 relative overflow-hidden">
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="flex flex-col space-y-2 items-start">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Name
                                    </label>
                                    <Input name="name" placeholder="Your name" required disabled={isSending || isSent} />
                                </div>

                                <div className="flex flex-col space-y-2 items-start">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <Input name="email" type="email" placeholder="your@email.com"
                                           required disabled={isSending || isSent} />
                                </div>

                                <div className="flex flex-col space-y-2 items-start">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <Textarea
                                        name="message"
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                        required
                                        disabled={isSending || isSent}
                                    />
                                </div>

                                <Button type="submit" className="w-full" disabled={isSending || isSent}>
                                    {isSending ? "Sending..." : isSent ? "Sent" : "Send message"}
                                </Button>
                            </form>


                            <AnimatePresence>
                                {isSent && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={{ type: "spring", duration: 0.5 }}
                                        className="absolute inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center"
                                    >
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-center space-y-4"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1, rotate: 360 }}
                                                transition={{ type: "spring", delay: 0.1, duration: 0.6 }}
                                                className="mx-auto w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center"
                                            >
                                                <Check className="h-8 w-8 text-accent" />
                                            </motion.div>

                                            <div>
                                                <h3 className="text-2xl font-bold text-accent">Message Sent</h3>
                                                <p className="text-muted-foreground mt-2">I’ll get back to you soon</p>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Card>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}