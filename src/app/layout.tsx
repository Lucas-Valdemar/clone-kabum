import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/Header/NavigationBar";
import MobileOnlyAviso from "./components/MobileOnlyAviso";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loja Valdemar",
  description: "Site Clone Kabum feito por mim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <NavigationBar />
        <MobileOnlyAviso />
        {children}
      </body>
    </html>
  );
}
