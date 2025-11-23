import { Card } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input.js";
import { Textarea } from "@/Components/ui/textarea.js";
import { Mail, MapPin, Phone } from "lucide-react";
import { ScrollReveal } from "@/Components/ui/scroll-reveal";
import React, { useRef } from "react";
import { Button } from './ui/button.tsx';
import emailjs from "@emailjs/browser";



export default function Contact() {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_4g7fvyr",
                "template_5v5mjip",
                formRef.current,
                "9Z59DkbiszPjdhYsa"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent!");
                    formRef.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message");
                }
            );
    };

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
                        <Card className="p-6">
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="flex flex-col space-y-2 items-start">
                                    <label htmlFor="name" className="text-sm font-medium ">
                                        Name
                                    </label>
                                    <Input id="name" name="name" placeholder="Your name" required />
                                </div>

                                <div className="flex flex-col space-y-2 items-start">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                                </div>

                                <div className="flex flex-col space-y-2 items-start">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message
                                    </label>
                                    <Textarea id="message" name="message" placeholder="Tell me about your project ..." rows={5} required />
                                </div>

                                <Button type="submit" className="w-full">
                                    Send message
                                </Button>
                            </form>
                        </Card>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
