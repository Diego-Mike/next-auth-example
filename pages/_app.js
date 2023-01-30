import "@/styles/globals.css";
import { Poppins } from "@next/font/google";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
