import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from './ui/button.tsx'

export default function Home() {
    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
            <motion.div
                className="w-full max-w-4xl text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="space-y-8 text-left">
                    <div className="space-y-4">
                        <motion.p variants={itemVariants} className="text-blue-500 font-mono text-sm">
                            Hi, my name is
                        </motion.p>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
                        >
                            David Salinas
                        </motion.h1>

                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-400"
                        >
                            I build digital experiences.
                        </motion.h2>
                    </div>

                    <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-2xl text-left leading-relaxed ">
                        I am a <span className="font-medium text-blue-700">Computer Engineering student</span> specializing
                        in full-stack web development. I am passionate about creating innovative solutions that combine
                        elegant design with efficient code.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap justify-left items-center gap-4 mt-4">
                        {/* Contact Button */}
                        <Button
                            onClick={scrollToContact}
                            className="btn btn-primary btn-lg flex items-center gap-4"
                        >
                            Contact Me
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>

                        {/* Social Buttons */}
                        <div className="flex items-center gap-7">
                            <a
                                href="https://github.com/DavidSalinas04"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="btn btn-ghost btn-circle"
                            >
                                <Github className="h-5 w-5" />
                            </a>

                            <a
                                href="https://linkedin.com/in/davidsalinasescalera"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="btn btn-ghost btn-circle"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>

                            <a href="david360salinas@gmail.com" aria-label="Email" className="btn btn-ghost btn-circle">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
