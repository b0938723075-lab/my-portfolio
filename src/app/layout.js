import "./globals.css";
import CustomScrollbar from '@/components/CustomScrollbar';

export const metadata = {
  title: "Yurou Chen | Portfolio",
  description: "Z-pattern layout portfolio website with Antigravity styling",
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
