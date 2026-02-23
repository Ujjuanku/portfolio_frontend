import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const projects = [
    {
        title: "IntelliTrack – AI Competitive Intelligence",
        description: "A SaaS-grade system that tracks competitor pricing, documentation, and changelog changes using smart paragraph-level diffing and LLM-based strategic categorization.",
        tech: ["Next.js", "Node.js", "OpenAI", "PostgreSQL"],
        liveUrl: "https://intelligence-tracker-frontend.vercel.app",
        githubUrl: "https://github.com/Ujjuanku/Intelligence_Tracker_Merge",
        architecture: "Leverages a cron-triggered ingestion engine to scrape competitor pages. Uses semantic diffing via Embeddings and LLMs to categorize changes into Price, Feature, or API updates, storing them in PostgreSQL."
    },
    {
        title: "High-Integrity Wallet & Ledger System",
        description: "A concurrency-safe transactional wallet system using ACID compliance, pessimistic locking, idempotency keys, and immutable ledger architecture.",
        tech: ["Node.js", "PostgreSQL", "Railway", "ACID"],
        liveUrl: "https://walletservice-production-e07a.up.railway.app",
        githubUrl: "https://github.com/Ujjuanku/Wallet_Service",
        architecture: "Built with strict isolation levels and row-level locking to prevent race conditions during concurrent financial transactions. Every movement is recorded as a double-entry ledger ensuring the sum of all balances matches 0."
    },
    {
        title: "High-Scale Energy Telemetry Ingestion",
        description: "A high-throughput ingestion backend handling 14.4M daily telemetry records with hot/cold storage optimization and indexed analytics endpoints.",
        tech: ["NestJS", "PostgreSQL", "TypeORM", "Render"],
        liveUrl: "https://energy-ingestion.onrender.com",
        githubUrl: "https://github.com/Ujjuanku/Energy-Ingestion",
        architecture: "Implements polymorphic ingestion routing to categorize telemetry data. Uses strict indexing on timestamp and device IDs to ensure sub-100ms analytics queries over millions of rows."
    },
    {
        title: "Acme Tech RAG Chatbot",
        description: "A full-stack Retrieval-Augmented Generation chatbot using Pinecone and OpenAI GPT for grounded enterprise knowledge retrieval.",
        tech: ["FastAPI", "React", "Pinecone", "OpenAI"],
        liveUrl: "https://ragbot-frontend.vercel.app",
        githubUrl: "https://github.com/Ujjuanku/ragbot",
        architecture: "Documents are chunked contextually and embedded via OpenAI embeddings, stored in Pinecone vector DB. Retrieval is done via semantic search, followed by grounded generation using GPT-3.5."
    },
    {
        title: "Production-Grade AI Assistant (API)",
        description: "Built an API-first Retrieval-Augmented Generation system for enterprise knowledge retrieval. Implemented document ingestion, semantic search.",
        tech: ["Python", "FastAPI", "Docker", "Hugging Face"],
        liveUrl: "#",
        githubUrl: "#",
        architecture: "Containerized deployment on Hugging Face Spaces. Implements dynamic tool orchestration to query internal vector stores and provides exact source chunk attribution to virtually eliminate hallucination workflows."
    },
    {
        title: "AI Insight Analytics Dashboard",
        description: "Enterprise-style analytics dashboard built with React and Node.js featuring modular components and optimized API integrations.",
        tech: ["React", "Node.js", "Tailwind", "Vercel"],
        liveUrl: "https://ai-insight-dashboard-dusky.vercel.app",
        githubUrl: "https://github.com/Ujjuanku/ai-insight-dashboard",
        architecture: "Features a modular React architecture with standard state management. API endpoints are highly optimized using standard pagination and caching techniques to handle large datasets."
    }
];

export default function Projects() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    return (
        <section id="projects" className="section container">
            <h2 className="section-title">Featured Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                {projects.map((proj, index) => (
                    <div key={index} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', padding: '24px', transition: 'box-shadow 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(96, 165, 250, 0.15)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px', lineHeight: 1.4 }}>
                            {proj.title}
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem', flexGrow: 1, lineHeight: 1.6 }}>
                            {proj.description}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                            {proj.tech.map((t, i) => (
                                <span key={i} style={{ background: 'rgba(96, 165, 250, 0.08)', color: 'var(--accent)', padding: '6px 12px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                            {proj.liveUrl !== "#" ? (
                                <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ flex: 1, padding: '10px 0', fontSize: '0.9rem' }}>
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            ) : (
                                <button className="btn btn-outline" disabled style={{ flex: 1, padding: '10px 0', fontSize: '0.9rem', opacity: 0.5, cursor: 'not-allowed' }}>
                                    <ExternalLink size={16} /> API Only
                                </button>
                            )}
                            {proj.githubUrl !== "#" && (
                                <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ flex: 1, padding: '10px 0', fontSize: '0.9rem' }}>
                                    <Github size={16} /> Source Code
                                </a>
                            )}
                        </div>

                        <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '16px', marginTop: 'auto' }}>
                            <button
                                onClick={() => setExpandedId(expandedId === index ? null : index)}
                                style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', fontSize: '0.95rem', fontWeight: 500 }}
                            >
                                Architecture Overview
                                {expandedId === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </button>
                            {expandedId === index && (
                                <div style={{ marginTop: '16px', padding: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, borderLeft: '3px solid var(--accent)' }} className="animate-fade-in">
                                    {proj.architecture}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
