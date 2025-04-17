const games = [
  {
    id: "monster-survivors",
    title: "Monster Survivors",
    description: "Survive the endless onslaught of monsters in this thrilling action-packed adventure.",
    category: ["Action", "Survival", "Adventure"],
    thumbnailUrl: "/images/games/monster-survivors-thumb.jpg",
    coverUrl: "/images/games/monster-survivors-cover.jpg",
    iframeSrc: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html",
    featured: true,
    new: false,
    popular: true,
    controls: [
      "Use WASD or Arrow Keys to move your character",
      "Your character will automatically attack nearby enemies",
      "Press Space to use special abilities when available",
      "Collect experience orbs to level up and choose new abilities"
    ],
    features: [
      {
        title: "Fast-Paced Action",
        description: "Experience non-stop action as you battle waves of monsters with increasing difficulty.",
        icon: "lightning"
      },
      {
        title: "Character Progression",
        description: "Level up your character and unlock powerful abilities to enhance your survival chances.",
        icon: "chart"
      },
      {
        title: "Customizable Gameplay",
        description: "Choose from various weapons and power-ups to create your own unique gameplay style.",
        icon: "settings"
      }
    ]
  },
  // 可以添加更多游戏
]

export default games; 