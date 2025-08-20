// components/SEO.js
import Head from 'next/head';

export default function SEO({
  title = 'Testline.uz – Ekspress va Tezkor Diagnostik Testlar',
  description = 'Testline.uz – O‘zbekistonda ishlab chiqarilgan ekspress va tezkor diagnostik testlar. ISO 9001 va ISO 13485 sertifikatlari asosida ishlab chiqarilgan sifatli IVD testlar.',
  keywords = 'Testline.uz, Testline Uzbekistan, ekspress test, tezkor test, diagnostik testlar, gepatit, OIV, Covid-19, sifilis, yurak testlari, jigar testlari, fertillik testlari',
  url = 'https://testline.uz',
  image = 'https://testline.uz/og-image.jpg',
}) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Testline.uz" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@testlineuz" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
