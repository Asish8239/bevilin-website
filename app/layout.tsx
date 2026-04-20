import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBotUpgraded from "@/components/chatbot/ChatBotUpgraded";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bevilin - Your Trusted Healthcare Partner",
  description:
    "Premium pharmaceutical products and healthcare solutions. Quality medicines delivered to your doorstep.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Performance Boost */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>

      <body className={inter.className}>
        <Loader>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ChatBotUpgraded />
        </Loader>
      </body>
    </html>
  );
}