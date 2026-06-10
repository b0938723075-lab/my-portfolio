import React from 'react';
import FadeInUp from './FadeInUp';

export default function HeroSection() {
  return (
    <section style={styles.hero}>
      <FadeInUp>
        <div style={styles.content}>
          <h1 style={styles.title}>
            設計是為了<span style={styles.highlight}>解決問題</span>，<br />
            更是為了傳遞<span style={styles.highlight}>溫暖</span>。
          </h1>
          <p style={styles.subtitle}>
            結合 AI 工具與自動化思維，為品牌打造會呼吸的數位體驗。
          </p>
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
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: '0 5%',
    paddingTop: '100px', // 預留導覽列的高度，避免內容被遮住
  },
  content: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '60px 80px',
    borderRadius: '24px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    lineHeight: 1.2,
    marginBottom: '24px',
    color: 'var(--text-main)',
  },
  highlight: {
    color: 'var(--accent-sun)',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: 'var(--text-main)',
    opacity: 0.8,
    fontWeight: 300,
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
    opacity: 0.8,
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
