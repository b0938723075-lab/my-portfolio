import React from 'react';
import FadeInUp from './FadeInUp';

export default function AboutSection() {
  return (
    <section style={styles.section} id="about">
      <div style={styles.container}>
        <div style={styles.mainLayoutRow}>
          {/* 左側：照片與品牌定位 */}
          <div style={styles.leftColumn}>
            <FadeInUp>
              <div style={styles.imageContainer}>
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  style={styles.profileImage} 
                />
              </div>
            </FadeInUp>
          </div>

          {/* 右側：品牌定位與故事卡片 */}
          <div style={styles.rightColumn}>
            <FadeInUp delay={0.2}>
              <div style={styles.brandPositioning}>
                <h2 style={styles.positioningText}>
                  以科技為筆、感性為墨，<br />
                  編織具有溫度的品牌故事。
                </h2>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.4}>
              <div className="project-text-card" style={styles.storyCard}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
                  背景與出發點
                </h3>
                <p style={styles.storyText}>
                  在數位與科技的浪潮裡，看到許多品牌在繁瑣的後台流程中耗費精力，<br />
                  失去了人與人溫暖互動的初心。
                </p>
                <p style={styles.storyText}>
                  運用 AI 工具把複雜流程變簡單，面對生硬的資料與數據時，融入感性的審美與對人性的關懷。
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* 3. 特色重點區塊 */}
        <FadeInUp delay={0.6}>
          <div style={styles.solutionSection}>
            <div style={styles.featuresContainer}>
              <div style={styles.featureBox} className="glass-card">
                <h3 style={styles.featureTitle}>【理性骨架】技術</h3>
                <p style={styles.featureDetail}>AI Prompt 工程、數據資料邏輯分析</p>
              </div>
              <div style={{ ...styles.featureBox, marginTop: '16px' }} className="glass-card">
                <h3 style={styles.featureTitle}>【感性細節】設計</h3>
                <p style={styles.featureDetail}>數位行銷視覺規劃、商業影像生成、社群美學策展</p>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* 4. 結尾文案與 CTA */}
        <FadeInUp delay={0.6}>
          <div style={styles.footerCTA}>
            <p style={styles.endingText}>
              「在數據流動的日常裡，謝謝你停留至此。如果你也喜歡這份留白的節奏，歡迎捎來你的訊息。」
            </p>
            <a href="/#contact" style={{ textDecoration: 'none' }}>
              <button className="antigravity-btn pulse-effect" style={styles.button}>
                捎一封信 / 點擊聯絡
              </button>
            </a>
          </div>
        </FadeInUp>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '120px 5%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    maxWidth: '1200px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
  },
  mainLayoutRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '60px',
    flexWrap: 'wrap',
  },
  leftColumn: {
    flex: '1 1 400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    maxWidth: '450px',
  },
  rightColumn: {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '700px',
    paddingTop: '20px',
  },
  imageContainer: {
    width: '100%',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(60, 53, 46, 0.08)',
  },
  profileImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
    objectFit: 'cover',
  },
  brandPositioning: {
    padding: '0 0 20px 0',
  },
  positioningText: {
    fontSize: 'clamp(1.8rem, 3.5vw, 2.2rem)',
    lineHeight: 1.5,
    color: 'var(--text-main)',
    fontWeight: 600,
  },
  storyCard: {
    textAlign: 'left',
    padding: '50px',
  },
  storyText: {
    fontSize: '1.15rem',
    lineHeight: 1.8,
    color: 'var(--text-main)',
    opacity: 0.9,
    marginBottom: '16px',
    textAlign: 'left',
  },
  solutionSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
    textAlign: 'center',
  },
  solutionText: {
    fontSize: '1.3rem',
    lineHeight: 1.6,
    maxWidth: '800px',
    color: 'var(--text-main)',
  },
  featuresContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    width: '100%',
  },
  featureBox: {
    flex: '1 1 350px',
    maxWidth: '450px',
    padding: '30px',
    textAlign: 'left',
  },
  featureTitle: {
    fontSize: '1.2rem',
    color: 'var(--accent-sun)',
    marginBottom: '12px',
    fontWeight: 600,
  },
  featureDetail: {
    fontSize: '1.05rem',
    color: 'var(--text-main)',
    lineHeight: 1.5,
  },
  footerCTA: {
    marginTop: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '30px',
  },
  endingText: {
    fontSize: '1.15rem',
    lineHeight: 1.8,
    color: 'var(--text-main)',
    fontStyle: 'normal',
    fontWeight: 300,
    maxWidth: '700px',
  },
  button: {
    marginTop: '10px',
  }
};
