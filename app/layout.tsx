import type React from "react"
import type { Metadata } from "next"
import { Bricolage_Grotesque, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

const title = "Pedro Salomone — AI Lead & Builder"
const description =
  "AI Lead building with LLMs and math at an early-stage startup — and building something of my own on the side. I write about what I learn along the way."

export const metadata: Metadata = {
  metadataBase: new URL("https://pedrosalomone.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://pedrosalomone.com",
    siteName: "Pedro Salomone",
    type: "website",
    images: ["/profile-picture.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@pedrosalomonear",
    images: ["/profile-picture.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
