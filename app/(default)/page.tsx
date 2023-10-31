export const metadata = {
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
        description: 'Open Source Recruitment System for Corporate Business',
        url: 'https://ossadmiral-recruit.netlify.app',
        siteName: 'OSSAdmiral - Recruit System',
        images: [
            {
                url: 'https://raw.githubusercontent.com/OSSAdmiral/.github/10f869293d14f818493150c27e98a10dd38baad4/Profile/Admiral(OSS)-743x360.png',
                width: 743,
                height: 360,
            },
            {
                url: 'https://raw.githubusercontent.com/OSSAdmiral/.github/10f869293d14f818493150c27e98a10dd38baad4/Profile/Admiral(OSS)-615x377.png',
                width: 615,
                height: 377,
                alt: 'OSS Admiral',
            },
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
