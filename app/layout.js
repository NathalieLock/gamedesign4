import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Otherworld Saviour Robot",
  description: "Website to present our Unity game Otherworld Saviour Robot",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth bg-slate-950">
      <body
        className={`${inter.className} bg-gradient-to-b to-[#151d2e] from-slate-950 text-gray-100 relative bg-fixed min-h-screen`}
      >
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
