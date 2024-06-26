/** @jsxImportSource theme-ui */

import { Button } from "./components/Button"
import { Saucisse } from "./components/Saucisse"
import { Alphabet } from "./components/Alphabet"
import { Counter } from "./components/Counter"
import { Keywords } from "./components/Keywords"
import { ScrollFade } from "./components/ScrollFade"
import { assets } from "./assets/assets"
import { useThemeUI, Heading, Text, Grid, Box, Link } from "theme-ui"

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
        <div className="App" sx={{ position: "relative" }}>
            <ScrollFade delay={0.6}>
                <Box
                    sx={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                    }}
                >
                    <Saucisse />
                </Box>
            </ScrollFade>

            <Grid py={9} gap={8} variant="grids.row">
                <Grid
                    sx={{ zIndex: 1, pointerEvents: "none" }}
                    columns={["1fr", "max-content auto"]}
                >
                    <ScrollFade>
                        <Grid
                            sx={{ justifyItems: "center", userSelect: "none" }}
                        >
                            <img src={logo} alt="Logo" />
                            <Grid
                                gap={3}
                                sx={{ pointerEvents: "all" }}
                                columns={"max-content max-content"}
                            >
                                <Link
                                    target="_blank"
                                    href="https://github.com/sebastiangraz/dogesans"
                                >
                                    <Text variant="label">Github</Text>
                                </Link>
                                {/*
                                <Link
                                    target="_blank"
                                    href="https://dogechain.info/address/DCEmGsBFsSmEqL4p5aoNaMXphaFrMG5eMH"
                                >
                                    <Text variant="label">Donate</Text>
                                </Link>
                                */}
                            </Grid>
                        </Grid>
                    </ScrollFade>
                    <ScrollFade
                        delay={0.2}
                        style={{
                            display: "grid",
                            userSelect: "none",
                            justifyItems: "center",
                            justifySelf: ["center", "end"],
                        }}
                    >
                        <Button
                            href="https://graz.s3.eu-west-2.amazonaws.com/dogesans.zip"
                            target="_blank"
                            style={{ placeSelf: "self-end" }}
                            label="such download"
                        />
                        <Text mt={3} variant="label">
                            much updated in Feb 2021
                        </Text>
                    </ScrollFade>
                </Grid>

                <Box sx={{ svg: { width: "100%" } }}>{assets.line}</Box>
                <ScrollFade style={{ pointerEvents: "none" }} delay={0.4}>
                    <Heading
                        variant="h1"
                        sx={{
                            // overflow: "hidden",
                            maxWidth: 790,
                            ...theme.animations.wiggle,
                        }}
                    >
                        Doge Sans typeface was created for the Dogecoin
                        cryptocurrency. But don’t let that stop you. Use it
                        however you like. It’s free foreveeeeeeeeeer!{" "}
                        <span sx={{ svg: { height: "1em", width: "auto" } }}>
                            {assets.snoot}
                        </span>
                    </Heading>
                </ScrollFade>

                <ScrollFade>
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
                </ScrollFade>
                {/* ALPHABET */}
                <ScrollFade>
                    <Alphabet />
                </ScrollFade>
                <ScrollFade>
                    {/* GRID */}
                    <Grid
                        mt={9}
                        mb={9}
                        gap={[4, null, 8, 8]}
                        columns={[1, null, null, 12]}
                        sx={{ gridTemplateRows: ["1fr 1fr"] }}
                    >
                        <Box
                            p={[4, 5, 6, 8]}
                            sx={{
                                transform:
                                    "rotate(-0.5deg) skew(0.4deg, 0.1deg)",
                                ...card,
                                gridArea: [null, null, "1 / span 5"],
                                backgroundColor: "text",
                                color: "primary",
                            }}
                        >
                            <Heading
                                sx={{
                                    transform: "rotate(3deg)",
                                    fontSize: [7, 8, 9, 10],
                                    ...theme.animations.flop,
                                }}
                                variant="h1"
                            >
                                grr
                            </Heading>
                        </Box>
                        <Box
                            p={[4, 5, 6, 8]}
                            sx={{
                                transform:
                                    "rotate(0.5deg) skew(0.4deg, 0.1deg)",
                                ...card,
                                boxShadow: "light",
                                gridArea: [null, null, "1 / span 7"],
                            }}
                        >
                            <Heading
                                sx={{
                                    fontSize: [7, 8, 9, 10],
                                    ...theme.animations.flop,
                                }}
                                variant="h1"
                            >
                                Quirky
                            </Heading>
                        </Box>
                        <Box
                            p={[4, 5, 6, 8]}
                            sx={{
                                transform: "rotate(0.5deg) skew(0.6deg, -1deg)",
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
                                    fontSize: [7, 8, 9, 10],
                                }}
                            >
                                doge
                            </Heading>
                        </Box>
                        <Box sx={{ gridArea: [null, null, "2 / span 7"] }}>
                            <Heading variant="h1" width={[400, "100%"]} mb={6}>
                                wow very expressive letters can be used with
                                this CSS recipe
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
                                        font-variation-settings: "FLOP"{" "}
                                        <Counter />;
                                    </Text>
                                </Box>
                                <Link
                                    href="https://codepen.io/umbriel/pen/bGRPyJL"
                                    target="_blank"
                                >
                                    <Text
                                        sx={{
                                            display: "inline",
                                            whiteSpace: "pre",
                                        }}
                                    >
                                        source
                                    </Text>
                                </Link>
                            </Grid>
                        </Box>
                    </Grid>
                </ScrollFade>
                <ScrollFade>
                    <Keywords />
                </ScrollFade>
                <Box sx={{ svg: { width: "100%" } }}>{assets.line}</Box>
                <Grid
                    mt={[0, 9]}
                    sx={{
                        gridTemplateColumns: ["1fr", "repeat(3, auto)"],
                        alignItems: "center",
                        justifyContent: ["space-between"],
                        justifyItems: "center",
                    }}
                >
                    <Text variant="label">created by sebastian graz</Text>

                    <Button
                        target="_blank"
                        href="https://graz.s3.eu-west-2.amazonaws.com/dogesans.zip"
                        style={{ placeSelf: ["center", "self-end"] }}
                        label="such download"
                    />

                    <Link href="https://www.graz.io" target="_blank">
                        <Text variant="label">graz.io </Text>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}

export default App
