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
            ["https://i.imgur.com/bFzLTkI.png",
            "https://i.imgur.com/rHpxAsD.png",
            "https://i.imgur.com/EMK6Hxo.png"],
        features:[
            "Mobile application designed to promote a healthier lifestyle among employees and " +
            "volunteers through fitness challenges and wellness conferences.",
            "Designed the app in Swift, ensuring a  user-friendly and engaging mobile experience.",
            "Developed the backend using Flask, handling all API requests and deploying on Linux servers provided by " +
            "Tecnológico de Monterrey, using Docker containers for efficient deployment.",
            "Integrated a MySQL database for secure and scalable data management, allowing users to track points earned " +
            "from challenges and events."
        ],
        technologies: ["Flask", "Swift", "Dockers", "MySQL", "Linux"],
        github: "https://github.com/DavidSalinas04/CaritasApp",
        demo: "https://proyecto-demo.vercel.app",
    },
    {
        title: "Startup Stock Recommendation Platform",
        description:
            "Developed a React web application that compares startups based on time and cost, integrating ChatGPT to " +
            "provide personalized reflections and investment recommendations.",
        detailDescription:"BLA BLA BLA BLA BLA BLA",
        image: "https://i.imgur.com/jQY4OeY.png",
        images:
            ["https://i.imgur.com/LEZ4MaX.jpeg",
                "https://i.imgur.com/LEZ4MaX.jpeg",
                "https://i.imgur.com/LEZ4MaX.jpeg"],
        features:[
            "Developed a web application that provides personalized stock recommendations for startups, offering " +
            "intelligent suggestions based on market analysis.",
            "Designed the frontend using React, creating an intuitive and responsive user interface.",
            "Built the backend with Node.js and Express to handle user interactions and API requests, " +
            "integrating OpenAI’s API for smart recommendations.",
            "Utilized PostgreSQL for data storage, ensuring efficient and secure management of user and market data."
        ],
        technologies: ["React", "Node.js", "Express","OpenIA API", "PostgreSQL"],
        github: "https://github.com/DavidSalinas04/Hack_Project",
        demo: "https://proyecto-demo.vercel.app",
    },
    {
        title: "Tech Mahindra leetcode",
        description:
            "Developed a LeetCode-style web platform for Tech Mahindra employees to practice algorithms " +
            "and data structures, featuring real-time feedback powered by OpenAI and automated code " +
            "evaluation using Judge0.",
        detailDescription: "We built a complete coding practice platform for Tech Mahindra designed to improve " +
            "employees’ skills in algorithms, data structures, and competitive programming. The system includes weekly " +
            "individual and team tournaments, a dynamic scoring model based on execution time, memory usage, and problem " +
            "difficulty, and real-time AI feedback for incorrect submissions. The code is automatically evaluated using " +
            "a custom Judge0 instance hosted on AWS EC2, while the platform provides leaderboards, an admin dashboard, " +
            "user profiles, and a full problem catalog. The project was built with React, Tailwind, and Next.js, with a " +
            "PostgreSQL database hosted on Aiven and deployment on Vercel.",
        image: "https://i.imgur.com/CS9zbtD.png",
        images:
            [
                "https://i.imgur.com/tds1gFI.png",
                "https://i.imgur.com/C4XoiMM.png",
                "https://i.imgur.com/isCSsQ0.png"],

        features: [
            "LeetCode-style platform with a full catalog of algorithm and data structure problems, each with difficulty " +
            "levels and automated scoring.",
            "Real-time evaluation using Judge0 hosted on AWS EC2, scoring users based on execution time, memory usage, " +
            "and problem difficulty.",
            "Integrated OpenAI to provide instant feedback and error explanations whenever a submission fails.",
            "Includes weekly individual and team tournaments, global leaderboards, user profiles, admin dashboards, " +
            "and detailed submission tracking.",
        ],
        technologies: ["Next.js", "React", "TailwindCSS", "Judge0", "PostgreSQL", "AWS EC2", "Vercel", "OpenIA API"],
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
                                <div className="w-full flex justify-center items-center rounded-lg overflow-hidden ">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto object-contain "
                                    />
                                </div>

                                <div className="p-6 flex flex-col justify-between h-[310px]">
                                    <div>
                                        <h3 className="text-xl font-semibold">{project.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed h-[100px] overflow-hidden">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-5">
                                            {project.technologies.map((tech) => (
                                                <Badge key={tech} variant="secondary" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 pt-2">
                                        <Button variant="ghost" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                                                <Github className="h-4 w-4" />
                                                Code
                                            </a>
                                        </Button>
                                        <Button disabled variant="ghost" size="sm" onClick={(e) => e.stopPropagation()}>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="gap-2 flex items-center"
                                                onClick={(e) => e.preventDefault()}
                                            >
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
