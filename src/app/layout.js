import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Philtranco | Byaheng masaya serbisyong subok na!",
  description:
    "Experience the flagship Philtranco Way—safe, comfortable, and premium rides to Southern Tagalog destinations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
