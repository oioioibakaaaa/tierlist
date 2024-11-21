'use client'
import { useState, useEffect, useRef } from 'react';

const TIERS = ['S', 'A', 'B', 'C', 'D', 'F'];

const MEME_COINS = [
    { 
        id: '1', 
        name: 'Dogecoin', 
        symbol: 'DOGE', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png' 
    },
    { 
        id: '2', 
        name: 'Shiba Inu', 
        symbol: 'SHIB', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png'
    },
    { 
        id: '3', 
        name: 'Pepe', 
        symbol: 'PEPE', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24478.png'
    },
    { 
        id: '4', 
        name: 'Floki', 
        symbol: 'FLOKI', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9116.png'
    },
    { 
        id: '5', 
        name: 'Bonk', 
        symbol: 'BONK', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/23095.png'
    },
    { 
        id: '6', 
        name: 'Dogwifhat', 
        symbol: 'WIF', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28735.png'
    },
    { 
        id: '7', 
        name: 'BOOK OF MEME', 
        symbol: 'BOME', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29309.png'
    },
    { 
        id: '8', 
        name: 'Meme', 
        symbol: 'MEME', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28600.png'
    },
    { 
        id: '9', 
        name: 'Wojak', 
        symbol: 'WOJAK', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28251.png'
    },
    { 
        id: '10', 
        name: 'Myro', 
        symbol: 'MYRO', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29415.png'
    },
    { 
        id: '11', 
        name: 'Smog', 
        symbol: 'SMOG', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29242.png'
    },
    { 
        id: '12', 
        name: 'Pepe 2.0', 
        symbol: 'PEPE2.0', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28546.png'
    },
    { 
        id: '13', 
        name: 'Dogecoin20', 
        symbol: 'DOGE20', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29462.png'
    },
    { 
        id: '14', 
        name: 'SLERF', 
        symbol: 'SLERF', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29476.png'
    },
    { 
        id: '15', 
        name: 'Ponke', 
        symbol: 'PONKE', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29447.png'
    },
    { 
        id: '16', 
        name: 'Scotty the AI', 
        symbol: 'SCOTTY', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28642.png'
    },
    { 
        id: '17', 
        name: 'POPCAT', 
        symbol: 'POPCAT', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29547.png'
    },
    { 
        id: '18', 
        name: 'Memecoin', 
        symbol: 'MEME', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24770.png'
    },
    { 
        id: '19', 
        name: 'Dogeverse', 
        symbol: 'DOGEVERSE', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29458.png'
    },
    { 
        id: '20', 
        name: 'Tamadoge', 
        symbol: 'TAMA', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/21471.png'
    },
    { 
        id: '21', 
        name: 'Paramount', 
        symbol: 'PARA', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29560.png'
    },
    { 
        id: '22', 
        name: 'Sponge V2', 
        symbol: 'SPONGEV2', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28420.png'
    },
    { 
        id: '23', 
        name: 'Dogey-Inu', 
        symbol: 'DINU', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10170.png'
    },
    { 
        id: '24', 
        name: 'Memeinator', 
        symbol: 'MMTR', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28490.png'
    },
    { 
        id: '25', 
        name: 'Wall Street Memes', 
        symbol: 'WSM', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/25275.png'
    },
    { 
        id: '26', 
        name: 'Kishu Inu', 
        symbol: 'KISHU', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9386.png'
    },
    { 
        id: '27', 
        name: 'Milady Meme Coin', 
        symbol: 'LADYS', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/24483.png'
    },
    { 
        id: '28', 
        name: 'Memag', 
        symbol: 'MEMAG', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28474.png'
    },
    { 
        id: '29', 
        name: 'Pikaboss', 
        symbol: 'PIKA', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29570.png'
    },
    { 
        id: '30', 
        name: 'Kitty Inu', 
        symbol: 'KIT', 
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16264.png'
    }
];

interface Comment {
    id: string;
    username: string;
    content: string;
    rating: number;
    createdAt: Date;
    likes: number;
}

interface Coin {
    id: string;
    name: string;
    symbol: string;
    image: string;
    tier?: string;
    comments?: Comment[];
}

