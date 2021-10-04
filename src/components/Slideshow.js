/** @jsxImportSource theme-ui */
import React from "react"
import { keyframes } from "@emotion/react"

// export const Slideshow = ({ children }) => {
//     const childrenLength = children.length

//     const wave = keyframes`
//     0%   { opacity: 0; }
//     11.11%   { opacity: 1; }
//     33.33%  { opacity: 1; }
//     44.44%  { opacity: 0; }
//     100% { opacity: 0; }`

//     const componentStyle = {
//         display: "grid",
//         position: "relative",
//         gridTemplateRows: "min-content",

//         "h2:nth-child(1)": { animationDelay: `0s` },
//         "h2:nth-child(2)": { animationDelay: `3s` },
//         "h2:nth-child(3)": { animationDelay: `6s` },
//         h2: {
//             animation: `${wave} 3s linear infinite`,
//             opacity: 0,
//             gridColumn: 1,
//             gridRow: 1,
//         },
//     }

//     return <div sx={componentStyle}>{children}</div>
// }

export const Slideshow = ({ children }) => {
    const childrenLength = children.length

    const wave = keyframes`
    0%   { opacity: 0; transform : scale(0.9) rotate(1deg) }
    11.11%   { opacity: 1; transform : scale(1) rotate(0deg)}
    33.33%  { opacity: 1; transform : scale(1) rotate(0deg)}
    44.44%  { opacity: 0; transform : scale(0.9) rotate(1deg)}
    100% { opacity: 0; transform : scale(0.9) rotate(1deg)}`

    const componentStyle = {
        display: "grid",
        position: "relative",
        gridTemplateRows: "min-content",
        "&>*": {
            willChange: "transform, opacity",
            opacity: 0,
            gridColumn: 1,
            gridRow: 1,
            backgroundColor: "primary",
            animationName: `${wave}`,
            animationDuration: "12s",
            animationIterationCount: "infinite",
            animationTimingFunction: "cubic-bezier(.1, 0.82, 0.165, 1)",
        },

        "&>*:nth-of-type(1)": { animationDelay: "0s" },
        "&>*:nth-of-type(2)": { animationDelay: "3s" },
        "&>*:nth-of-type(3)": { animationDelay: "6s" },
        "&>*:nth-of-type(4)": { animationDelay: "9s" },
    }

    return (
        <div sx={componentStyle} className="fadein">
            {React.Children.map(children, (child, i) => {
                return <div>{child}</div>
            })}
        </div>
    )
}
