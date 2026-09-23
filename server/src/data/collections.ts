import type { Collection } from "../types/index.js";

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
  },
  {
    id: "autumn_animals",

    title: "Autumn Animals",

    subtitle: "Explore Autumn and how these 9 animals live through the autumn.",

    description:
      "Nine gentle story cards inviting children to wonder, discover and explore autumn animals.",

    coverImage: "/images/autumn animals/cover.png",

    cards: [
        {
        id: 1,

        title: "🐻 Brown Bear",

        subtitle: "Preparing for Winter",

        frontImage: "/images/autumn animals/1.png",

        storyTime:
          "Golden leaves cover the forest floor as the brown bear searches for berries and roots. Autumn is the season for eating and preparing. The bear knows the long winter sleep is coming soon. Every mouthful helps build strength for the cold months ahead while the forest slowly grows quieter each day.",

        wonderQuestions: [
          "What foods do you think the bear likes best in autumn?",
          "How would you prepare if you had to sleep all winter?"
        ],

        miniFacts: [
          "🍂 Bears eat much more in autumn before winter sleep",
          "🫐 Berries and roots give bears important energy",
          "❄️ Brown bears rest in dens during the coldest months"
        ]
        },
        {
        id: 2,
        title: "🦊 Red Fox",
        subtitle: "Hunting Through Autumn Leaves",
        frontImage: "/images/autumn animals/2.png",
        storyTime: "The red fox walks softly through the falling leaves. The forest smells different now — colder air, wet earth, and hidden animals beneath the leaves. Autumn is a busy hunting season. Soon winter will arrive, and finding food may become harder. The fox listens carefully for tiny sounds under the golden forest floor.",
        wonderQuestions: [
        "What sounds do you think the fox can hear beneath the leaves?",
        "Why might autumn be an important season for hunting?"
        ],
        miniFacts: [
            "👂 Foxes can hear tiny animals moving under leaves and snow",
            "🍂 Autumn winds carry many new scents through the forest",
            "🦊 Foxes often hunt most actively at sunrise and sunset"
        ]
        },
        {
        id: 3,
        title: "🐇 Mountain Hare",
        subtitle: "Preparing a Winter Coat",
        frontImage: "/images/autumn animals/3.png",
        storyTime: "The mountain hare sits quietly among the orange and brown plants. Its summer fur is beginning to change. Soon the hare will wear a thick white winter coat to hide in the snow. Autumn is a season of change, and the hare must be ready before the first storms arrive in the mountains.",
        wonderQuestions: [
            "Why do you think the hare changes color before winter?",
            "How do animals know when the seasons are changing?"
        ],
        miniFacts: [
            "🤍 Mountain hares grow thicker fur before winter",
            "🍂 Their fur begins changing before the first snowfall",
            "👂 Hares stay very alert to hear danger nearby"
        ]
        },
        {
        id: 4,
        title: "🦌 Reindeer",
        subtitle: "Following the Autumn Paths",
        frontImage: "/images/autumn animals/4.png",
        storyTime: "A cool wind moves across the open hills as the reindeer herd travels together. Autumn is the time for moving toward winter feeding grounds. The calves stay close to the adults while leaves blow across the tundra. The long journey helps the herd find safer places where food can still be found during winter.",
        wonderQuestions: [
            "Why do you think reindeer travel together in autumn?",
            "What would it feel like to walk across windy hills every day?"
        ],
        miniFacts: [
            "🦌 Reindeer often travel long distances before winter",
            "🍂 Herds stay together for protection and guidance",
            "❄️ Reindeer use their hooves to dig for food under snow"
        ]
        },
        {
        id: 5,
        title: "🦉 Owl",
        subtitle: "Listening to the Autumn Forest",
        frontImage: "/images/autumn animals/5.png",
        storyTime: "The owl sits silently on a branch as evening light fades through the trees. Fewer birds sing now, and the forest feels calm and still. Autumn nights grow longer each week. The owl listens carefully for small movements below while dry leaves drift slowly through the cool air.",
        wonderQuestions: [
            "Why do you think the forest becomes quieter in autumn?",
            "How do you think the owl sees in the dark?"
        ],
        miniFacts: [
            "🦉 Owls can fly almost silently through the forest",
            "🌙 Many owls hunt most actively at night",
            "🍂 Longer autumn nights give owls more hunting time"
        ]
        },
        {
        id: 6,
        title: "🐿️ Red Squirrel",
        subtitle: "Storing Food for Winter",
        frontImage: "/images/autumn animals/6.png",
        storyTime: "The little squirrel works quickly among the fallen leaves. Acorns, seeds, and nuts are hidden carefully in many secret places. Autumn is the busiest season of all. Before winter arrives, the squirrel must gather enough food to survive the cold days ahead. Its tiny paws never seem to stop moving.",
        wonderQuestions: [
            " Where do you think the squirrel hides its food?",
            "What foods would you save for winter if you were a squirrel?"
        ],
        miniFacts: [
            "🌰 Squirrels hide food in many different places",
            "🍂 Some squirrels remember hundreds of hiding spots",
            "❄️ Stored food helps squirrels survive winter"
        ]
        },
        {
        id: 7,
        title: "🦫 Beaver",
        subtitle: "Strengthening the Lodge",
        frontImage: "/images/autumn animals/7.png",
        storyTime: "The beaver carries heavy branches through the chilly autumn water. Before winter ice covers the river, the lodge must be strong and safe. More sticks are added to the walls each day. The beaver works carefully while orange leaves float across the quiet water beside its home.",
        wonderQuestions: [
            "Why do you think beavers work so hard before winter?",
            "What would happen if the lodge was not strong enough?"
        ],
        miniFacts: [
            "🪵 Beavers build strong lodges from sticks and mud",
            "🌊 Beaver dams can slow rivers and create ponds",
            "❄️ Beavers stay active all winter inside their lodges"
        ]
        },
        {
        id: 8,
        title: "🐦 Bullfinch",
        subtitle: "Searching for Autumn Berries",
        frontImage: "/images/autumn animals/8.png",
        storyTime: "The bullfinch balances gently on a thin branch with bright berries in its beak. Many plants are losing their leaves now, and food will soon become harder to find. Autumn is the time for searching carefully and eating well before winter frost covers the forest.",
        wonderQuestions: [
            "Why might berries be important for birds in autumn?",
            "What colors do you notice most in the autumn forest?"
        ],
        miniFacts: [
            "🍒 Bullfinches eat seeds, buds, and berries",
            "🍂 Many birds spend autumn searching for extra food",
            "🐦 Bright feathers help bullfinches stand out in the forest"
        ]
        },
        {
        id: 9,
        title: "🐺 Wolf",
        subtitle: "Staying Close to the Pack",
        frontImage: "/images/autumn animals/9.png",
        storyTime: "The wolves move quietly together through the cold autumn forest. Dry leaves crunch softly beneath their paws as evening mist fills the trees. Autumn is a season for staying close to the pack. Together the wolves can travel farther, find food more easily, and prepare for the long winter ahead.",
        wonderQuestions: [
            "Why do you think wolves stay together in a pack?",
            "How do animals help each other during colder seasons?"
        ],
        miniFacts: [
            "🐺 Wolves communicate using sounds, scent, and body language",
            "🍂 Packs often travel together during autumn and winter",
            "👣 Wolves can walk many kilometers in a single day"
        ]
        }
        
    ]
  }
];