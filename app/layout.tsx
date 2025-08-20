import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';
import SEO from '@/components/SEO';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Testline.uz – Ekspress va Tezkor Diagnostik Testlar',
  description:
    'Testline.uz – O‘zbekistonda ishlab chiqarilgan yuqori sifatli ekspress va tezkor diagnostik testlar. ISO 9001 va ISO 13485 sertifikatlari asosida.',
  keywords:
    'ekspress test, tezkor test, diagnostik testlar, gepatit testi, OIV testi, sifilis, Covid-19 testi, laboratoriya testlari, Namangan, Uzbekistan',
  authors: [{ name: 'Testline.uz' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',

  // OpenGraph
  openGraph: {
    type: 'website',
    locale: 'uz_UZ', // changed to Uzbek locale
    url: 'https://testline.uz',
    title: 'Testline.uz – Ekspress va Tezkor Diagnostik Testlar',
    description:
      'O‘zbekistonda ishlab chiqarilgan yuqori sifatli ekspress va tezkor diagnostik testlar. ISO 9001 va ISO 13485 sertifikatlari asosida.',
    siteName: 'Testline.uz',
    images: [
      {
        url: 'https://testline.uz/testline_logo_svg.jpg',
        width: 1200,
        height: 630,
        alt: 'Testline.uz – Ekspress va Tezkor Diagnostik Testlar',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Testline.uz – Ekspress va Tezkor Diagnostik Testlar',
    description:
      'O‘zbekistonda ishlab chiqarilgan yuqori sifatli ekspress diagnostik testlar. ISO 9001 va ISO 13485 sertifikatiga ega.',
    images: ['https://testline.uz/testline_logo_svg.jpg'],
  },

  // Extra: geo tags (Google still uses them for local SEO)
  other: {
    'geo.region': 'UZ-NG', // NG = Namangan region
    'geo.placename': 'Namangan',
    'geo.position': '40.9945;71.6726',
    ICBM: '40.9945, 71.6726',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <SEO
            title="Testline.uz – Asosiy sahifa"
            description="O‘zbekistonda ishlab chiqarilgan diagnostik ekspress testlar: gepatit, OIV, Covid-19 va boshqa kasalliklar uchun."
            keywords="Testline, ekspress test, tezkor test, diagnostika, OIV, Covid, gepatit"
            url="https://testline.uz"
            image="https://testline.uz/home-og.jpg"
          />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Loader />
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
