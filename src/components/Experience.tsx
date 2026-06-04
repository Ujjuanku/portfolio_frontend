import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: "Jr. AI/ML Engineer",
        company: "Enspirit Technology",
        location: "Hyderabad",
        duration: "Mar 2026 – June 2026",
        points: [
            "Working on Aura – an intelligent automation platform powered by RAG-based architecture for dynamic document understanding and workflow automation.",
            "Designed and implemented end-to-end document ingestion pipelines supporting multiple formats (PDF, DOCX, TXT) with automated chunking, embedding generation, and vector storage.",
            "Built semantic retrieval workflows leveraging LLMs for grounded, context-aware response generation within the Aura platform.",
            "Collaborated with cross-functional teams to integrate AI capabilities into product features, improving retrieval accuracy."
        ]
    },
    {
        role: "GenAI Engineer (Full-Stack)",
        company: "Bosch Global Software Technologies",
        location: "Hyderabad",
        duration: "Aug 2025 – Jan 2026",
        points: [
            "Architected multi-agent AI systems using LangChain and LangGraph with dynamic tool orchestration.",
            "Designed and deployed production-grade RAG pipelines (ingestion → chunking → embeddings → hybrid retrieval → grounded generation).",
            "Reduced hallucination rate by 30% through structured prompt evaluation and response validation workflows.",
            "Built scalable FastAPI services with async execution and OpenAPI documentation.",
            "Containerized AI services using Docker for enterprise deployment."
        ]
    },
    {
        role: "Full-Stack Engineer",
        company: "Bosch Global Software Technologies",
        location: "Hyderabad",
        duration: "Jan 2025 – Aug 2025",
        points: [
            "Developed modular backend services using Node.js and Spring Boot within microservices architecture.",
            "Optimized SQL indexing strategies reducing API latency by 20%.",
            "Implemented secure coding practices and CI-based deployment workflows."
        ]
    },
    {
        role: "Full-Stack Developer",
        company: "ABL Education",
        location: "Noida",
        duration: "Mar 2024 – Dec 2024",
        points: [
            "Built React-based full-stack web applications with REST APIs.",
            "Improved backend performance by 25% through query optimization and efficient data modeling."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="section container">
            <h2 className="section-title">Professional Experience</h2>
            <div style={{ position: 'relative', borderLeft: '2px solid var(--glass-border)', paddingLeft: '32px', marginLeft: '16px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
                {experiences.map((exp, index) => (
                    <div key={index} className="glass-panel" style={{ padding: '32px', position: 'relative' }}>
                        {/* Timeline Dot */}
                        <div style={{ position: 'absolute', left: '-45px', top: '32px', width: '24px', height: '24px', borderRadius: '50%', background: 'var(--bg-primary)', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }} />
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>{exp.role}</h3>
                                <div style={{ color: 'var(--accent)', fontWeight: 500, fontSize: '1.1rem' }}>{exp.company}</div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>{exp.location}</div>
                            </div>
                            <div style={{ background: 'var(--glass-bg)', padding: '6px 12px', borderRadius: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Briefcase size={14} /> {exp.duration}
                            </div>
                        </div>

                        <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {exp.points.map((point, i) => (
                                <li key={i} style={{ lineHeight: 1.6 }}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
