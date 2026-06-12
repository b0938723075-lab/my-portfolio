import React from 'react';
import FadeInUp from './FadeInUp';

export default function HeroSection() {
  return (
    <section style={styles.hero}>
      <style>{`
        @keyframes floatSoft {
          0% { transform: translateY(6px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(6px); }
        }
        .floating-left {
          animation: floatSoft 7s ease-in-out infinite;
        }
        .floating-right {
          animation: floatSoft 8s ease-in-out infinite 1.5s; /* 些微延遲與不同週期，創造唯美錯落感 */
        }
        
        /* 確保小螢幕時的 RWD 排版 */
        @media (max-width: 900px) {
          .main-wrapper {
            flex-direction: column !important;
            gap: 40px !important;
          }
          .floating-left, .floating-right {
            width: 100%;
            display: flex;
            justify-content: center;
          }
        }
      `}</style>

      <FadeInUp>
        <div style={styles.mainWrapper} className="main-wrapper">
          {/* 左側：毛玻璃文字卡片 */}
          <div className="floating-left" style={styles.leftCol}>
            <div style={styles.content}>
              <h1 style={styles.title}>
                設計是為了<span style={styles.highlight}>解決問題</span><br />
                更是為了傳遞<span style={styles.highlight}>溫暖</span>
              </h1>
              <p style={styles.subtitle}>
                結合 AI 工具與自動化思維，為品牌打造會呼吸的數位體驗。
              </p>
            </div>
          </div>

          {/* 右側：唯美漂浮圖片 */}
          <div className="floating-right" style={styles.rightCol}>
            <img 
              src="/hero-image.jpg" 
              alt="羊毛盒情境" 
              style={styles.floatingImage} 
            />
          </div>
        </div>
      </FadeInUp>

      <div style={styles.scrollIndicator}>
        <p style={styles.scrollText}>SCROLL</p>
        <div style={styles.mouseIcon}>
          <div className="wheel-animate" style={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '120px 5% 100px',
    backgroundColor: 'var(--bg-canvas)',
  },
  mainWrapper: {
    display: 'flex',
    flexDirection: 'row', // 確保左右排列
    alignItems: 'center',
    justifyContent: 'center',
    gap: '60px',
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    zIndex: 1,
  },
  leftCol: {
    flex: '1 1 50%',
    display: 'flex',
    justifyContent: 'flex-end', // 在大螢幕時稍微往中央靠
  },
  rightCol: {
    flex: '1 1 50%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  content: {
    textAlign: 'left',
    maxWidth: '640px', // 增加寬度避免文字被擠成多行
    width: '100%',
    padding: 'clamp(40px, 5vw, 60px)',
    borderRadius: '24px',
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url("/cat.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0 8px 32px rgba(60, 53, 46, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.8)',
  },
  title: {
    fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', // 縮小文字，確保能完美放在同一行
    lineHeight: 1.4,
    marginBottom: '20px',
    color: 'var(--text-main)',
    fontFamily: "'Noto Serif TC', serif",
    wordBreak: 'keep-all', // 確保中文字不會在不該斷的地方被切斷換行
    textShadow: '0 2px 15px rgba(255, 255, 255, 0.9)', // 加上白色光暈，確保文字在任何底圖上都能清晰閱讀
  },
  highlight: {
    color: 'var(--accent-sun)',
  },
  subtitle: {
    fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
    color: 'var(--text-main)',
    opacity: 0.95, // 提高文字不透明度
    fontWeight: 500, // 稍微加粗，對抗圖片干擾
    lineHeight: 1.8,
    textShadow: '0 2px 10px rgba(255, 255, 255, 0.9)', // 加上白色光暈
  },
  floatingImage: {
    width: '100%',
    maxWidth: '500px', // 限制圖片最大寬度
    height: 'auto',
    borderRadius: '24px',
    objectFit: 'cover',
    boxShadow: '0 12px 40px rgba(60, 53, 46, 0.12)', // 增加唯美的柔和陰影
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '40px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    color: 'var(--text-main)',
    opacity: 0.6,
    zIndex: 10,
  },
  scrollText: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.75rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    fontWeight: 500,
  },
  mouseIcon: {
    width: '24px',
    height: '38px',
    border: '1.5px solid var(--text-main)',
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '6px',
  },
  wheel: {
    width: '3px',
    height: '6px',
    backgroundColor: 'var(--text-main)',
    borderRadius: '2px',
  }
};
