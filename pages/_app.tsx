import type { AppProps } from "next/app";
import "react-circular-progressbar/dist/styles.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
