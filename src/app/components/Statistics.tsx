interface StatisticsProps {
    coins: {
        id: string;
        tier?: string;
    }[];
}

const TIERS = ['S', 'A', 'B', 'C', 'D', 'F'];

export default function Statistics({ coins }: StatisticsProps) {
    const tierStats = TIERS.map(tier => ({
        tier,
        count: coins.filter(c => c.tier === tier).length
    }));

    return (
        <div className="mt-8 bg-[#2a2a2a] p-4 rounded-lg">
            <h2 className="text-white text-xl mb-4">Tier Statistics</h2>
            <div className="flex gap-4">
                {tierStats.map(({ tier, count }) => (
                    <div 
                        key={tier}
                        className={`tier-${tier} p-4 rounded-lg flex-1`}
                    >
                        <div className="text-2xl font-bold text-white">{tier}</div>
                        <div className="text-white">{count} coins</div>
                    </div>
                ))}
            </div>
        </div>
    );
}   