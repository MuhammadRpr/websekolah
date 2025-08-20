
import "./globals.css";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // pilih sesuai kebutuhan
  variable: "--font-jost",
});

export const metadata = {
  title: "My App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jost.variable}>
      <body>{children}</body>
    </html>
  );
}