const CommentSection = ({ coin, onClose }: { coin: Coin; onClose: () => void }) => {
    const [comments, setComments] = useState<Comment[]>(coin.comments || []);
    const [newComment, setNewComment] = useState('');
    const [rating, setRating] = useState(5);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const comment: Comment = {
            id: Date.now().toString(),
            username: 'Anonymous',
            content: newComment,
            rating,
            createdAt: new Date(),
            likes: 0
        };
        setComments([comment, ...comments]);
        setNewComment('');
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-[#2a2a2a] rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-4">
                        <img src={coin.image} alt={coin.name} className="w-12 h-12" />
                        <h2 className="text-2xl font-bold text-white">{coin.name}</h2>
                    </div>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="mb-6">
                    <div className="flex gap-2 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                onClick={() => setRating(star)}
                                className={`text-2xl ${
                                    star <= rating ? 'text-yellow-500' : 'text-gray-400'
                                }`}
                            >
                                ★
                            </button>
                        ))}
                    </div>
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="w-full p-2 rounded bg-[#3a3a3a] text-white resize-none"
                        placeholder="Write a comment..."
                        rows={3}
                    />
                    <button
                        type="submit"
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        Post Comment
                    </button>
                </form>

                <div className="space-y-4">
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="bg-[#3a3a3a] p-4 rounded animate-fadeIn"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="text-white font-bold">
                                        {comment.username}
                                    </div>
                                    <div className="text-yellow-500">
                                        {'★'.repeat(comment.rating)}
                                        {'☆'.repeat(5 - comment.rating)}
                                    </div>
                                </div>
                                <div className="text-gray-400 text-sm">
                                    {new Date(comment.createdAt).toLocaleDateString()}
                                </div>
                            </div>
                            <p className="text-white mt-2">{comment.content}</p>
                            <button 
                                onClick={() => {
                                    const updatedComments = comments.map(c =>
                                        c.id === comment.id 
                                            ? { ...c, likes: c.likes + 1 }
                                            : c
                                    );
                                    setComments(updatedComments);
                                }}
                                className="mt-2 text-gray-400 hover:text-blue-500 transition-colors"
                            >
                                👍 {comment.likes}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    const [coins, setCoins] = useState<Coin[]>(MEME_COINS);
    const [draggedCoin, setDraggedCoin] = useState<Coin | null>(null);
    const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);
    const dragItemRef = useRef<HTMLDivElement>(null);
    const dropZoneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const savedCoins = localStorage.getItem('memeCoins');
        if (savedCoins) {
            setCoins(JSON.parse(savedCoins));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('memeCoins', JSON.stringify(coins));
    }, [coins]);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, coin: Coin) => {
        setDraggedCoin(coin);
        if (dragItemRef.current) {
            dragItemRef.current.style.opacity = '0.5';
        }
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        if (dragItemRef.current) {
            dragItemRef.current.style.opacity = '1';
            dragItemRef.current.classList.add('coin-drop-animation');
            setTimeout(() => {
                if (dragItemRef.current) {
                    dragItemRef.current.classList.remove('coin-drop-animation');
                }
            }, 300);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (dropZoneRef.current) {
            dropZoneRef.current.classList.add('tier-hover-effect');
        }
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        if (dropZoneRef.current) {
            dropZoneRef.current.classList.remove('tier-hover-effect');
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, tier: string) => {
        e.preventDefault();
        if (dropZoneRef.current) {
            dropZoneRef.current.classList.remove('tier-hover-effect');
        }
        if (draggedCoin) {
            const updatedCoins = coins.map(c => 
                c.id === draggedCoin.id ? { ...c, tier } : c
            );
            setCoins(updatedCoins);
        }
    };

    const handleReset = () => {
        setCoins(MEME_COINS);
        localStorage.removeItem('memeCoins');
    };

    return (
        <main className="min-h-screen p-8 bg-gradient-to-br from-[#13151a] to-[#1e2128] cyberpunk-grid">
            <div className="max-w-6xl mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0ff] to-transparent opacity-10 pointer-events-none" />
                
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-5xl font-bold neon-text">
                        Crypto Tier Master
                    </h1>
                    <button
                        onClick={handleReset}
                        className="reset-button"
                    >
                        Reset Tier List
                    </button>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0ff] to-[#ff00ff] opacity-5 pointer-events-none" />
                    
                    {TIERS.map(tier => (
                        <div key={tier} className="tier-row group">
                            <div className={`tier-label tier-${tier} group-hover:scale-105 transition-transform`}>
                                {tier}
                            </div>
                            <div 
                                ref={dropZoneRef}
                                className="tier-content"
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={(e) => handleDrop(e, tier)}
                            >
                                {coins
                                    .filter(coin => coin.tier === tier)
                                    .map(coin => (
                                        <div
                                            key={coin.id}
                                            ref={dragItemRef}
                                            className="coin-item floating"
                                            draggable
                                            onDragStart={(e) => handleDragStart(e, coin)}
                                            onDragEnd={handleDragEnd}
                                            onClick={() => setSelectedCoin(coin)}
                                        >
                                            <img 
                                                src={coin.image} 
                                                alt={coin.name} 
                                                className="w-12 h-12 mx-auto"
                                            />
                                            <span className="block text-center mt-2">{coin.symbol}</span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-xl p-6 border border-[rgba(255,255,255,0.2)]">
                    <h2 className="text-2xl font-bold mb-6 text-center font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-[#0ff] to-[#ff00ff]">
                        Available Coins
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {coins
                            .filter(coin => !coin.tier)
                            .map(coin => (
                                <div
                                    key={coin.id}
                                    ref={dragItemRef}
                                    className="coin-item floating"
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, coin)}
                                    onDragEnd={handleDragEnd}
                                    onClick={() => setSelectedCoin(coin)}
                                >
                                    <img 
                                        src={coin.image} 
                                        alt={coin.name} 
                                        className="w-12 h-12 mx-auto"
                                    />
                                    <span className="block text-center mt-2">{coin.symbol}</span>
                                </div>
                            ))}
                    </div>
                </div>

                {selectedCoin && (
                    <CommentSection 
                        coin={selectedCoin} 
                        onClose={() => setSelectedCoin(null)} 
                    />
                )}
            </div>
        </main>
    );
}