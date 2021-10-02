/** @jsxImportSource theme-ui */
import React from "react"
import { assets } from "../assets/assets"

const size = ["2rem", "2.5rem", "3.5rem"]

const thumb = {
    width: size,
    height: size,
    borderRadius: "circle",
    backgroundColor: "text",
    cursor: "pointer",
    boxShadow: "dark",
    transition: "0.15s ease border-radius, 0.3s ease transform",
    "&:hover": {
        borderRadius: "rounded",
    },
}
const componentStyle = {
    position: "relative",
    width: "100%",
    height: size,
    svg: {
        pointerEvents: "none",
        width: "100%",
        height: "auto",
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
    },
    "input[type=range]": {
        WebkitAppearance: "none",
        appearance: "none",
        width: "100%",
        padding: "0 3%",
        height: size,
        background: "transparent",
        outline: "none",
        WebkitTransition: ".2s",
        transition: "opacity .2s",
        "&::-webkit-slider-thumb": {
            WebkitAppearance: "none",
            appearance: "none",
            ...thumb,
        },
        "&::-moz-range-thumb": {
            border: "none",
            ...thumb,
        },
    },
}
const SliderComponent = ({ children }) => {
    return (
        <div
            sx={{
                "input[type=range]": {
                    "&::-webkit-slider-thumb": {},
                    "&::-moz-range-thumb": {},
                },
                ...componentStyle,
            }}
        >
            {assets.longbone}
            {children}
        </div>
    )
}
export const Slider = React.memo(SliderComponent)
