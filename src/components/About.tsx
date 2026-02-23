import { FileText, ArrowRight } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="section container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '120px' }}>
            <div className="animate-fade-in">
                <div style={{ display: 'inline-block', padding: '6px 16px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '20px', color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 500, marginBottom: '24px' }}>
                    Available for new opportunities
                </div>
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                    Hi, I'm <span style={{ background: 'linear-gradient(90deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ujjwal Jha</span>
                </h1>
                <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 600 }}>
                    Generative AI & Full-Stack Engineer
                </h2>
                <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '700px', marginBottom: '3rem', lineHeight: 1.8 }}>
                    I build production-grade AI systems, scalable ingestion engines, and high-integrity transactional platforms. Specialized in Agentic AI systems, Retrieval-Augmented Generation (RAG), and distributed backend systems.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <a href="/Ujjwal_Jha_Resume.pdf" download="Ujjwal_Jha_Resume.pdf" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <FileText size={18} /> Download Resume
                    </a>
                    <a href="#projects" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        View Projects <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}
