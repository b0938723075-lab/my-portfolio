import "./globals.css";
import CustomScrollbar from '@/components/CustomScrollbar';

export const metadata = {
  metadataBase: new URL('https://my-portfolio-pi-rose-24.vercel.app/'),
  title: "Yu Jou Chen｜portfolio",
  description: "設計是為了解決問題，更是為了傳遞溫暖。",
  openGraph: {
    title: "Yu Jou Chen｜portfolio",
    description: "設計是為了解決問題，更是為了傳遞溫暖。",
    url: 'https://my-portfolio-pi-rose-24.vercel.app/',
    siteName: 'Yu Jou Chen｜portfolio',
    images: [
      {
        url: '/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Yu Jou Chen Portfolio Cover',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body>
        <CustomScrollbar />
        <div className="liquid-bg-container">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        <div className="liquid-bg-noise"></div>
        {children}
      </body>
    </html>
  );
}
