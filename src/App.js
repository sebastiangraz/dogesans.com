/** @jsxImportSource theme-ui */

import { Button } from "./components/Button"
import { Saucisse } from "./components/Saucisse"
import { Alphabet } from "./components/Alphabet"
import { Counter } from "./components/Counter"
import { useThemeUI, Heading, Text, Grid, Box, Link } from "theme-ui"
import { assets } from "./assets/assets"
import React, { useState, useEffect } from "react"
import "./index.css"
import logo from "./assets/logo.svg"

function App() {
    const context = useThemeUI()
    const { theme } = context
    const card = {
        borderRadius: "rounded",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "secondary",
        color: "text",
        boxShadow: "dark",
    }

    return (
        <div className="App">
            <Box sx={{ position: "absolute", right: 0, top: 0 }}>
                <Saucisse />
            </Box>
            <Grid py={9} gap={8} variant="grids.row">
                <Grid columns={["1fr", "max-content auto"]}>
                    <Grid sx={{ justifyItems: "center", userSelect: "none" }}>
                        <img src={logo} alt="Logo" />
                        <Grid gap={3} columns={"max-content max-content"}>
                            <Link href="#">
                                <Text variant="label">Github</Text>
                            </Link>
                            <Link href="#">
                                <Text variant="label">Donate</Text>
                            </Link>
                        </Grid>
                    </Grid>

                    <Grid
                        sx={{
                            userSelect: "none",
                            justifyItems: "center",
                            justifySelf: ["center", "end"],
                        }}
                    >
                        <Button
                            href="#"
                            style={{ placeSelf: "self-end" }}
                            label="such download"
                        />
                        <Text variant="label">much updated in Feb 2021</Text>
                    </Grid>
                </Grid>
                <Box sx={{ svg: { width: "100%" } }}>{assets.line}</Box>

                <Heading
                    variant="h1"
                    sx={{ maxWidth: 780, ...theme.animations.wiggle }}
                >
                    Doge Sans typeface was created for the Dogecoin
                    cryptocurrency. But don’t let that stop you. Use it however
                    you like, it’s free foreveeeeer!{" "}
                    <span
                        sx={{
                            width: "56px",
                            marginLeft: [3, 4],
                            position: "relative",
                            svg: {
                                position: "absolute",
                                top: [0, "10px"],
                                left: 0,
                                height: ["24px", "40px", "56px"],
                            },
                        }}
                    >
                        {assets.snoot}
                    </span>
                </Heading>

                <Heading
                    mb={8}
                    sx={{
                        userSelect: "none",
                        zIndex: -1,
                        fontWeight: 100,
                        fontFeatureSettings: `"dlig"`,
                        fontSize: `min(48vw, 640px)`,
                        lineHeight: 1,
                        ...theme.animations.wiggle,
                    }}
                >
                    wow
                </Heading>
                {/* ALPHABET */}
                <Alphabet />

                <Grid
                    mt={9}
                    gap={8}
                    columns={[1, null, 12]}
                    sx={{ gridTemplateRows: ["1fr 1fr"] }}
                >
                    <Box
                        p={8}
                        sx={{
                            ...card,
                            gridArea: [null, null, "1 / span 5"],
                            backgroundColor: "text",
                            color: "primary",
                        }}
                    >
                        <Heading
                            sx={{
                                fontSize: [8, 9],
                                ...theme.animations.flop,
                            }}
                            variant="h1"
                        >
                            grr
                        </Heading>
                    </Box>
                    <Box
                        p={8}
                        sx={{
                            ...card,
                            boxShadow: "light",
                            gridArea: [null, null, "1 / span 7"],
                        }}
                    >
                        <Heading
                            sx={{ fontSize: [8, 9], ...theme.animations.flop }}
                            variant="h1"
                        >
                            Quelque
                        </Heading>
                    </Box>
                    <Box
                        p={8}
                        sx={{
                            ...card,
                            boxShadow: "light",
                            gridArea: [null, null, "2 / span 5"],
                        }}
                    >
                        <Heading
                            variant="h1"
                            sx={{
                                ...theme.animations.flop,
                                fontFeatureSettings: `"dlig"`,
                                fontSize: [8, 9],
                            }}
                        >
                            doge
                        </Heading>
                    </Box>
                    <Box sx={{ gridArea: [null, null, "2 / span 7"] }}>
                        <Heading variant="h1" mb={6}>
                            wow very expressive letters can be used with this
                            CSS recipe
                        </Heading>
                        <Grid
                            columns={[null, "max-content auto"]}
                            gap={6}
                            sx={{ alignItems: "center" }}
                        >
                            <Box
                                p={3}
                                px={6}
                                sx={{
                                    boxShadow: "dark",
                                    borderRadius: "rounded",
                                    backgroundColor: "text",
                                    color: "primary",
                                }}
                            >
                                <Text
                                    sx={{
                                        whiteSpace: ["auto", "pre"],
                                        display: "inline",
                                    }}
                                >
                                    font-variation-settings: "FLOP" <Counter />;
                                </Text>
                            </Box>
                            <Link href="#">
                                <Text
                                    sx={{
                                        display: "inline",
                                        whiteSpace: "pre",
                                    }}
                                >
                                    view source
                                </Text>
                            </Link>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default App
