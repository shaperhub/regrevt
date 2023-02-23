import { useEffect } from "react";
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <> 
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
