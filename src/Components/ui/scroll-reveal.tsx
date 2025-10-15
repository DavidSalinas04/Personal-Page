"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, type ReactNode } from "react"
import * as React from "react"

interface ScrollRevealProps {
    children: ReactNode
    variant?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "stagger"
    delay?: number
    className?: string
}

const variants = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    slideUp: {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
    },
    slideRight: {
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    },
    stagger: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
}

export function ScrollReveal({ children, variant = "fadeIn", delay = 0, className }: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, {
        once: false,
        margin: "-50px",
        amount: 0.3,
    })

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[variant]}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function ParallaxSection({
                                    children,
                                    className,
                                    offset = 50,
                                }: { children: ReactNode; className?: string; offset?: number }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

    return (
        <motion.div ref={ref} style={{ y, opacity }} className={className}>
            {children}
        </motion.div>
    )
}
