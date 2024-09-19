// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server"
import { ThemeProvider } from "solid-styled-components"

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {assets}
        </head>
        <body>
          <ThemeProvider theme={{}}>
            <div id="app">{children}</div>
          </ThemeProvider>
          {scripts}
        </body>
      </html>
    )}
  />
))
