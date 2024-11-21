'use client'

export default function ParticleBackground() {
    return (
        <div className="particle-container fixed top-0 left-0 w-full h-full z-[-1]">
            {[...Array(50)].map((_, i) => (
                <div
                    key={i}
                    className="particle absolute animate-float"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        opacity: Math.random() * 0.5
                    }}
                >
                    {['₿', '🚀', '💎', '🌕', '📈'][Math.floor(Math.random() * 5)]}
                </div>
            ))}
        </div>
    );
}