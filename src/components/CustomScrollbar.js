"use client";
import React, { useEffect, useState } from 'react';

export default function CustomScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 計算目前滾動的比例 (0 到 1)
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        setScrollProgress(window.scrollY / totalScrollHeight);
      }
    };
    
    // 初始化計算
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // 設定滾動條的安全範圍：10vh 到 80vh (避免貓咪掉出畫面外)
  const thumbTravelDistance = 70; // 總移動距離 70vh
  const currentThumbPos = 10 + (scrollProgress * thumbTravelDistance);

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes kitten-swing {
          0% { transform: rotate(-5deg); }
          100% { transform: rotate(5deg); }
        }
      `}</style>

      {/* 垂下的毛線 */}
      <div style={{...styles.string, height: `${currentThumbPos}vh`}}></div>
      
      {/* 移動的本體 (毛線球與懸吊的貓咪) */}
      <div style={{...styles.thumbContainer, top: `${currentThumbPos}vh`}}>
        {/* 唯美一體成形的貓咪趴在毛線球上 SVG */}
        <svg width="55" height="85" viewBox="0 0 100 150" style={{...styles.kitten, overflow: 'visible', marginTop: '-20px'}}>
          {/* 毛線球：與毛線同色的一體成形圓球 */}
          <circle cx="50" cy="95" r="45" fill="var(--accent-sun)" />
          
          {/* 貓咪尾巴 (從左側慵懶垂下) */}
          <path d="M 25 75 C -5 75, -10 130, 15 140" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" fill="none" />
          
          {/* 貓咪身體 (趴在球上的長條水滴/麵包形) */}
          <path d="M 15 75 C 15 45, 80 45, 80 75 C 80 90, 15 90, 15 75 Z" fill="#FFFFFF" />

          {/* 貓咪頭部 (安穩靠在右側) */}
          <circle cx="75" cy="55" r="21" fill="#FFFFFF" />

          {/* 左耳 (尖尖的小耳朵) */}
          <path d="M 60 45 L 65 18 L 76 40 Z" fill="#FFFFFF" />
          {/* 右耳 (尖尖的小耳朵) */}
          <path d="M 80 40 L 95 22 L 90 45 Z" fill="#FFFFFF" />

          {/* 睡著的眼睛與小巧鼻嘴 */}
          <path d="M 63 55 Q 68 60 73 55" stroke="var(--text-main)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
          <path d="M 83 55 Q 88 60 93 55" stroke="var(--text-main)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.6" />
          <circle cx="78" cy="63" r="1.5" fill="var(--text-main)" opacity="0.5" />
          
          {/* 療癒的粉紅臉頰 */}
          <circle cx="58" cy="60" r="4.5" fill="#ffb3ba" opacity="0.7" />
          <circle cx="96" cy="60" r="4.5" fill="#ffb3ba" opacity="0.7" />

          {/* 垂下來的兩隻小手 */}
          <path d="M 65 75 L 65 95" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M 50 75 L 50 90" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" fill="none" />
        </svg>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    right: '25px', /* 距離螢幕右側的距離 */
    width: '40px',
    height: '100vh',
    zIndex: 9999,
    pointerEvents: 'none', /* 不阻擋底下的點擊事件 */
  },
  string: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '2px',
    backgroundColor: 'var(--accent-sun)',
    transform: 'translateX(-50%)',
    boxShadow: '0 0 5px rgba(60, 53, 46, 0.2)',
  },
  thumbContainer: {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -20px)', /* 向上偏移一點點確保毛線連接著球心 */
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'top 0.1s linear', /* 讓跟隨有極細微的滑順感 */
  },
  yarnBall: {
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
    zIndex: 2,
  },
  kitten: {
    marginTop: '-18px', /* 讓右手順利觸碰毛線球下緣 */
    marginLeft: '-8px', /* 稍微向左偏移，讓伸出的右手剛好在毛線球中央下方 */
    filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.15))',
    transformOrigin: 'top center',
    animation: 'kitten-swing 4s infinite ease-in-out alternate',
    zIndex: 3,
  }
};
