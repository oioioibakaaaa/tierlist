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
        image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28600.png'
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