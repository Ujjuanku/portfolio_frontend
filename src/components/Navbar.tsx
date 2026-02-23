import { Github, Linkedin } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="glass-panel" style={{ position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: 1200, zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px' }}>
            <div style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-primary)', letterSpacing: '-1px' }}>UJ.</div>
            <div style={{ display: 'flex', gap: '32px' }} className="nav-links">
                {/* We can use CSS to show this on larger screens only */}
                <a href="#about" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>About</a>
                <a href="#experience" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Experience</a>
                <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>Projects</a>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
                <a href="https://github.com/Ujjuanku" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
                    <Github size={22} className="hover:text-white" />
                </a>
                <a href="https://www.linkedin.com/in/ujjwal-jha-8937b6218/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}>
                    <Linkedin size={22} className="hover:text-white" />
                </a>
            </div>
        </nav>
    );
}
