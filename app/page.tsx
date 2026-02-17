import type { Metadata } from "next"
import Homepage from "./components/home/Homepage"

export const metadata: Metadata = {
  title: "Nitin ❤️ Babita | Wedding Invitation | 08 March 2026",
  description:
    "Join us in celebrating the wedding of Nitin and Babita on 08 March 2026 at 1:30 PM. We warmly invite you to be part of our special day.",
  keywords: [
    "Nitin and Babita wedding",
    "Indian wedding invitation",
    "08 March 2026 wedding",
    "Nitin weds Babita",
    "Mumbai wedding",
  ],
  authors: [{ name: "Nitin Rathod" }],
  openGraph: {
    title: "Nitin ❤️ Babita Wedding",
    description:
      "Celebrate the sacred union of Nitin and Babita on 08 March 2026.",
    url: "https://nitin-weds-babita.vercel.app",
    siteName: "Nitin & Babita Wedding",
    images: [
      {
        url: "/images/nitin-babita-2.jpg",
        width: 1200,
        height: 630,
        alt: "Nitin and Babita Wedding",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitin ❤️ Babita Wedding",
    description:
      "Wedding Invitation | 08 March 2026 | 1:30 PM",
    images: ["/images/nitin-babita-2.jpg"],
  },
}

export default function Home() {
  return <Homepage />
}
