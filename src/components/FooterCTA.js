"use client";
import React, { useState } from 'react';
import FadeInUp from './FadeInUp';

export default function FooterCTA() {
  const [formData, setFormData] = useState({
    name: '',
    project: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio] 來自 ${formData.name} 的合作聯繫`);
    const body = encodeURIComponent(
      `你好，我是 ${formData.name}，\n\n` +
      `最近看了妳的專案，對 ${formData.project} 很感興趣。\n\n` +
      `期待能透過 ${formData.email} 與妳進一步聊聊！`
    );
    // 開啟使用者的信箱軟體
    window.location.href = `mailto:b0938723075@gmail.com?subject=${subject}&body=${body}`;
    alert('已為您啟動信箱軟體！若畫面未跳轉，請檢查您的瀏覽器設定。');
  };

  return (
    <footer style={styles.footer} id="contact">
      <FadeInUp>
        <div style={styles.mainWrapper}>
          {/* 左側：時空膠囊留言板 */}
          <div style={styles.cardContainer} className="antigravity-card">
            <div style={styles.header}>
              <h2 style={styles.title}>旅人與時空留白</h2>
              <p style={styles.subtitle}>在時間慢下來的地方，給未來的我們留一張紙條。</p>
            </div>
            
            <form onSubmit={handleSubmit} style={styles.formContainer}>
              <p style={styles.sentence}>
                「 你好，我是 
                <input 
                  type="text" 
                  name="name" 
                  placeholder="請輸入妳的名字/單位" 
                  style={styles.inputField}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                ，<br/><br/>
                最近看了妳的專案，對 
                <select 
                  name="project" 
                  style={styles.selectField}
                  value={formData.project}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>請選擇</option>
                  <option value="旬汐茶品">旬汐茶品</option>
                  <option value="時光沙漏">時光沙漏</option>
                  <option value="整體品牌風格">整體品牌風格</option>
                </select>
                很感興趣。<br/><br/>
                期待能透過 
                <input 
                  type="email" 
                  name="email" 
                  placeholder="請留下您的 Email" 
                  style={styles.inputField}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                與妳進一步聊聊！」
              </p>
              
              <div style={styles.buttonWrapper}>
                <button type="submit" className="antigravity-btn pulse-effect" style={styles.submitButton}>
                  封裝膠囊 / 送出
                </button>
              </div>
            </form>
          </div>

          {/* 右側：聯絡方式面板 */}
          <div style={styles.sidePanel}>
            <div style={styles.sidePanelLine}></div>
            <h4 style={styles.sidePanelTitle}>Connect</h4>
            
            <a href="mailto:b0938723075@gmail.com" style={styles.iconLink} title="Email Me">
              <div style={styles.iconCircle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
            </a>

            <a href="https://line.me/ti/p/~silent0.0" target="_blank" rel="noopener noreferrer" style={styles.iconLink} title="Add LINE">
              <div style={styles.lineBubble}>
                <span style={styles.lineText}>LINE</span>
              </div>
            </a>
            
            <div style={styles.phoneWrapper}>
              <span style={styles.phoneNumber}>0938 723 075</span>
            </div>
            <div style={styles.sidePanelLine}></div>
          </div>
        </div>
      </FadeInUp>
    </footer>
  );
}

const styles = {
  footer: {
    padding: '120px 5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'var(--bg-canvas)',
  },
  mainWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: 'var(--bg-card)',
    maxWidth: '800px',
    flex: '1 1 600px',
    padding: '60px 80px',
    borderRadius: '32px',
    boxShadow: '0 30px 80px rgba(60, 53, 46, 0.08), 0 10px 30px rgba(60, 53, 46, 0.04)',
    position: 'relative',
    overflow: 'hidden',
  },
  header: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  title: {
    fontSize: '2.2rem',
    color: 'var(--text-main)',
    marginBottom: '12px',
    fontFamily: "'Noto Serif TC', serif",
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'var(--accent-sun)',
    fontWeight: 500,
    letterSpacing: '0.05em',
  },
  formContainer: {
    width: '100%',
  },
  sentence: {
    fontSize: '1.4rem',
    lineHeight: 2.2,
    color: 'var(--text-main)',
    fontWeight: 400,
    textAlign: 'left',
  },
  inputField: {
    fontFamily: "'Noto Serif TC', serif",
    fontSize: '1.2rem',
    color: 'var(--accent-sun)',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '2px dashed var(--accent-sun)',
    padding: '4px 12px',
    margin: '0 12px',
    outline: 'none',
    width: '240px',
    textAlign: 'center',
    transition: 'border-bottom-color 0.3s',
  },
  selectField: {
    fontFamily: "'Noto Serif TC', serif",
    fontSize: '1.2rem',
    color: 'var(--accent-sun)',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '2px dashed var(--accent-sun)',
    padding: '4px 12px',
    margin: '0 12px',
    outline: 'none',
    width: '180px',
    cursor: 'pointer',
    appearance: 'none',
    textAlign: 'center',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '60px',
  },
  submitButton: {
    padding: '16px 48px',
    fontSize: '1.15rem',
  },
  sidePanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
  },
  sidePanelLine: {
    width: '1px',
    height: '60px',
    backgroundColor: 'var(--text-main)',
    opacity: 0.2,
  },
  sidePanelTitle: {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: 'var(--text-main)',
    opacity: 0.6,
    writingMode: 'vertical-rl',
    marginBottom: '8px',
  },
  iconLink: {
    textDecoration: 'none',
  },
  iconCircle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--text-main)',
    boxShadow: '0 10px 20px rgba(60, 53, 46, 0.05)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  lineBubble: {
    width: '54px',
    height: '54px',
    borderRadius: '20px 20px 20px 6px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 10px 20px rgba(60, 53, 46, 0.05)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  lineText: {
    fontWeight: 800,
    fontSize: '0.9rem',
    fontFamily: "'Inter', sans-serif",
    color: 'var(--text-main)',
    letterSpacing: '0.05em',
  },
  phoneWrapper: {
    marginTop: '8px',
    backgroundColor: '#fff',
    padding: '12px 20px',
    borderRadius: '50px',
    boxShadow: '0 10px 20px rgba(60, 53, 46, 0.05)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneNumber: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '1rem',
    letterSpacing: '0.05em',
    color: 'var(--text-main)',
    fontWeight: 600,
  }
};
