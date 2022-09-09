import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Navbar from "../components/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (<>
    <Navbar />
    <Component {...pageProps} />
  </>
  );
};

export default MyApp;
