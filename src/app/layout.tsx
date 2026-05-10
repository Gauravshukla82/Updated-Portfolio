import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Gaurav Shukla | Senior Solutions Architect & Fintech Lead",
  description: "Portfolio of Gaurav Shukla. I build scalable fintech systems and architect high-performance backends.",
  keywords: ["Solutions Architect", "Fintech Lead", "Backend Systems", "Node.js", "MongoDB", "Architecture"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
