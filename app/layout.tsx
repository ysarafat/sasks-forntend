import NextAuthProvider from "@/provider/nextauth-provider";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Samiridho Agamir Aomaj Kollan Songstha",
  description: "A dedicated volunteer organization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
