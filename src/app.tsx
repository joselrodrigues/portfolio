import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { Suspense } from "solid-js"
import { DefaultTheme, ThemeProvider } from "solid-styled-components"

const theme: DefaultTheme = {}

export default function App() {
  return (
    //<ThemeProvider theme={theme}>
    <Router root={(props) => <Suspense>{props.children}</Suspense>}>
      <FileRoutes />
    </Router>
    // </ThemeProvider>
  )
}
