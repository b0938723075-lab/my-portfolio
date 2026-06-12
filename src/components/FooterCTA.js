"use client";
import React, { useState, useRef } from 'react';
import FadeInUp from './FadeInUp';

export default function FooterCTA() {
  const [formData, setFormData] = useState({
    name: '',
    project: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // 如果是留言框，自動根據內容字數拉長高度
    if (e.target.name === 'message' && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const bodyContent = 
      `你好，我是 ${formData.name}，\n\n` +
      `最近看了你的專案，對 ${formData.project} 很感興趣。\n\n` +
      `期待能透過 ${formData.email} 與你進一步聊聊！\n\n` +
      (formData.message ? `-----\n${formData.message}\n` : '');

    const formPayload = {
      name: formData.name,
      email: formData.email, // Formspree 會自動抓取這個作為回信地址
      project: formData.project,
      message: bodyContent,
      _subject: `[來自作品集網站] ${formData.name} 的面試/合作邀約` // Formspree 自訂主旨的寫法
    };

    try {
      // 將柔柔專屬的 Formspree ID 放進來
      const response = await fetch("https://formspree.io/f/xvznbwnw", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formPayload)
      });
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        console.error(data);
      }
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <footer style={styles.footer} id="contact">
      <style>{`
        .contact-btn:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(60, 53, 46, 0.12) !important;
          border-color: rgba(212, 163, 115, 0.4) !important;
        }
        .contact-btn:hover svg {
          color: var(--accent-sun);
        }
        .contact-btn:hover .line-text,
        .contact-btn:hover .phone-text {
          color: var(--accent-sun) !important;
        }
      `}</style>
      <FadeInUp>
        <div style={styles.mainWrapper}>
          {/* 左側：時空膠囊留言板 */}
          <div style={styles.cardContainer} className="antigravity-card">
            <div style={styles.header}>
              <h2 style={styles.title}>旅人與時空留白</h2>
              <p style={styles.subtitle}>留下一張紙條，我們一起並肩作戰 !</p>
            </div>
            
            <form onSubmit={handleSubmit} style={styles.formContainer}>
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '60px 0', animation: 'fadeIn 1s ease' }}>
                  <p style={{ fontSize: '1.4rem', color: 'var(--accent-sun)', fontWeight: 500, lineHeight: 1.8 }}>
                    時空膠囊已封裝。<br/>謝謝你的停留，我會盡快回信。
                  </p>
                  <style>{`
                    @keyframes fadeIn {
                      from { opacity: 0; transform: translateY(10px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                  `}</style>
                </div>
              ) : (
                <>
                  <p style={styles.sentence}>
                    「 你好，我是 
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="請輸入你的名字/單位" 
                      style={styles.inputField}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    ，<br/><br/>
                    最近看了你的專案，對 
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
                    與你進一步聊聊！」
                  </p>
                  
                  <textarea 
                    ref={textareaRef}
                    name="message"
                    rows="4"
                    placeholder="（ 歡迎直接複製貼上貴司的面試公版邀約文字、或留下你的悄悄話... ）"
                    style={styles.textareaField}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  
                  <div style={styles.buttonWrapper}>
                    <button 
                      type="submit" 
                      className="antigravity-btn pulse-effect" 
                      style={{...styles.submitButton, opacity: status === 'loading' ? 0.7 : 1}}
                      disabled={status === 'loading'}
                    >
                      {status === 'loading' ? '信件傳送中...' : '封裝膠囊 / 送出'}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>

          {/* 右側：聯絡方式面板 */}
          <div style={styles.sidePanel}>
            <div style={styles.sidePanelLine}></div>
            <h4 style={styles.sidePanelTitle}>Connect</h4>
            
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=b0938723075@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink} title="Email Me via Gmail">
              <div style={styles.iconCircle} className="contact-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
            </a>

            <a href="https://line.me/ti/p/~silent0.0" target="_blank" rel="noopener noreferrer" style={styles.iconLink} title="Add LINE">
              <div style={styles.lineBubble} className="contact-btn">
                <span style={styles.lineText} className="line-text">LINE</span>
              </div>
            </a>
            
            <a href="tel:0938723075" style={styles.iconLink} title="Call Me">
              <div style={styles.phoneWrapper} className="contact-btn">
                <span style={styles.phoneNumber} className="phone-text">0938 723 075</span>
              </div>
            </a>
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
  textareaField: {
    fontFamily: "'Noto Serif TC', serif",
    fontSize: '1.1rem',
    color: 'var(--text-main)',
    width: '100%',
    background: 'rgba(60, 53, 46, 0.02)',
    border: '1px dashed #D4A373',
    padding: '16px',
    borderRadius: '8px',
    outline: 'none',
    resize: 'none',
    overflow: 'hidden',
    marginTop: '24px',
    lineHeight: 1.6,
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
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--text-main)',
    boxShadow: '0 8px 24px rgba(60, 53, 46, 0.08)',
    border: '1px solid rgba(60, 53, 46, 0.06)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    cursor: 'pointer',
  },
  lineBubble: {
    width: '60px',
    height: '60px',
    borderRadius: '24px 24px 24px 8px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 8px 24px rgba(60, 53, 46, 0.08)',
    border: '1px solid rgba(60, 53, 46, 0.06)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    cursor: 'pointer',
  },
  lineText: {
    fontWeight: 800,
    fontSize: '0.95rem',
    fontFamily: "'Inter', sans-serif",
    color: 'var(--text-main)',
    letterSpacing: '0.05em',
    transition: 'color 0.4s',
  },
  phoneWrapper: {
    marginTop: '8px',
    backgroundColor: '#fff',
    padding: '14px 24px',
    borderRadius: '50px',
    boxShadow: '0 8px 24px rgba(60, 53, 46, 0.08)',
    border: '1px solid rgba(60, 53, 46, 0.06)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  phoneNumber: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '1.05rem',
    letterSpacing: '0.05em',
    color: 'var(--text-main)',
    fontWeight: 600,
    transition: 'color 0.4s',
  }
};
