export default function ShareButtons() {
    const shareUrl = window.location.href;
    
    return (
        <div className="flex gap-2">
            <button onClick={() => window.open(`https://twitter.com/intent/tweet?url=${shareUrl}`)}>
                Twitter
            </button>
            <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`)}>
                Facebook
            </button>
            <button onClick={() => navigator.clipboard.writeText(shareUrl)}>
                Copy Link
            </button>
        </div>
    );
}