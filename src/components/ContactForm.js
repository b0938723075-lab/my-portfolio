"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xvznbwnw");

  if (state.succeeded) {
      return (
        <div style={styles.successContainer}>
            <h3 style={styles.successTitle}>✅ 訊息已成功送出！</h3>
            <p style={styles.successText}>謝謝你的來信，我會盡快回覆你。</p>
        </div>
      );
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>你的 Email 信箱</label>
          <input
            id="email"
            type="email" 
            name="email"
            style={styles.input}
            placeholder="example@email.com"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            style={styles.error}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="message" style={styles.label}>想對我說的話</label>
          <textarea
            id="message"
            name="message"
            style={styles.textarea}
            placeholder="哈囉，我很喜歡你的作品..."
            rows="5"
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            style={styles.error}
          />
        </div>

        <button 
          type="submit" 
          disabled={state.submitting} 
          className="antigravity-btn pulse-effect"
          style={styles.button}
        >
          {state.submitting ? '發送中...' : '送出訊息'}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '40px',
    backgroundColor: 'rgba(253, 251, 247, 0.9)',
    backdropFilter: 'blur(16px)',
    borderRadius: '24px',
    boxShadow: '0 10px 40px rgba(60, 53, 46, 0.03)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '1.05rem',
    color: 'var(--text-main)',
    fontWeight: 600,
  },
  input: {
    padding: '16px',
    borderRadius: '12px',
    border: '1px solid rgba(60, 53, 46, 0.1)',
    backgroundColor: 'var(--bg-card)',
    color: 'var(--text-main)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  textarea: {
    padding: '16px',
    borderRadius: '12px',
    border: '1px solid rgba(60, 53, 46, 0.1)',
    backgroundColor: 'var(--bg-card)',
    color: 'var(--text-main)',
    fontSize: '1rem',
    resize: 'vertical',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  error: {
    color: 'var(--accent-sun)',
    fontSize: '0.85rem',
  },
  button: {
    marginTop: '16px',
    width: '100%',
  },
  successContainer: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: 'rgba(253, 251, 247, 0.9)',
    borderRadius: '24px',
    boxShadow: '0 10px 40px rgba(60, 53, 46, 0.03)',
  },
  successTitle: {
    fontSize: '1.5rem',
    color: 'var(--text-main)',
    marginBottom: '16px',
  },
  successText: {
    color: 'var(--text-main)',
    opacity: 0.8,
  }
};
