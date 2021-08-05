import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Nav from "components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Nav>
        <Component {...pageProps} />
      </Nav>
    </RecoilRoot>
  );
}
export default MyApp;
