/** @jsxImportSource theme-ui */

import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

export const ScrollFade = ({ children, style, delay }) => {
    const squareVariants = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.9,
                delay: delay,
                ease: [0.85, 0, 0.15, 1],
            },
        },
        hidden: { opacity: 0, scale: 0.95 },
    }

    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])
    return (
        <motion.div
            sx={{ ...style, willChange: "transform" }}
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
        >
            {children}
        </motion.div>
    )
}
