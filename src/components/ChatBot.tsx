import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
    id: number;
    role: 'user' | 'assistant';
    content: string;
}

export default function ChatBot() {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, role: 'assistant', content: "Hi! I'm Ujjwal's AI assistant. Ask me anything about his experience, projects, or architecture choices." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const endOfMessagesRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg: Message = { id: Date.now(), role: 'user', content: input.trim() };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch(import.meta.env.VITE_API_URL || 'https://portfolio-backend-0eky.onrender.com/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg.content })
            });

            if (!response.ok) throw new Error('API error');

            const data = await response.json();
            setMessages(prev => [...prev, { id: Date.now(), role: 'assistant', content: data.response }]);
        } catch (error) {
            setMessages(prev => [...prev, { id: Date.now(), role: 'assistant', content: "Sorry, I'm having trouble connecting to the server right now. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="ai-chat" className="section container">
            <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '600px', border: '1px solid var(--accent-glow)', boxShadow: '0 0 40px var(--accent-glow)' }}>

                {/* Header */}
                <div style={{ padding: '20px 24px', background: 'var(--glass-bg)', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ background: 'var(--accent)', color: 'var(--bg-primary)', padding: '10px', borderRadius: '50%' }}>
                        <Bot size={24} />
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: 600, margin: 0, color: 'var(--text-primary)' }}>Ask About My Work</h2>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                            <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px #22c55e' }}></span> AI Assistant Online
                        </div>
                    </div>
                </div>

                {/* Chat Area */}
                <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {messages.map(msg => (
                        <div key={msg.id} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
                            <div style={{ background: msg.role === 'user' ? 'var(--text-primary)' : 'var(--glass-bg)', color: msg.role === 'user' ? 'var(--bg-primary)' : 'var(--accent)', padding: '10px', borderRadius: '50%', flexShrink: 0 }}>
                                {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                            </div>
                            <div style={{ background: msg.role === 'user' ? 'var(--text-primary)' : 'var(--glass-bg)', color: msg.role === 'user' ? 'var(--bg-primary)' : 'var(--text-primary)', padding: '14px 18px', borderRadius: '16px', border: msg.role === 'assistant' ? '1px solid var(--glass-border)' : 'none', maxWidth: '80%', fontSize: '1rem', lineHeight: 1.6 }}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                            <div style={{ background: 'var(--glass-bg)', color: 'var(--accent)', padding: '10px', borderRadius: '50%', flexShrink: 0 }}>
                                <Bot size={20} />
                            </div>
                            <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
                                <Loader2 size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} /> Searching knowledge base...
                            </div>
                        </div>
                    )}
                    <div ref={endOfMessagesRef} />
                </div>

                {/* Input Area */}
                <div style={{ padding: '24px', background: 'var(--glass-bg)', borderTop: '1px solid var(--glass-border)' }}>
                    <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} style={{ display: 'flex', gap: '12px', background: 'var(--bg-secondary)', padding: '10px', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="E.g., How does your ingestion system scale?"
                            style={{ flex: 1, background: 'transparent', border: 'none', color: 'var(--text-primary)', padding: '8px 12px', fontSize: '1.05rem', outline: 'none' }}
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isLoading}
                            style={{ background: input.trim() && !isLoading ? 'var(--accent)' : 'var(--glass-bg)', color: input.trim() && !isLoading ? 'var(--bg-primary)' : 'var(--text-secondary)', border: 'none', borderRadius: '12px', padding: '12px 20px', cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Send size={20} />
                        </button>
                    </form>
                </div>

            </div>
            <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </section>
    );
}
