import React from "react"
import * as ReactDOM from "react-dom"
import App from "./App"
import { ThemeProvider } from "theme-ui"

import theme from "./theme"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)

root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
)
