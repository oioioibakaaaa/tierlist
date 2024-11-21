export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#1a1a1a] z-50 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold text-white">🚀 MemeCoin Tier</div>
                <div className="flex gap-4">
                    <button>Export</button>
                    <button>Share</button>
                    <button>Reset</button>
                </div>
            </div>
        </nav>
    );
}