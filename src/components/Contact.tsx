import { Mail, Github, Linkedin, Calendar } from 'lucide-react';

export default function Contact() {
    return (
        <footer id="contact" style={{ borderTop: '1px solid var(--glass-border)', padding: '80px 0 40px', marginTop: '80px', background: 'var(--bg-secondary)' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px', color: 'var(--text-primary)' }}>
                    Let's Build Together
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '600px', marginBottom: '40px', lineHeight: 1.6 }}>
                    I'm currently open for new opportunities to build scalable AI systems. Whether you have a question or just want to connect, my inbox is always open.
                </p>

                <div style={{ display: 'flex', gap: '24px', marginBottom: '60px' }}>
                    <a href="mailto:2001ujjwaljha@gmail.com" className="btn btn-outline" style={{ borderRadius: '50%', width: '56px', height: '56px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Mail size={24} />
                    </a>
                    <a href="https://github.com/Ujjuanku" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ borderRadius: '50%', width: '56px', height: '56px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/ujjwal-jha-8937b6218/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ borderRadius: '50%', width: '56px', height: '56px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Linkedin size={24} />
                    </a>
                </div>

                <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={16} /> Designed & Built by Ujjwal Jha © {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
}
