import Footer from "../components/footer/footer";
import Header from "../components/header";
import "../styles/globals.css";
import ScrollToTop from "react-scroll-to-top";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <ScrollToTop smooth color="#6f00ff" />
      <Component {...pageProps} />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
