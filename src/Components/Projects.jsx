import { Card } from "@/Components/ui/card"
import { Badge } from "@/Components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { ScrollReveal } from "@/Components/ui/scroll-reveal"
import {useState} from "react";
import ProjectModal from "@/Components/Projects-modal.jsx";
import { Button } from "@/Components/ui/button.tsx"

const projects = [
    {
        title: "Cáritas Health & Wellness App",
        description:
            "Led the development of a mobile app aimed at promoting a healthier lifestyle among employees and volunteers by integrating " +
            "fitness challenges and wellness conferences.",
        detailDescription:
            "We collaborated closely with the Cáritas organization to develop a solution that encourages their employees and volunteers to live healthier, " +
            "more active lives. The app motivates users by providing engaging fitness challenges and wellness events that foster initiative and well-being.",
        image: "https://i.imgur.com/S3VEdU0.png",
        images:
            ["https://i.imgur.com/tsAncYf.png",
            "https://i.imgur.com/LHakHK9.jpeg",
            "https://i.imgur.com/LEZ4MaX.jpeg"],
        features:[
            "Led the development of a mobile application designed to promote a healthier lifestyle among employees and " +
            "volunteers through fitness challenges and wellness conferences.",
            "Designed the app in Swift, ensuring a user-friendly and engaging mobile experience.",
            "Developed the backend using Flask, handling all API requests and deploying on Linux servers provided by " +
            "Tecnológico de Monterrey, using Docker containers for efficient deployment.",
            "Integrated a MySQL database for secure and scalable data management, allowing users to track points earned " +
            "from challenges and events."
        ],
        technologies: ["Flask", "Swift", "Dockers", "MySQL"],
        github: "https://github.com/DavidSalinas04/CaritasApp",
        demo: "https://proyecto-demo.vercel.app",
    },
    {
        title: "Startup Stock Recommendation Platform",
        description:
            "bla bla bla",
        detailDescription:"BLA BLA BLA BLA BLA BLA",
        image: "https://i.imgur.com/jQY4OeY.png",
        images:
            ["https://i.imgur.com/LEZ4MaX.jpeg",
                "https://i.imgur.com/LEZ4MaX.jpeg",
                "https://i.imgur.com/LEZ4MaX.jpeg"],
        features:[
            "dsadasda",
            "dsadasda",
            "dsadasda",
            "dsadasda"
        ],
        technologies: ["React", "Node.js", "mySQL"],
        github: "https://github.com/DavidSalinas04/Hack_Project",
        demo: "https://proyecto-demo.vercel.app",
    },
    {
        title: "Tech Mahindra leetcode",
        description:
            "BLA BLA BLA",
        detailDescription:"BLA BLA BLA BLA BLA BLA",
        image: "https://i.imgur.com/CS9zbtD.png",
        images:
            [
                "https://i.imgur.com/3jRvsMo.png",
                "https://i.imgur.com/LEZ4MaX.jpeg",
                "https://i.imgur.com/LEZ4MaX.jpeg"],
        features:[
            "dsadasda",
            "dsadasda",
            "dsadasda",
            "dsadasda"
        ],
        technologies: ["Next.js", "React", "Judge0", "PostreSQL"],
        github: "https://github.com/CodeBoostersDev/codeboosters-web",
        demo: "https://github.com/CodeBoostersDev/codeboosters-core",
    },
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

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
                            <Card
                                className="overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-accent/50 hover:shadow-2xl cursor-pointer h-full"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="w-full flex justify-center items-center bg-muted rounded-lg overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto object-contain "
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
                                        <Button variant="ghost" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                                                <Github className="h-4 w-4" />
                                                Código
                                            </a>
                                        </Button>
                                        <Button variant="ghost" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="gap-2">
                                                <ExternalLink className="h-4 w-4" />
                                                Demo
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    )
}
