import Header from "../components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <h2 style={{ height: "400px", backgroundColor: "red" }}>Hasmat</h2>
    </>
  );
}

export default MyApp;
