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
  {
    id: "tomb-runner",
    title: "Tomb Runner",
    description: "快速奔跑并躲避障碍物的3D冒险游戏，类似Temple Run。收集沿途的点数，跑得越远分数越高。",
    category: ["Action", "Adventure", "3D"],
    thumbnailUrl: "images/games/tomb-runner-thumb.jpg",
    coverUrl: "images/games/tomb-runner-cover.jpg",
    iframeSrc: "https://www.y8.com/embed/tomb_runner",
    featured: true,
    new: true,
    popular: false,
    controls: [
      "点击或按空格键跳跃",
      "下滑动作避开障碍物",
      "左右键或滑动改变方向"
    ],
    features: [
      {
        title: "3D奔跑冒险",
        description: "在精美的3D环境中奔跑，躲避陷阱和障碍物。",
        icon: "lightning"
      },
      {
        title: "简单但具挑战性",
        description: "容易上手但难以掌握的游戏玩法，适合各年龄段玩家。",
        icon: "chart"
      },
      {
        title: "高分挑战",
        description: "不断突破自己的记录，挑战全球玩家的高分。",
        icon: "settings"
      }
    ]
  },
  // 可以添加更多游戏
]

window.gameData = games;

export default games; 