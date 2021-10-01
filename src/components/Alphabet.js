import { Slider } from "../components/Slider"
import { Heading, Grid } from "theme-ui"
import React, { useState } from "react"
const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "@",
    "&",
    "$",
    "#",
]
export const AlphabetComponent = () => {
    const [value, onChange] = useState(50)
    return (
        <>
            <Grid gap={[7, 9]} columns={["1fr", "1fr 1fr"]}>
                <Grid
                    columns={[
                        "repeat( auto-fit, minmax(40px, 1fr) )",
                        "repeat( auto-fit, minmax(80px, 1fr) )",
                    ]}
                >
                    {alphabet.map((e) => {
                        return (
                            <Heading
                                variant="h1"
                                sx={{
                                    fontVariationSettings: `"ital" ${value}`,
                                    textAlign: "center",
                                    fontSize: [7, 8],
                                }}
                            >
                                {e}
                            </Heading>
                        )
                    })}
                </Grid>
                <Grid
                    columns={[
                        "repeat( auto-fit, minmax(40px, 1fr) )",
                        "repeat( auto-fit, minmax(80px, 1fr) )",
                    ]}
                >
                    {[...alphabet.slice(0, 26), ...["{}", "€", "¢", "§"]].map(
                        (e) => {
                            return (
                                <Heading
                                    sx={{
                                        fontVariationSettings: `"ital" ${value}`,
                                        textTransform: "lowercase",
                                        textAlign: "center",
                                        fontSize: [7, 8],
                                    }}
                                    variant="h1"
                                >
                                    {e}
                                </Heading>
                            )
                        }
                    )}
                </Grid>
            </Grid>
            <Grid
                sx={{ alignItems: "center" }}
                columns={"auto 1fr auto"}
                gap={5}
            >
                <Heading variant="h1">normal</Heading>
                <Slider>
                    <input
                        onChange={({ target: { value: radius } }) => {
                            onChange(radius)
                        }}
                        type="range"
                        min="1"
                        value={value}
                        max="100"
                        class="slider"
                    />
                </Slider>
                <Heading variant="h1">italic</Heading>
            </Grid>
        </>
    )
}

export const Alphabet = React.memo(AlphabetComponent)
