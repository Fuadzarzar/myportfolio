import '../styles/globals.css'
import './css/main.css'
import '../components/Header/header.module.css'
import '../components/LatestProject/latest.module.css'
import { RealViewportProvider } from "next-real-viewport"

function MyApp({ Component, pageProps }) {
  return (
  <>
  <RealViewportProvider>
  <Component {...pageProps} />
  </RealViewportProvider>
  </>
  )
}

export default MyApp
