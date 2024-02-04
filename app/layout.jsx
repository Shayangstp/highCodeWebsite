import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Provider } from "./Providers";

config.autoAddCss = false;

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "HighCode",
  description: "highCodeAgency",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default RootLayout;
