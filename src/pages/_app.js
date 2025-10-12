import ScrollToTop from "@/Components/ScrollToTop";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
  <Component {...pageProps} />
   <ScrollToTop /> 
   </>
   );
}

