import { motion, AnimatePresence } from "framer-motion"
import { X, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/Components/ui/button"
import { Badge } from "@/Components/ui/badge"
import { useState } from "react"

export default function ProjectModal({ project, isOpen, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
    }

    if (!isOpen) return null

    return (
        <AnimatePresence>
            <>
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
                />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                    transition={{ type: "spring", duration: 3 }}
                    className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
                >
                    <div className="h-full bg-card border border-border rounded-lg shadow-2xl overflow-y-auto">
                        {/* Close Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
                        >
                            <X className="h-5 w-5" />
                        </Button>

                        {/* Image Gallery */}
                        <div className="relative flex justify-center  items-center w-full mt-8 rounded-lg overflow-hidden  h-[500px]">
                            <img
                                src={project.images[currentImageIndex] || "/placeholder.svg"}
                                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                className="h-100 max-w-full object-contain"
                            />


                            {project.images.length > 1 && (
                                <>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                                    >
                                        <ChevronLeft className="h-5 w-5" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background"
                                    >
                                        <ChevronRight className="h-5 w-5" />
                                    </Button>

                                    {/* Image Indicators */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {project.images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`w-2 h-2 rounded-full transition-all ${
                                                    index === currentImageIndex ? "bg-accent w-8" : "bg-muted-foreground/50"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 space-y-6">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-bold text-left">{project.title}</h2>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="secondary">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-left">Description</h3>
                                <p className="text-muted-foreground leading-relaxed text-left">
                                    {project.detailDescription}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-left">Characteristics</h3>
                                <ul className="space-y-2">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="text-accent mt-1">▹</span>
                                            <span className="text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center gap-4 pt-4">
                                <Button asChild className="gap-2">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Github className="h-4 w-4" />
                                        See code
                                    </a>
                                </Button>
                                <Button variant="outline" className="gap-2 bg-transparent" disabled onClick={(e) => e.preventDefault()} // evita navegación si está disabled
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    See demo
                                </Button>

                            </div>
                        </div>
                    </div>
                </motion.div>
            </>
        </AnimatePresence>
    )
}
