import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://marc-lex-va-portfolio.pinrklesk.chatgpt.site"),
  title: "Marc Lex VA",
  description:
    "Virtual Assistant portfolio of Marc Lex Mateo, specializing in administrative support, data entry, records management, customer service, and logistics coordination.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Marc Lex VA | Virtual Assistant",
    description:
      "Detail-oriented virtual support for data entry, administration, customer service, and logistics coordination.",
    type: "website",
    images: ["/virtual-assistant-remote-desk.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marc Lex VA | Virtual Assistant",
    description: "Reliable virtual support, carefully handled.",
    images: ["/virtual-assistant-remote-desk.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
