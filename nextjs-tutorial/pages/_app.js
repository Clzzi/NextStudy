import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/components/Footer";
import Top from "../src/components/Top";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
