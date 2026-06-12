"use client";
import React, { useState } from 'react';

export default function ProjectCard({ 
  title, 
  subtitle, 
  description,
  painPoints, 
  techStack,
  results, 
  highlights,
  pdfUrl,
  imageSrc,
  imageFit = 'cover',
  imagePadding = '0',
  websiteUrl,
  videoSrc,
  videoTitle = '專案短影音',
  timelineData,
  reverse = false 
}) {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div style={styles.cardWrapper}>
      <div className={`project-row ${reverse ? 'reverse' : ''}`}>
      {/* 視覺圖/Mockup 區塊 */}
      <div className="project-visual">
        <div className="antigravity-card">
          {pdfUrl ? (
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={styles.imagePlaceholderLink}>
            <div style={{...styles.imagePlaceholder, padding: imageSrc ? imagePadding : 'auto', overflow: 'hidden'}}>
              {imageSrc ? (
                <img src={imageSrc} alt={`${title} cover`} style={{...styles.coverImage, objectFit: imageFit}} />
              ) : (
                <span style={styles.imageText}><span style={{color: 'var(--accent-sun)'}}>✧</span> 點擊查看完整作品集 PDF</span>
              )}
            </div>
          </a>
        ) : (
          <div style={{...styles.imagePlaceholder, padding: imageSrc ? imagePadding : 'auto', overflow: 'hidden'}}>
            {imageSrc ? (
              <img src={imageSrc} alt={`${title} cover`} style={{...styles.coverImage, objectFit: imageFit}} />
            ) : (
              <span style={styles.imageText}>Project Mockup</span>
            )}
          </div>
        )}
        </div>

        {videoSrc && (
          <div style={styles.videoContainer}>
            <h4 style={styles.videoTitle}><span style={{color: 'var(--accent-sun)'}}>✧</span> {videoTitle}</h4>
            <video 
              src={videoSrc} 
              controls 
              autoPlay 
              muted 
              loop 
              style={styles.videoElement} 
              className="antigravity-card"
            />
          </div>
        )}
      </div>

      {/* 文字說明區塊 */}
      <div className="project-text project-text-card">
        <h2 style={styles.title}>{title}</h2>
        <h3 style={styles.subtitle}>{subtitle}</h3>
        
        {description && (
          <p style={styles.description}>{description}</p>
        )}
        
        <div style={styles.listSection}>
          <h4 style={styles.listTitle}><span style={{color: 'var(--accent-sun)'}}>✧</span> 痛點 (Pain Points)</h4>
          <ul style={styles.list}>
            {painPoints.map((pt, i) => <li key={i} style={styles.listItem}>{pt}</li>)}
          </ul>
        </div>

        <div style={styles.listSection}>
          <h4 style={styles.listTitle}><span style={{color: 'var(--accent-sun)'}}>✧</span> 技術 (Technologies)</h4>
          <ul style={styles.list}>
            {techStack.map((tech, i) => <li key={i} style={styles.listItem}>{tech}</li>)}
          </ul>
        </div>

        <div style={styles.listSection}>
          <h4 style={styles.listTitle}><span style={{color: 'var(--accent-sun)'}}>✧</span> 成果 (Results)</h4>
          <ul style={styles.list}>
            {results.map((res, i) => (
              <li key={i} style={styles.listItem}>
                {res.split(/(\d+%)/).map((part, index) => 
                  part.match(/\d+%/) ? <span key={index} style={styles.highlightData}>{part}</span> : part
                )}
              </li>
            ))}
          </ul>
        </div>

        {highlights && highlights.length > 0 && (
          <div style={styles.listSection}>
            <h4 style={styles.listTitle}><span style={{color: 'var(--accent-sun)'}}>✧</span> 產品亮點 (Highlights)</h4>
            <ul style={styles.list}>
              {highlights.map((hl, i) => (
                <li key={i} style={styles.listItem}>
                  <strong>{hl.title}</strong>: {hl.content}
                </li>
              ))}
            </ul>
          </div>
        )}

        {websiteUrl && (
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer" style={styles.websiteBtn} className="antigravity-btn pulse-effect">
            <span style={{color: '#fff', marginRight: '8px'}}>✧</span> 前往作品官網
          </a>
        )}
      </div>
    </div>

      {timelineData && timelineData.length > 0 && (
        <div style={styles.timelineSection}>
          <h3 style={styles.timelineHeader}>品牌年度商業行銷視覺延展</h3>
          <div style={styles.timelineGrid}>
            {timelineData.map((item, idx) => (
              <div key={idx} style={styles.timelineCard}>
                <div 
                  className="glass-card" 
                  style={styles.timelineImageWrapper}
                  onClick={() => setLightboxImage(item.image)}
                >
                  <img src={item.image} alt={item.title} style={styles.timelineImage} />
                </div>
                <div style={styles.timelineFootnote}>
                  <span style={styles.timelineTag}>[{item.title}]</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Overlay */}
      {lightboxImage && typeof window !== 'undefined' && document.body && require('react-dom').createPortal(
        <div style={styles.lightboxOverlay} onClick={() => setLightboxImage(null)}>
          <div style={styles.lightboxClose}>✕</div>
          <img src={lightboxImage} alt="Enlarged" style={styles.lightboxImage} />
        </div>,
        document.body
      )}
    </div>
  );
}

const styles = {
  imagePlaceholderLink: {
    display: 'block',
    textDecoration: 'none',
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    width: '100%',
    aspectRatio: '4/3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '24px',
    backgroundColor: 'var(--bg-card)',
    transition: 'background-color 0.3s ease',
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    borderRadius: '24px',
  },
  imageText: {
    color: 'var(--text-main)',
    opacity: 0.3,
    fontSize: '1.25rem',
    fontWeight: 500,
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '8px',
    color: 'var(--text-main)',
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '16px',
    color: 'var(--accent-sun)',
  },
  description: {
    fontSize: '1.15rem',
    lineHeight: 1.8,
    color: 'var(--text-main)',
    opacity: 0.9,
    marginBottom: '32px',
    textAlign: 'left',
  },
  listSection: {
    marginBottom: '24px',
  },
  listTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    marginBottom: '16px',
    color: 'var(--text-main)',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    color: 'var(--text-main)',
    opacity: 0.9,
    textAlign: 'left',
  },
  listItem: {
    marginBottom: '12px',
    lineHeight: 1.8,
    position: 'relative',
    paddingLeft: '16px',
    fontSize: '1.05rem',
  },
  highlightData: {
    color: 'var(--accent-sun)',
    fontWeight: 700,
    fontSize: '1.1em',
  },
  websiteBtn: {
    marginTop: '16px',
    padding: '12px 24px',
    fontSize: '1rem',
    textDecoration: 'none',
  },
  projectWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '32px',
  },
  videoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: '40px',
  },
  videoTitle: {
    color: 'var(--text-main)',
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '24px',
    letterSpacing: '0.05em',
  },
  videoElement: {
    width: '100%',
    borderRadius: '24px',
    boxShadow: 'var(--shadow-hover)',
    backgroundColor: 'var(--bg-card)',
    objectFit: 'cover',
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  timelineSection: {
    marginTop: '60px',
    width: '100%',
  },
  timelineHeader: {
    fontSize: '1.8rem',
    marginBottom: '40px',
    color: 'var(--text-main)',
    textAlign: 'center',
    fontFamily: "'Noto Serif TC', serif",
  },
  timelineGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '24px',
    alignItems: 'start',
  },
  timelineCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  timelineImageWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timelineImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '8px',
  },
  timelineFootnote: {
    fontFamily: "'Noto Sans TC', sans-serif",
    fontSize: '0.85rem',
    color: 'var(--text-main)',
    opacity: 0.9,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  timelineTag: {
    fontWeight: '500',
    color: 'var(--text-main)',
  },
  lightboxOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(15px)',
    zIndex: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'zoom-out',
    padding: '40px',
  },
  lightboxImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    borderRadius: '8px',
    boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
  },
  lightboxClose: {
    position: 'absolute',
    top: '40px',
    right: '40px',
    color: '#fff',
    fontSize: '2.5rem',
    cursor: 'pointer',
    opacity: 0.8,
    fontWeight: '300',
  }
};
