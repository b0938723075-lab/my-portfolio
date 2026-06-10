import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div style={styles.logo}>
          <span style={styles.icon}>✧</span> Yu Jou Chen｜portfolio
        </div>
      </Link>
      <div style={styles.links}>
        <Link href="/#work" style={styles.link}>作品</Link>
        <Link href="/about" style={styles.link}>關於我</Link>
        <Link href="/#contact" style={styles.link}>聯絡</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 5%',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'rgba(253, 251, 247, 0.8)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(60, 53, 46, 0.05)',
    transition: 'all 0.3s ease',
  },
  logo: {
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
    fontSize: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: 'var(--text-main)',
  },
  icon: {
    color: 'var(--accent-sun)',
    fontSize: '1.5rem',
  },
  links: {
    display: 'flex',
    gap: '32px',
  },
  link: {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: '1rem',
    color: 'var(--text-main)',
    cursor: 'pointer',
    transition: 'opacity 0.3s',
  }
};
