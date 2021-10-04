import { transparentize } from "@theme-ui/color"
const colors = {
    text: "#000",
    primary: "#FFA178",
    secondary: "#FFD4D4",
}
// const space = [0, 4, 8, 12, 16, 20, 28, 36, 48, 72, 128];
const space = [0, 4, 8, 12, 16, 24, 32, 48, 72, 104, 128]
const textShadowColor = "#F15D1F"
const textShadow = `0 0 0 ${textShadowColor}, 0.0025em 0.0025em 0 ${textShadowColor}, 0.005em 0.005em 0 ${textShadowColor}, 0.0075em 0.0075em 0 ${textShadowColor}, 0.01em 0.01em 0 ${textShadowColor}, 0.0125em 0.0125em 0 ${textShadowColor}, 0.015em 0.015em 0 ${textShadowColor}, 0.0175em 0.0175em 0 ${textShadowColor}, 0.02em 0.02em 0 ${textShadowColor}, 0.0225em 0.0225em 0 ${textShadowColor}, 0.025em 0.025em 0 ${textShadowColor}, 0.0275em 0.0275em 0 ${textShadowColor}, 0.03em 0.03em 0 ${textShadowColor}, 0.0325em 0.0325em 0 ${textShadowColor}, 0.035em 0.035em 0 ${textShadowColor}, 0.0375em 0.0375em 0 ${textShadowColor}, 0.04em 0.04em 0 ${textShadowColor}, 0.0425em 0.0425em 0 ${textShadowColor}, 0.045em 0.045em 0 ${textShadowColor}, 0.0475em 0.0475em 0 ${textShadowColor}, 0.05em 0.05em 0 ${textShadowColor}, 0.0525em 0.0525em 0 ${textShadowColor}, 0.055em 0.055em 0 ${textShadowColor}, 0.0575em 0.0575em 0 ${textShadowColor}, 0.06em 0.06em 0 ${textShadowColor}, 0.0625em 0.0625em 0 ${textShadowColor}, 0.065em 0.065em 0 ${textShadowColor}, 0.0675em 0.0675em 0 ${textShadowColor}, 0.07em 0.07em 0 ${textShadowColor}, 0.0725em 0.0725em 0 ${textShadowColor}, 0.075em 0.075em 0 ${textShadowColor}, 0.0775em 0.0775em 0 ${textShadowColor}, 0.08em 0.08em 0 ${textShadowColor}, 0.0825em 0.0825em 0 ${textShadowColor}, 0.085em 0.085em 0 ${textShadowColor}, 0.0875em 0.0875em 0 ${textShadowColor}, 0.09em 0.09em 0 ${textShadowColor}, 0.0925em 0.0925em 0 ${textShadowColor}, 0.095em 0.095em 0 ${textShadowColor}, 0.0975em 0.0975em 0 ${textShadowColor}, 0.1em 0.1em 0 ${textShadowColor}`

