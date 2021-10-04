export const scroll = {
    "&::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
    },
    "&::-webkit-scrollbar-track": {
        backgroundColor: "accentuate",
        borderRadius: "12px",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: (t) => `${"text"}`,
        cursor: "pointer",
        borderRadius: "12px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: (t) => `${"text"}`,
    },
}
