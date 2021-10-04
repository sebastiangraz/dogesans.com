/** @jsxImportSource theme-ui */
import { Link } from "theme-ui"
import { assets } from "../assets/assets"

const componentStyle = {
    display: "inline-block",
    padding: "24px 40px 24px 90px",
    textDecoration: "none",
    textAlign: "center",
    color: "primary",
    fontSize: [4, 4, 5, 6],
    overflow: "hidden",
    boxShadow: "dark",
    willChange: "transform",
    backgroundColor: "#000",
    // background: `url("${buttonIllustration}") no-repeat 0% 100% #000`,
    transition: "0.15s ease border-radius, 0.3s ease transform",
    transform: "scale(1)",
    borderRadius: "pill",
    "&:hover": {
        borderRadius: "pillHover",
        position: "relative",
        transform: "scale(0.97)",
        svg: {
            transform: "scale(1) translateY(-50%)",
        },
    },
    svg: {
        position: "absolute",
        transition: ".15s ease transform",
        left: "10px",
        top: "calc(50% + 6px)",
        transformOrigin: "50% 50%",
        transform: "scale(0.9) translateY(-50%)",
    },
}

export const Button = ({ label, href, style }) => {
    return (
        <Link sx={{ ...componentStyle, ...style }} href={href}>
            {assets.buttonIllustration} {label}
        </Link>
    )
}
