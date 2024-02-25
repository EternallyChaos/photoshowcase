import {
  Inter,
  Manrope,
  Crimson_Pro,
  EB_Garamond,
  PT_Serif,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimsonPro",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-crimsonPro",
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ptSerif",
});

export const metadata = {
  title: "DDTA Films",
  description: "Best wedding photography team in India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} ${crimsonPro.variable} ${ebGaramond.variable} ${ptSerif.variable}`}
      >
        <div className="">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
