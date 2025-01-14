import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'OSSAdmiral - Recruit System',
    description: 'Open Source Recruitment System for Corporate Business',
    applicationName:"OSSAdmiral - Recruit System",
    keywords: ["Open Source recruitment system", 'Free Recruitment System', 'ATS System Free', 'Free ATS System', 'Laravel Recruit System'],
    creator: "Josie Darang",
    authors: [{name: 'Josie Darang', url: 'https://github.com/MarJose123'}],
    icons: {
        icon: {url: '/favicon.ico'},
        shortcut: ['/favicon-32x32.png'],
        apple: [
            {url: '/apple-touch-icon.png'}
        ],
        other: [
            {
                rel: 'android-chrome',
                url: '/android-chrome-512x512.png'
            },
            {
                rel: 'android-chrome',
                url: '/android-chrome-192x192.png'
            }
        ]
    },
    robots: {
        index: false,
        nocache: true,
        follow: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'OSSAdmiral - Recruit System',
        description: 'Empower your recruitment process with our cutting-edge system. Discover efficiency, engage top talent, and transform your hiring journey with us.',
        url: 'https://ossadmiral-recruit.netlify.app',
        siteName: 'OSSAdmiral - Recruit System',
        images: [
            {
                url: 'https://ossadmiral-recruit.netlify.app/Admiral(OSS)-1200x630.png',
                width: 743,
                height: 360,
                type: 'image/png',
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      {/*<Testimonials />*/}
      {/*<Newsletter />*/}
    </>
  )
}
