import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ADHD Apps Directory | Tools that actually work for ADHD brains",
  description: "Curated collection of apps and tools specifically helpful for people with ADHD. Focus apps, task managers, reminders, and more.",
  keywords: ["ADHD", "apps", "productivity", "focus", "task management", "neurodivergent"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