const animations = {
    flop: {
        animationName: "flop",
        animationDuration: "0.9s",
        animationTimingFunction: "cubic-bezier(1, 0.82, 0.165, 1)",
        animationDirection: "alternate",
        animationIterationCount: "infinite",
    },
    wiggle: {
        animationName: "flop",
        animationDuration: "1s",
        animationTimingFunction: "linear",
        animationDirection: "alternate",
        animationIterationCount: "infinite",
    },
}
export const scroll = {
    "&::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
    },
    "&::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: (t) => `${transparentize("text", 0)(t)}`,
    },
    "&::-webkit-scrollbar-thumb:hover": {
        cursor: "pointer",
        backgroundColor: (t) => `${transparentize("text", 0.1)(t)}`,
    },
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    space: space,
    sizes: space,
    animations: animations,
    fontSizes: space,
    colors: colors,
    shadows: {
        dark: "0px 108px 80px rgba(125, 29, 4, 0.1), 0px 54.0527px 40.0391px rgba(125, 29, 4, 0.1297), 0px 32.5588px 24.1177px rgba(125, 29, 4, 0.136834), 0px 20.8654px 15.4559px rgba(125, 29, 4, 0.119888), 0px 13.5233px 10.0172px rgba(125, 29, 4, 0.105), 0px 8.51275px 6.30574px rgba(125, 29, 4, 0.0901121), 0px 4.8911px 3.62304px rgba(125, 29, 4, 0.0731663), 0px 2.1527px 1.59459px rgba(125, 29, 4, 0.0503301);",
        light: "0px 103px 80px rgba(125, 29, 4, 0.05), 0px 47.62px 36.9864px rgba(125, 29, 4, 0.0370838), 0px 27.2471px 21.1628px rgba(125, 29, 4, 0.031339), 0px 16.5388px 12.8457px rgba(125, 29, 4, 0.0269974), 0px 9.96535px 7.74008px rgba(125, 29, 4, 0.0230026), 0px 5.54935px 4.31018px rgba(125, 29, 4, 0.018661), 0px 2.38674px 1.85378px rgba(125, 29, 4, 0.0129162);",
    },
    radii: {
        circle: "58% 58% 60% 50%",
        rounded: "44px 39px 42px 44px/29px 47px 40px 42px",
        pill: "240px 190px 120px 140px/180px 150px 153px 120px",
        pillHover: "230px 130px 230px 150px/120px 150px 153px 150px",
    },
    grids: { row: { maxWidth: 1200, margin: "0 auto", width: "90%" } },
    fonts: {
        body: '"doge", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        heading: "inherit",
        monospace: "Menlo, monospace",
    },
    breakpoints: ["40em", "64em", "98em", "120em"],
    lineHeights: {
        body: 1.6,
        lead: 1.4,
        heading: 1.3,
        headingXL: 1.15,
    },
    letterSpacings: {
        body: "0em",
        lead: "-0.033em",
        heading: "-0.11em",
        caps: "0.011em",
    },

    openType: {
        dlig: {
            fontFeatureSettings: `"dlig"`,
        },
    },
    text: {
        default: {
            fontSize: [5, 5, 5, 6],
            fontWeight: 400,
            fontFamily: "body",
            lineHeight: "body",
            letterSpacing: "body",
            display: "block",
            mb: ["0.75em"],
            "&::selection": {
                color: textShadowColor,
            },
        },
        label: {
            variant: "text.default",
            fontSize: [4, 4, 4, 5],
        },
        lead: {
            variant: "text.default",
            fontSize: [6, 6, 7, 7],
            letterSpacing: "lead",
            lineHeight: "lead",
            mb: ["1.5em"],
        },
        h1: {
            fontSize: [5, 7, 8, 8],
            fontWeight: "normal",
            fontVariationSettings: '"FLOP" 0, "ital" 0',
            lineHeight: "headingXL",
            "&::selection": {
                textShadow: textShadow,
            },
        },
        h2: {
            fontSize: "32px",
            fontWeight: "normal",
            fontVariationSettings: '"FLOP" 0, "ital" 0',
            lineHeight: "heading",
        },
    },
    styles: {
        root: {
            ...scroll,
            overflowY: "auto",
            overflowX: "hidden",
            backgroundColor: "primary",
            webkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            variant: "text.default",
            fontFeatureSettings: `"liga"`,
        },
        a: { color: "inherit", "&:hover": { textDecoration: "none" } },
        pre: {
            fontFamily: "monospace",
            overflowX: "auto",
            code: {
                color: "inherit",
            },
        },
        code: {
            fontFamily: "monospace",
            fontSize: "inherit",
        },
        table: {
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
        },
        th: {
            textAlign: "left",
            borderBottomStyle: "solid",
        },
        td: {
            textAlign: "left",
            borderBottomStyle: "solid",
        },
        img: {
            display: "block",
            maxWidth: "100%",
        },
        "input[type=range]": {},
    },
}
