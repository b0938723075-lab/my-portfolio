import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
      <Navbar />
      <AboutSection />
    </main>
  );
}
