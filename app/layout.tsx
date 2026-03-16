import type { Metadata } from 'next'
import './globals.css'
import PoweredByBTV from './components/PoweredByBTV'
import ChatBot from './components/ChatBot'

export const metadata: Metadata = {
  title: 'DIRTDEVIL | Buy & Sell Dirt Bikes | Wilmington NC',
  description: 'Buy, sell, and trade dirt bikes with no middleman. The fastest dirt bike marketplace in the Carolinas. Post your bike free.',
  keywords: 'dirt bikes for sale Wilmington NC, buy dirt bike NC, sell dirt bike, motocross bikes, DIRTDEVIL marketplace',
  openGraph: {
    type: 'website',
    title: 'DIRTDEVIL | Dirt Bike Marketplace',
    description: 'Buy. Sell. Dominate. Where riders trade iron.',
    url: 'https://dirtdevil.com',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DIRTDEVIL | Buy & Sell Dirt Bikes',
    description: 'Buy. Sell. Dominate. Where riders trade iron.',
    images: ['/og-image.jpg'],
  },
  other: {
    'geo.region': 'US-NC',
    'geo.placename': 'Wilmington, North Carolina',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <PoweredByBTV />
        <ChatBot />
      </body>
    </html>
  )
}
