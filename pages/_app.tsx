import type { AppProps } from "next/app";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
