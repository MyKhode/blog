import { AppPropsWithLayout } from "../types"
import { Hydrate, QueryClientProvider } from "@tanstack/react-query"
import { RootLayout } from "src/layouts"
import { queryClient } from "src/libs/react-query"
import Script from "next/script"

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RootLayout>{getLayout(<Component {...pageProps} />)}</RootLayout>
      </Hydrate>

      {/* Add the visitor counter script */}
      <Script
        src="https://gnrcounter.com/counter.php?accId=3a8cf82071824deaa788fc3eb0f423c7"
        strategy="afterInteractive"
      />
      <noscript>
        <a href="https://gnrcounter.com" title="Web Analytics">Web Analytics</a>
      </noscript>
      
    </QueryClientProvider>
  )
}

export default App
