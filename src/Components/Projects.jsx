import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const projects = [
    {
        title: "Cáritas Health & Wellness App",
        description:
            "Led the development of a mobile app aimed at promoting a healthier lifestyle among employees and volunteers by integrating fitness challenges and wellness conferences.",
        image: "/ecommerce-dashboard.png",
        technologies: ["Flask", "Swift", "Dockers", "MySQL"],
        github: "https://github.com/tuusuario/proyecto",
        demo: "https://proyecto-demo.vercel.app",
    },
    {
        title: "App de Gestión de Tareas",
        description:
            "Aplicación web para gestión de proyectos con funcionalidades de colaboración en tiempo real y notificaciones.",
        image: "/task-management-app-interface.png",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
        github: "https://github.com/tuusuario/proyecto",
        demo: "https://proyecto-demo.vercel.app",
    },
    {
        title: "Portfolio Interactivo",
        description:
            "Sitio web personal con animaciones 3D, modo oscuro/claro y diseño responsivo optimizado para todos los dispositivos.",
        image: "/modern-portfolio-website.png",
        technologies: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/tuusuario/proyecto",
        demo: "https://proyecto-demo.vercel.app",
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="space-y-12">
                <ScrollReveal variant="slideRight">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold text-left">
                            <span className="text-accent font-mono text-lg">03.</span> Projects
                        </h2>
                        <div className="h-px bg-border max-w-md" />
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ScrollReveal key={index} variant="scale" delay={index * 0.15}>
                            <Card className="overflow-hidden hover:border-accent/50 transition-all group h-full">
                                <div className="aspect-video overflow-hidden bg-muted">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-3 pt-2">
                                        <button >
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                                                <Github className="h-4 w-4" />
                                                Código
                                            </a>
                                        </button>
                                        <button>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="gap-2">
                                                <ExternalLink className="h-4 w-4" />
                                                Demo
                                            </a>
                                        </button>
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
