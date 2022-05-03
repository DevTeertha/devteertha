import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 0,
      mirror: true,
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
