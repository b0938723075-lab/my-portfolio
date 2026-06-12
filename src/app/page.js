"use client";
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import FooterCTA from '@/components/FooterCTA';
import FadeInUp from '@/components/FadeInUp';

export default function Home() {
  // 強制載入時回到網頁最頂端，並關閉瀏覽器的自動記憶捲動位置
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      setTimeout(() => {
        const hash = window.location.hash;
        
        // 判斷是否為「重新整理」網頁
        const navEntries = performance.getEntriesByType("navigation");
        const isReload = navEntries.length > 0 && navEntries[0].type === "reload";

        if (hash === '#contact') {
          // 例外 1：從「關於我」點擊聯絡 CTA 過來，必須精準跳轉到對話區塊
          const element = document.getElementById('contact');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else if (hash && !isReload) {
          // 例外 2：如果是從導覽列點擊作品等標籤「跨頁導覽」過來，正常跳轉
          const id = hash.substring(1);
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // 保持原本指令：只要是重新整理或直接進首頁，一律強制置頂，並清除網址尾巴
          window.scrollTo(0, 0);
          if (hash) {
            history.replaceState(null, null, ' ');
          }
        }
      }, 100);
    }
  }, []);

  const projects = [
    {
      title: "旬汐 SEEK TIDE：新零售品牌與行銷美學策劃",
      subtitle: "價值主張：讓每一旬的等待，都化作心頭那一抹平靜的汐。",
      description: "我們以『時間』與『情緒』作為核心，對「節奏」進行重新思考。聽見茶湯裡的潮汐，找回本該屬於生命的自然步調。「旬」為時間的一旬，(SEEK) 亦有「尋找」的諧音、「汐」(TIDE) 為潮汐與四季更迭的循環。",
      painPoints: [
        "現代年輕人面臨嚴重的數位疲勞與高壓焦慮。",
        "傳統茶葉顯得老氣繁瑣。",
        "市售手搖飲帶來過多的健康負擔。"
      ],
      techStack: [
        "Gemini (產生視覺圖、短影音、社群行銷規劃)",
        "CapCut (短影音剪輯)",
        "Antigravity 網站製作"
      ],
      results: [
        "打造一個價格合理、品項聚焦，且具備深度精神沉澱的茶品牌。",
        "推出三大特色產品核心，並結合 AI 數位線上互動占卜創造社群話題。"
      ],
      highlights: [
        {
          title: "永續環保材質",
          content: "使用天然玉米纖維茶包(PLA)。"
        },
        {
          title: "包裝一拆三用",
          content: "茶包的標籤結合「浮雕書籤卡」，兼具防塵杯蓋與桌面藝術品功能。透過茶染手作工法創作個人專屬畫布，外包裝信封袋也能當作卡片收集套。"
        },
        {
          title: "線上 AI 茶占卜",
          content: "為喝茶後的療癒儀式。掃描 QR Code 並上傳杯底茶渣，即可解鎖專屬的心靈指引電子卡。"
        }
      ],
      pdfUrl: "/旬汐作品集.pdf",
      imageSrc: "/seektide-cover.jpg",
      imageFit: "contain",
      imagePadding: "0",
      websiteUrl: "https://seektide-web.vercel.app",
      videoSrc: "/seektide-video.mp4",
      videoTitle: "旬汐短影音",
      timelineData: [
        { title: "春季檔期", image: "/timeline-spring.jpg" },
        { title: "夏日檔期", image: "/timeline-summer.png" },
        { title: "夏日檔期/端午早鳥禮盒", image: "/timeline-dragonboat.jpg" },
        { title: "秋季檔期", image: "/timeline-autumn.jpg" },
        { title: "秋季檔期/中秋限定禮盒", image: "/timeline-midautumn.png" }
      ],
      reverse: false
    },
    {
      title: "時光沙漏咖啡廳 - 數位行銷升級計畫",
      subtitle: "價值主張：與主流保持距離的清醒。",
      description: "店內不只是收集老物為特點，而是為『疲於社交、渴望安靜的創意人』，守住一處能讓時間慢下來的棲地。",
      painPoints: [
        "現代人的生活模式快且忙碌。",
        "當你需要獨立思考與靜心的空間時，卻發現外界吵雜、無法靜下心來。"
      ],
      techStack: [
        "Gemini (社群行銷規劃)",
        "NotebookLM (整合報告)"
      ],
      results: [
        "Reels 短影音：使用 PAS 模型說明痛點，並以職人手沖畫面做為解方。",
        "IG 社群貼文：設計稀缺性與儀式感的視覺內容。",
        "Chatbot 自動化導流：設計線上心理測驗，依照店內老物對應專屬推薦的茶品與座位；線下尋寶則引導到店與命定老物打卡，獲取折價卷與實體明信片。",
        "私域流量留存計畫：打造「時光信件」Email，將 Email 轉化為與旅人對話的秘密頻率。"
      ],
      pdfUrl: "/優化-時光咖啡聽.pdf",
      imageSrc: "/cafe-cover.jpg",
      imageFit: "contain",
      imagePadding: "24px",
      reverse: true
    }
  ];

  return (
    <main style={styles.main}>
      <Navbar />
      <HeroSection />
      
      <section style={styles.projectsSection} id="work">
        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: index === projects.length - 1 ? '0px' : '200px' }}>
            <FadeInUp>
              <ProjectCard {...project} />
            </FadeInUp>
          </div>
        ))}
      </section>

      <FooterCTA />
    </main>
  );
}

const styles = {
  main: {
    minHeight: '100vh',
  },
  projectsSection: {
    padding: '80px 5%',
    maxWidth: '1200px',
    margin: '0 auto',
  }
};
