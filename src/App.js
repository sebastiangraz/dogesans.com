/** @jsxImportSource theme-ui */

import { Button } from "./components/Button"
import { Heading, Text, Grid } from "theme-ui"
import "./index.css"
import logo from "./assets/logo.svg"
function App() {
    return (
        <div className="App">
            <Grid py={9} gap={9} variant="grids.row">
                <Grid columns={2}>
                    <img src={logo} alt="Logo" />
                    <Button
                        href="#"
                        style={{ placeSelf: "self-end" }}
                        label="such download"
                    />
                </Grid>

                <Heading variant="h1" sx={{ width: 300, margin: "0 auto" }}>
                    wow such <Text variant="openType.dlig">doge</Text> doggo so
                    quirky very&nbsp;font.
                </Heading>
                <Heading variant="h2">
                    The Doge Sans typeface was created for the Dogecoin
                    cryptocurrency. You can use it however you like, it’s free
                    forever.
                </Heading>
            </Grid>
        </div>
    )
}

export default App
