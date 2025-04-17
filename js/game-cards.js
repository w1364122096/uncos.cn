const games = window.gameData || [];

document.addEventListener('DOMContentLoaded', function() {
    // 获取页面类型
    const pageType = document.body.dataset.pageType;
    const categoryType = document.body.dataset.category;
    
    const gameCardsContainer = document.getElementById('game-cards');
    if (!gameCardsContainer) return;
    
    let gamesList = [...games];
    
    // 根据页面类型过滤游戏
    if (pageType === 'category' && categoryType) {
        gamesList = games.filter(game => 
            game.category.map(cat => cat.toLowerCase()).includes(categoryType.toLowerCase())
        );
    } else if (pageType === 'featured') {
        gamesList = games.filter(game => game.featured);
    } else if (pageType === 'popular') {
        gamesList = games.filter(game => game.popular);
    } else if (pageType === 'new') {
        gamesList = games.filter(game => game.new);
    }
    
    // 生成游戏卡片
    gamesList.forEach(game => {
        const gameCard = createGameCard(game);
        gameCardsContainer.appendChild(gameCard);
    });
    
    // 如果是空的,添加"即将推出"提示
    if (gamesList.length === 0) {
        const comingSoon = document.createElement('div');
        comingSoon.className = "game-card bg-white shadow bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center";
        comingSoon.innerHTML = `
            <div class="text-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p class="text-gray-500">More games coming soon!</p>
            </div>
        `;
        gameCardsContainer.appendChild(comingSoon);
    }
});

function createGameCard(game) {
    const cardDiv = document.createElement('div');
    cardDiv.className = "game-card bg-white shadow";
    
    // 生成标签HTML
    const tagsHTML = game.category.map(cat => 
        `<span class="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">${cat}</span>`
    ).join('');
    
    // 设置卡片内容
    cardDiv.innerHTML = `
        <div class="relative">
            <img src="${game.thumbnailUrl}" alt="${game.title}" class="w-full game-thumb">
            ${game.new ? '<div class="absolute top-2 right-2"><span class="bg-apple-green text-white text-xs font-bold px-2 py-1 rounded">NEW</span></div>' : ''}
            ${game.popular && !game.new ? '<div class="absolute top-2 right-2"><span class="bg-apple-red text-white text-xs font-bold px-2 py-1 rounded">HOT</span></div>' : ''}
        </div>
        <div class="p-4">
            <h3 class="font-bold text-lg mb-2">${game.title}</h3>
            <p class="text-gray-600 text-sm mb-3 line-clamp-2">${game.description}</p>
            <div class="flex justify-between items-center">
                <div class="flex space-x-1">
                    ${tagsHTML}
                </div>
                <a href="/games/${game.id}/" class="text-apple-blue font-semibold hover:underline">Play</a>
            </div>
        </div>
    `;
    
    return cardDiv;
}

window.gameData = games; 