import type { Collection } from "../types";

export const collections: Collection[] = [
  {
    id: "solar",

    title: "A Quiet Journey Through Solar System",

    subtitle: "Story Cards for Curious Young Explorers",

    description:
      "Nine gentle story cards inviting children to wonder, discover and explore the universe.",

    coverImage: "/images/solar system/cover.png",

    cards: [
        {
        id: 1,

        title: "☀️ Welcome to the Solar System",

        subtitle: "A Family of Worlds Around the Sun",

        frontImage: "/images/solar system/1.png",

        storyTime:
          "Our Solar System is a busy neighborhood in space. At its center is the Sun, a star that gives light and warmth. Eight planets travel around it, along with moons, dwarf planets, asteroids and comets. Some worlds are rocky, others are enormous and cloudy, but they all belong to the same Solar System.",

        wonderQuestions: [
          "🌍 Which world in the Solar System would you most like to explore?",
          "🔭 What differences can you notice between the planets?"
        ],

        miniFacts: [
          "☀️ The Sun is the star at the center of our Solar System.",
          "🪐 Eight planets travel around the Sun.",
          "☄️ The Solar System also contains moons, asteroids, comets and dwarf planets."
        ]
        },
        {
        id: 2,
        title: "🌞 The Sun at the Center",
        subtitle: "The Star That Holds It All Together",
        frontImage: "/images/solar system/2.png",
        storyTime: "The Sun is much larger than any planet in our Solar System. Its gravity helps keep the planets traveling along their paths around it. Deep inside the Sun, enormous amounts of energy are produced, sending light and heat into space. Even Earth, far away, depends on this distant star for warmth and energy.",
        wonderQuestions: [
        "☀️ Why do you think the Sun is so important to Earth?",
        "🪐 What might happen if planets did not travel around the Sun?"
        ],
        miniFacts: [
            "⭐ The Sun is a star.",
            "🧲 Its gravity helps keep the planets in orbit.",
            "🌎 Sunlight takes about eight minutes to reach Earth."
        ]
        },
        {
        id: 3,
        title: "🪨 The Rocky Planets",
        subtitle: "Small Worlds Close to the Sun",
        frontImage: "/images/solar system/3.png",
        storyTime: "Closest to the Sun are four rocky planets: Mercury, Venus, Earth and Mars. They are smaller than the giant planets farther away and have solid surfaces beneath their skies. Yet each one is different. Mercury is heavily cratered, Venus is wrapped in thick clouds, Earth has oceans, and Mars is a cold desert.",
        wonderQuestions: [
            "🪨 What do all four rocky planets have in common?",
            "🌍 Which of these worlds looks most different from Earth?"
        ],
        miniFacts: [
            "🌞 Mercury, Venus, Earth and Mars are the four inner planets.",
            "🪨 All four are rocky worlds with solid surfaces.",
            "📏 They are smaller than the giant planets of the outer Solar System."
        ]
        },
        {
        id: 4,
        title: "🌍 Earth, Our Blue Home",
        subtitle: "One Living Planet in Space",
        frontImage: "/images/solar system/4.png",
        storyTime: "Earth is our home among the planets. From space, its oceans make it appear beautifully blue, while swirling clouds move through its atmosphere. Liquid water covers much of the surface, and countless living things share the planet. Earth also has one natural satellite— the Moon—traveling beside it on its journey around the Sun.",
        wonderQuestions: [
            "💧 Why might water be important for life on Earth?",
            "🌎 What makes Earth look different from the other planets?"
        ],
        miniFacts: [
            "🌊 Most of Earth’s surface is covered by water.",
            "🌱 Earth is the only world known to support life.",
            "🌙 Earth has one natural satellite: the Moon."
        ]
        },
        {
        id: 5,
        title: "🔴 Mars, the Red Planet",
        subtitle: "A Cold Desert World",
        frontImage: "/images/solar system/5.png",
        storyTime: "Mars is a cold, rocky desert covered in rusty dust that gives the planet its reddish color. Long ago, liquid water flowed across parts of its surface, leaving valleys and other clues behind. Today Mars is dry and chilly, with a thin atmosphere and two tiny moons traveling around it.",
        wonderQuestions: [
            "💧 What clues might scientists look for to discover where water once flowed?",
            "🚀 What would be different about exploring Mars instead of Earth?"
        ],
        miniFacts: [
            "🔴 Iron-rich minerals help give Mars its red color.",
            "❄ Mars is a cold desert world with a thin atmosphere.",
            "🌙 Mars has two small moons, Phobos and Deimos."
        ]
        },
        {
        id: 6,
        title: "🪐 The Giant Outer Planets",
        subtitle: "Big Worlds Far From the Sun",
        frontImage: "/images/solar system/6.png",
        storyTime: "Beyond Mars are four enormous planets: Jupiter, Saturn, Uranus and Neptune. Jupiter and Saturn are mostly made of gases, while Uranus and Neptune contain more icy materials deep inside. These distant worlds have many moons, powerful weather and ring systems, making the outer Solar System very different from the rocky planets near the Sun.",
        wonderQuestions: [
            "🪐 Why might giant planets look so different from rocky planets?",
            "🌪 What kind of weather do you imagine on a giant planet?"
        ],
        miniFacts: [
            "🟤 Jupiter is the largest planet in the Solar System.",
            "💍 All four giant planets have rings.",
            "❄ Uranus and Neptune are often called ice giants."
        ]
        },
        {
        id: 7,
        title: "💫 Moons, Rings and Small Worlds",
        subtitle: "More Than Just Planets",
        frontImage: "/images/solar system/7.png",
        storyTime: "Planets are only part of the Solar System. Hundreds of moons travel around planets and dwarf planets, while countless smaller rocky and icy objects move through space. Asteroids, comets and ring particles all have their own journeys. Together they show that our Solar System contains an enormous variety of worlds, from tiny fragments to giant planets.",
        wonderQuestions: [
            "🌙 Why do you think some planets have many moons?",
            "☄ How might a tiny asteroid be different from a planet?"
        ],
        miniFacts: [
            "🌙 Many planets in our Solar System have moons.",
            "☄ Comets are made partly of ice, dust and rock.",
            "🪨 Most asteroids are much smaller than planets."
        ]
        },
        {
        id: 8,
        title: "❄ Far Out in the Dark",
        subtitle: "The Cold Edge of the Solar System",
        frontImage: "/images/solar system/8.png",
        storyTime: "Far beyond Neptune, sunlight grows faint and the Solar System becomes colder and darker. This distant region contains icy worlds, including dwarf planets such as Pluto, as well as many smaller frozen objects. Even here, these faraway bodies remain connected to the Sun by gravity as they continue their long journeys through space.",
        wonderQuestions: [
            "❄ What might it feel like to stand on a world so far from the Sun?",
            "🔭 Why might distant worlds be difficult for scientists to study?"
        ],
        miniFacts: [
            "🌑 Pluto is a dwarf planet beyond Neptune.",
            "❄ Many distant Solar System objects contain frozen materials.",
            "☀ Sunlight becomes much weaker the farther you travel from the Sun."
        ]
        },
        {
        id: 9,
        title: "🌌 A Journey Through Our Solar System",
        subtitle: "Many Worlds, One Shared Story",
        frontImage: "/images/solar system/9.png",
        storyTime: "From the glowing Sun to tiny icy worlds far away, the Solar System is filled with remarkable places. Rocky planets, giant planets, moons, asteroids and comets all move through space under the Sun’s gravity. Each world is different, yet together they form one enormous system—and Earth is our small home within it.",
        wonderQuestions: [
            "🌌 What surprised you most about our Solar System?",
            "🚀 Where would you choose to travel if you could explore one world?"
        ],
        miniFacts: [
            "☀ The Solar System formed about 4.6 billion years ago.",
            "🪐 All eight planets orbit the Sun.",
            "🌍 Earth is one small world within a much larger Solar System."
        ]
        }
        
    ]
  }
];