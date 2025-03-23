import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Black.ttg",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraBold.ttg",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Bold.ttg",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Black.ttg",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Medium.ttg",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Regular.ttg",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Black.ttg",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Thin.ttg",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraLight.ttg",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.variable}>{children}</body>
    </html>
  );
}
