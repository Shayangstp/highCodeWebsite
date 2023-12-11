import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "HighCode",
  description: "highCodeAgency",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
