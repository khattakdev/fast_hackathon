import "../styles/globals.css";
import "../styles/bootstrap.min.css";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
