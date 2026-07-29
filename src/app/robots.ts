import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // Ganti URL di bawah dengan domain Vercel/Netlify Anda nantinya
    sitemap: 'https://kkn-116-tamangapa.vercel.app/sitemap.xml',
  }
}
