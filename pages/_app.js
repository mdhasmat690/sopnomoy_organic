import Header from "../components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <div style={{ zIndex: 99, marginTop: "200px" }}>
        <h2 style={{ height: "400px", backgroundColor: "red" }}>Hasmat</h2>
      </div>
    </>
  );
}

export default MyApp;
