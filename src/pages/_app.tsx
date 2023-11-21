import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { Layouts } from "@/components/layouts/layout";

// Font files can be colocated inside of `pages`
const googleFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <Layouts customClass={`${googleFont.variable}`}>
      <Component {...pageProps} />
    </Layouts>
  );
}
