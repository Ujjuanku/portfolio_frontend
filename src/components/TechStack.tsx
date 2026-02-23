import { Code, Database, Server, Wrench } from 'lucide-react';

const categories = [
    {
        title: "Generative AI",
        icon: <Wrench size={20} />,
        skills: ["LangChain", "LangGraph", "OpenAI API", "RAG pipelines", "Hybrid Retrieval", "Prompt Engineering", "Embeddings", "AI Agents"]
    },
    {
        title: "Backend",
        icon: <Server size={20} />,
        skills: ["Python", "FastAPI", "Node.js", "NestJS", "Spring Boot"]
    },
    {
        title: "Databases",
        icon: <Database size={20} />,
        skills: ["PostgreSQL", "MongoDB", "Pinecone", "FAISS", "Vector Databases"]
    },
    {
        title: "DevOps",
        icon: <Code size={20} />,
        skills: ["Docker", "Railway", "Render", "Vercel", "Hugging Face Spaces"]
    }
];

export default function TechStack() {
    return (
        <section id="tech-stack" className="section container">
            <h2 className="section-title">Technical Arsenal</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                {categories.map((cat, index) => (
                    <div key={index} className="glass-panel" style={{ padding: '24px', transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', color: 'var(--text-primary)' }}>
                            <div style={{ padding: '10px', background: 'rgba(96, 165, 250, 0.1)', borderRadius: '10px', color: 'var(--accent)' }}>
                                {cat.icon}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{cat.title}</h3>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {cat.skills.map((skill, i) => (
                                <span key={i} style={{ background: 'var(--glass-bg)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)', border: '1px solid var(--glass-border)' }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
