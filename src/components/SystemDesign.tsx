import { Cpu, Lightbulb } from 'lucide-react';

export default function SystemDesign() {
    return (
        <section id="insights" className="section container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>

                <div className="glass-panel" style={{ padding: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                        <div style={{ padding: '12px', background: 'rgba(96, 165, 250, 0.1)', borderRadius: '12px' }}>
                            <Cpu size={28} color="var(--accent)" />
                        </div>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>System Design Thinking</h2>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        Building scalable and reliable systems requires a strong foundation in idempotency, concurrency control, and distributed architecture.
                        I focus on designing systems that gracefully handle failure, ensuring data integrity through pessimistic locking and immutable event logs when processing high-volume transactions or complex AI generation pipelines.
                    </p>
                </div>

                <div className="glass-panel" style={{ padding: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                        <div style={{ padding: '12px', background: 'rgba(167, 139, 250, 0.1)', borderRadius: '12px' }}>
                            <Lightbulb size={28} color="#a78bfa" />
                        </div>
                        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>Currently Exploring</h2>
                    </div>
                    <ul style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 2.2, listStyle: 'none', padding: 0 }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ width: '8px', height: '8px', background: '#a78bfa', borderRadius: '50%' }}></div> Agentic AI Frameworks & Tool Orchestration</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ width: '8px', height: '8px', background: '#a78bfa', borderRadius: '50%' }}></div> LLM Evaluation & Reliability Metrics</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ width: '8px', height: '8px', background: '#a78bfa', borderRadius: '50%' }}></div> Distributed Systems Reliability Strategies</li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ width: '8px', height: '8px', background: '#a78bfa', borderRadius: '50%' }}></div> Edge Compute & AI Infrastructure Scaling</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
