import { useState } from "react";

export default function Tutorial() {
    const [showTutorial, setShowTutorial] = useState(true);

    if (!showTutorial) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-md">
                <h2 className="text-2xl font-bold mb-4">How to Use</h2>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>Drag coins from the pool below</li>
                    <li>Drop them into their respective tiers</li>
                    <li>Your progress is automatically saved</li>
                    <li>Share your tier list with friends!</li>
                </ol>
                <button 
                    onClick={() => setShowTutorial(false)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Got it!
                </button>
            </div>
        </div>
    );
}
