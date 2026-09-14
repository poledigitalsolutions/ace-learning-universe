import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACE Learning Universe",
  description:
    "Where Learning is an Adventure and Every Child Can Excel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}