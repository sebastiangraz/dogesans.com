/** @jsxImportSource theme-ui */

import { Slider } from "../components/Slider"
import { useThemeUI, Heading, Grid, Box, Text } from "theme-ui"
import React, { useState } from "react"
import tab from "../assets/tab.svg"
import { scroll } from "../components/globalStyles"
export const KeywordsComponent = () => {
    const context = useThemeUI()
    const { theme } = context
    const [value, onChange] = useState(0.5)

    const keyword = {
        px: [4, 5],
        py: [1, 2],
        boxShadow: "light",
        borderRadius: "rounded",
        backgroundColor: "secondary",
        color: "text",
        fontFeatureSettings: `"dlig"`,
        ...theme.animations.flop,
    }
    return (
        <Grid
            mt={[0, 9]}
            mb={9}
            gap={7}
            sx={{
                justifyContent: "space-between",
                position: "relative",
            }}
            columns={[1, null, 12, 12]}
        >
            <Box
                sx={{
                    display: "grid",
                    gridArea: [null, null, "1 / span 6", "1 / span 6"],
                }}
            >
                <Grid
                    mb={[2, 8]}
                    sx={{
                        order: [1, 0],
                        rowGap: "6px",
                        gridTemplateColumns: "repeat(5, 80px)",
                        gridTemplateRows: "repeat(4, 80px)",
                        justifyContent: "center",
                        transformOrigin: "bottom",
                        transform: ["scale(.7)", "scale(1)"],
                    }}
                >
                    <Heading
                        variant="h1"
                        style={{
                            animationDuration: `${value}s`,
                        }}
                        sx={{
                            position: "relative",
                            top: ["-24px", null, "0px", "0px"],

                            gridArea: "1 /3",
                            placeSelf: "baseline",
                            fontSize: [9, 9, 9, 9],
                            ...keyword,
                            borderRadius: "pill",
                        }}
                    >
                        wow
                    </Heading>{" "}
                    <Heading
                        variant="h1"
                        style={{
                            animationDuration: `${value}s`,
                        }}
                        sx={{
                            gridArea: "2 / 2",
                            placeSelf: "end",
                            position: "relative",
                            top: "10px",
                            fontSize: [8, 8, 8, 8],
                            ...keyword,
                        }}
                    >
                        so
                    </Heading>{" "}
                    <Heading
                        variant="h1"
                        style={{
                            animationDuration: `${value}s`,
                        }}
                        sx={{
                            position: "relative",
                            left: ["-44px", "16px"],
                            gridArea: "3 / 5",
                            placeSelf: "end end",
                            ml: "10px",
                            fontSize: [8, 8, 8, 8],
                            ...keyword,
                        }}
                    >
                        much
                    </Heading>{" "}
                    <Heading
                        variant="h1"
                        style={{
                            animationDuration: `${value}s`,
                        }}
                        sx={{
                            gridArea: "4 / 3",
                            placeSelf: "end",
                            zIndex: [-1, 1],
                            left: ["-20px", 0],
                            position: "relative",
                            fontSize: [9, 9, 9, 9],
                            ...keyword,
                            borderRadius: "pill",
                        }}
                    >
                        very
                    </Heading>{" "}
                    <Heading
                        variant="h1"
                        style={{
                            animationDuration: `${value}s`,
                        }}
                        sx={{
                            zIndex: 1,
                            position: "relative",
                            left: ["-8px", "0px"],
                            top: "10px",
                            gridArea: "4 / 4",
                            placeSelf: "start",
                            fontSize: [8, 8, 8, 8],
                            ...keyword,
                        }}
                    >
                        such
                    </Heading>
                </Grid>
                <Text
                    sx={{
                        width: ["100%", 360, 360, 400],
                        textAlign: "center",
                        margin: "0 auto",
                    }}
                >
                    certain keywords are very excite and cannot hold still!
                </Text>
            </Box>
            <Box
                sx={{
                    gridArea: [null, null, "1 / span 6", "1 / span 6"],
                    placeSelf: [
                        null,
                        "center stretch",
                        "center stretch",
                        "center stretch",
                    ],
                }}
            >
                <Box
                    p={6}
                    pt={8}
                    mb={6}
                    style={{}}
                    sx={{
                        position: "relative",
                        WebkitMaskBoxImage: `url(${tab}) 60 fill/35px 20px 30px 0px`,

                        borderRadius: "rounded",
                        backgroundColor: "text",
                        color: "primary",
                    }}
                >
                    <Text
                        sx={{
                            fontSize: [4, 4, 4],
                            position: "absolute",
                            top: 16,
                            left: 18,
                        }}
                    >
                        doge.css
                    </Text>

                    <Text
                        sx={{
                            ...scroll,
                            overflowX: "auto",
                            whiteSpace: "pre",
                        }}
                    >
                        {`.wow {
    `}
                        <Text variant="span" sx={{ color: "secondary" }}>
                            font-feature-settings{" "}
                        </Text>
                        : {`"dlig";`}
                        <Text variant="span" sx={{ color: "secondary" }}>{`
    animation: `}</Text>
                        :{" "}
                        {`flop ${value}s infinite;
}`}
                    </Text>
                    <Grid
                        sx={{ alignItems: "center" }}
                        columns={"auto 1fr auto"}
                        gap={5}
                    >
                        <Text variant="label" sx={{ m: 0 }}>
                            oh lawd they shakin’
                        </Text>
                        <Slider small inverse>
                            <input
                                onChange={({ target: { value: radius } }) => {
                                    onChange(radius)
                                }}
                                type="range"
                                min="0.1"
                                step="0.01"
                                value={value}
                                max="1"
                            />
                        </Slider>
                        <Text variant="label" sx={{ m: 0 }}>
                            sleepy boys
                        </Text>
                    </Grid>
                </Box>
            </Box>
        </Grid>
    )
}

export const Keywords = React.memo(KeywordsComponent)
