import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QWERTY Thai Translator",
  description: "Translate mistyped QWERTY keyboard input into Thai characters instantly.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
