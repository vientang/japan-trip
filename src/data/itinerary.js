const itinerary = [
  // ─── TOKYO ───────────────────────────────────────────────────────────────
  {
    date: "2026-06-21",
    day: "Sunday",
    destination: "Tokyo",
    title: "Arrival & Local Walk",
    bookings: [
      {
        name: "Hotel Minn Nihonbashi Suitengumae",
        description: "Home base for Tokyo stay",
        location: "Nihonbashi, Tokyo",
        time: "Check-in",
        confirmationNumber: ""
      },
      {
        name: "Narita Airport Arrival",
        description: "Flight arrives at Narita",
        location: "Narita International Airport",
        time: "14:50",
        confirmationNumber: ""
      }
    ],
    see: [
      {
        name: "Ningyocho",
        description: "Traditional neighborhood near the hotel — great for an evening stroll",
        location: "Nihonbashi, Tokyo",
        time: "",
        confirmationNumber: ""
      }
    ],
    eat: [
      {
        name: "Ningyocho Traditional Snacks",
        description: "Pick up local snacks while exploring the neighborhood",
        location: "Ningyocho, Nihonbashi",
        time: "",
        confirmationNumber: ""
      }
    ],
    explore: [],
    logistics: {
      transport: "Private van transfer from Narita Airport to hotel",
      accommodation: "Hotel Minn Nihonbashi Suitengumae"
    },
    notes: ""
  },
  {
    date: "2026-06-22",
    day: "Monday",
    destination: "Tokyo",
    title: "Old Tokyo — Asakusa",
    bookings: [],
    see: [
      {
        name: "Senso-ji Temple",
        description: "Tokyo's oldest and most famous temple",
        location: "Asakusa, Tokyo",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Nakamise-dori Shopping Street",
        description: "Traditional shopping street leading to Senso-ji, great for souvenirs",
        location: "Asakusa, Tokyo",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Kappabashi Kitchen Supply Town",
        description: "Street lined with kitchen and restaurant supply shops — unique Tokyo experience",
        location: "Asakusa, Tokyo",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Tokyo Skytree",
        description: "One of the world's tallest towers with panoramic city views",
        location: "Asakusa, Tokyo",
        time: "",
        confirmationNumber: ""
      }
    ],
    eat: [
      {
        name: "Kuroge Wagyu Ichinoya Asakusa",
        description: "Famous wagyu beef restaurant in Asakusa",
        location: "Asakusa, Tokyo",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Age.3",
        description: "Known for their stuffed cream sandwich",
        location: "Asakusa, Tokyo",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Melon Pan",
        description: "Look for melon pan from local bakeries or street vendors",
        location: "Asakusa, Tokyo",
        time: "",
        confirmationNumber: ""
      }
    ],
    explore: [],
    logistics: {
      transport: "Train or walk from Nihonbashi to Asakusa",
      accommodation: "Hotel Minn Nihonbashi Suitengumae"
    },
    notes: "Asakusa is pronounced 'a-sak-sa'"
  },
  {
    date: "2026-06-23",
    day: "Tuesday",
    destination: "Tokyo",
    title: "Urban View — Shibuya & Harajuku",
    bookings: [],
    see: [
      {
        name: "Shibuya Crossing",
        description: "The world's busiest pedestrian crossing — best viewed from above at Starbucks or Mag's Park",
        location: "Shibuya, Tokyo",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Harajuku",
        description: "Tokyo's fashion district — quirky street style and shops",
        location: "Harajuku, Tokyo",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Meiji Jingu",
        description: "Serene Shinto shrine surrounded by forest in the middle of the city",
        location: "Harajuku, Tokyo",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Tokyo Public Toilets",
        description: "Famous architectural public restrooms designed by world-class architects",
        location: "Shibuya, Tokyo",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Cat Cafe",
        description: "Relax with cats at one of Tokyo's famous cat cafes",
        location: "Shibuya / Harajuku area",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Omoide Yokocho (Memory Lane)",
        description: "Narrow alley packed with tiny yakitori stalls — atmospheric and old-school Tokyo",
        location: "Shinjuku, Tokyo",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Cat Street",
        description: "Less mainstream shopping street with independent boutiques",
        location: "Harajuku, Tokyo",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Harry Potter Train Station",
        description: "Visit the train station that inspired Platform 9¾",
        location: "Tokyo",
        time: "",
        confirmationNumber: ""
      }
    ],
    eat: [
      {
        name: "Omoide Yokocho",
        description: "Street food and yakitori in the atmospheric Memory Lane alley",
        location: "Shinjuku, Tokyo",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Conveyor Belt Sushi",
        description: "Kaiten-zushi — fun and interactive sushi on a conveyor belt",
        location: "Shibuya / Shinjuku area",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Vending Machine",
        description: "Try something from one of Japan's legendary vending machines",
        location: "Anywhere",
        time: "",
        confirmationNumber: ""
      }
    ],
    explore: [],
    logistics: {
      transport: "Train between Shibuya, Harajuku, and Shinjuku",
      accommodation: "Hotel Minn Nihonbashi Suitengumae"
    },
    notes: ""
  },
  {
    date: "2026-06-24",
    day: "Wednesday",
    destination: "Tokyo",
    title: "Immersive Art — Toyosu & Tsukiji",
    bookings: [
      {
        name: "teamLab Planets",
        description: "Immersive digital art museum — timed entry, shoes off, wading through water",
        location: "Toyosu, Tokyo",
        time: "9:00am–9:30am",
        confirmationNumber: ""
      }
    ],
    see: [],
    eat: [
      {
        name: "Godaime Hanayama Udon Ginza",
        description: "Famous for their dipping udon (tsukemen-style udon)",
        location: "Ginza, Tokyo",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Kirby Petit Cafe",
        description: "Themed cafe based on the Kirby video game character",
        location: "Tokyo",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Tsukiji Outer Market",
        description: "Famous fish market outer area with fresh seafood, tamagoyaki, and street food",
        location: "Tsukiji, Tokyo",
        time: "",
        confirmationNumber: ""
      }
    ],
    explore: [],
    logistics: {
      transport: "Train to Toyosu, then to Tsukiji/Ginza area",
      accommodation: "Hotel Minn Nihonbashi Suitengumae"
    },
    notes: ""
  },
  {
    date: "2026-06-25",
    day: "Thursday",
    destination: "Tokyo",
    title: "Ghibli Day — Mitaka",
    bookings: [
      {
        name: "Ghibli Museum",
        description: "Museum dedicated to Studio Ghibli films — whimsical and magical",
        location: "Mitaka, Tokyo",
        time: "2:00pm",
        confirmationNumber: ""
      }
    ],
    see: [],
    eat: [],
    explore: [
      {
        name: "Kichijoji",
        description: "Charming neighborhood near the museum — great for morning exploration before entry time. Inokashira Park is nearby and lovely.",
        location: "Kichijoji, Tokyo",
        time: "",
        confirmationNumber: ""
      }
    ],
    logistics: {
      transport: "Train to Mitaka or Kichijoji station",
      accommodation: "Hotel Minn Nihonbashi Suitengumae"
    },
    notes: "Explore Kichijoji in the morning before the 2pm Ghibli entry"
  },
  {
    date: "2026-06-26",
    day: "Friday",
    destination: "Tokyo",
    title: "Harry Potter Day",
    bookings: [
      {
        name: "Warner Bros. Studio — The Making of Harry Potter",
        description: "Official Harry Potter studio tour with sets, costumes, and props",
        location: "Tokyo",
        time: "10:30am",
        confirmationNumber: ""
      }
    ],
    see: [],
    eat: [],
    explore: [
      {
        name: "Find a Claw Machine Arcade",
        description: "Japan's UFO catcher arcades are a must — Akihabara or Shibuya have great options",
        location: "Akihabara or Shibuya",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Sumo Wrestling Training Session or Tour",
        description: "Watch sumo wrestlers train at a stable — must book in advance",
        location: "Ryogoku area, Tokyo",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Manga Area",
        description: "Explore Akihabara or Nakano Broadway for manga, anime, and collectibles",
        location: "Akihabara, Tokyo",
        time: "",
        confirmationNumber: ""
      }
    ],
    logistics: {
      transport: "",
      accommodation: "Hotel Minn Nihonbashi Suitengumae"
    },
    notes: ""
  },
  {
    date: "2026-06-27",
    day: "Saturday",
    destination: "Tokyo → Mt. Fuji",
    title: "Departure to Mt. Fuji / Yamanakako",
    bookings: [
      {
        name: "Direct Highway Bus — Tokyo to Mt. Fuji Station",
        description: "JR Highway Bus from Tokyo Station Yaesu South Exit. Luggage accepted on board.",
        location: "Tokyo Station Yaesu South Exit (JR Highway Bus Terminal)",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "KIMIEN Apartments",
        description: "Hotel apartment in peaceful Lake Yamanaka area — less crowded than Kawaguchi with great Mt. Fuji views",
        location: "1410 Yamanaka, Yamanakako-mura, Minamitsuru-gun, Yamanashi Prefecture",
        time: "Check-in",
        confirmationNumber: ""
      }
    ],
    see: [],
    eat: [
      {
        name: "Houtou Noodles",
        description: "Famous regional dish — thick miso-based noodles with pumpkin. A Mt. Fuji area specialty.",
        location: "Yamanakako area",
        time: "",
        confirmationNumber: ""
      }
    ],
    explore: [
      {
        name: "Lake Kawaguchi",
        description: "About 25 min away — panoramic view of Mt. Fuji across the lake",
        location: "Lake Kawaguchi, Yamanashi",
        time: "",
        confirmationNumber: ""
      }
    ],
    logistics: {
      transport: "Highway bus from Tokyo Station (¥13,200). Taxi from Mt. Fuji Station to hotel (~15 min). Phone: 0555-28-5171",
      accommodation: "KIMIEN Apartments — 1410 Yamanaka, Yamanakako-mura, Minamitsuru-gun, Yamanashi"
    },
    notes: "Check out of Hotel Minn Nihonbashi Suitengumae before heading to Tokyo Station"
  },

  // ─── MT. FUJI / YAMANAKAKO ───────────────────────────────────────────────
  {
    date: "2026-06-28",
    day: "Sunday",
    destination: "Mt. Fuji / Yamanakako",
    title: "Oshino Hakkai",
    bookings: [],
    see: [
      {
        name: "Oshino Hakkai",
        description: "Eight crystal-clear spring ponds fed by Mt. Fuji snowmelt. Beautiful heritage site — go early to beat crowds.",
        location: "Oshino, Yamanashi",
        time: "Early morning recommended",
        confirmationNumber: ""
      }
    ],
    eat: [],
    explore: [],
    logistics: {
      transport: "15-minute drive or bus from hotel",
      accommodation: "KIMIEN Apartments"
    },
    notes: "Go early — it gets busy"
  },
  {
    date: "2026-06-29",
    day: "Monday",
    destination: "Mt. Fuji → Kyoto",
    title: "Departure to Kyoto",
    bookings: [],
    see: [],
    eat: [],
    explore: [],
    logistics: {
      transport: "Transfer luggage and check out. Transit to Kyoto via Shinkansen recommended.",
      accommodation: "MIMARU Kyoto Nijo Castle (check-in)"
    },
    notes: "Travel day — transfer from Yamanakako to Kyoto"
  },

  // ─── KYOTO ───────────────────────────────────────────────────────────────
  {
    date: "2026-06-29",
    day: "Monday",
    destination: "Kyoto",
    title: "Arrival & Local Walk",
    bookings: [
      {
        name: "MIMARU Kyoto Nijo Castle",
        description: "Centrally located near a major subway line — great access to most Kyoto sights",
        location: "Kyoto, near Nijo Castle",
        time: "Check-in",
        confirmationNumber: ""
      }
    ],
    see: [],
    eat: [],
    explore: [
      {
        name: "Local Markets",
        description: "Explore local markets near the hotel after check-in",
        location: "Nijo area, Kyoto",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Nijo Castle",
        description: "Right next to the hotel — famous for its 'nightingale floors' that chirp when walked upon to warn of intruders",
        location: "Nijo, Kyoto",
        time: "",
        confirmationNumber: ""
      }
    ],
    logistics: {
      transport: "Arriving from Mt. Fuji / Yamanakako via Shinkansen",
      accommodation: "MIMARU Kyoto Nijo Castle"
    },
    notes: "Expect high humidity and temperatures exceeding 80°F. Start days early and take frequent water breaks."
  },
  {
    date: "2026-06-30",
    day: "Tuesday",
    destination: "Kyoto",
    title: "Higashiyama & Gion",
    bookings: [],
    see: [
      {
        name: "Higashiyama District",
        description: "Historic preserved streets — go early morning before crowds arrive",
        location: "Higashiyama, Kyoto",
        time: "Early morning",
        confirmationNumber: ""
      },
      {
        name: "Yasaka Shrine",
        description: "Iconic shrine in the heart of the Gion district",
        location: "Gion, Kyoto",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Gion District",
        description: "Kyoto's famous geisha district — beautiful traditional architecture",
        location: "Gion, Kyoto",
        time: "",
        confirmationNumber: ""
      }
    ],
    eat: [
      {
        name: "Hikiniku to Come",
        description: "Famous for burger patties over rice — hard to get in, try for a reservation",
        location: "Downtown Kyoto",
        time: "",
        confirmationNumber: ""
      }
    ],
    explore: [],
    logistics: {
      transport: "Subway or bus to Higashiyama",
      accommodation: "MIMARU Kyoto Nijo Castle"
    },
    notes: ""
  },
  {
    date: "2026-07-01",
    day: "Wednesday",
    destination: "Kyoto",
    title: "Arashiyama",
    bookings: [],
    see: [
      {
        name: "Arashiyama Bamboo Forest",
        description: "Iconic bamboo grove — go very early to beat the crowds",
        location: "Arashiyama, Kyoto",
        time: "Early morning (9am recommended)",
        confirmationNumber: ""
      },
      {
        name: "Tenryu-ji Temple",
        description: "Major Zen temple with a beautiful pond garden — UNESCO World Heritage site",
        location: "Arashiyama, Kyoto",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Arashiyama Monkey Park Iwatayama",
        description: "20-30 min uphill hike — steep in sections but manageable. Feed wild macaques from inside a protected hut at the top.",
        location: "Arashiyama, Kyoto",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Kimono Forest",
        description: "Colorful kimono-patterned pillars at Arashiyama Station",
        location: "Arashiyama Station, Kyoto",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Kinkaku-ji (Golden Pavilion)",
        description: "Famous gold-leafed temple reflected in a surrounding pond — best in morning light",
        location: "Kyoto",
        time: "Afternoon",
        confirmationNumber: ""
      }
    ],
    eat: [],
    explore: [
      {
        name: "Hozugawa River Boat Ride",
        description: "Scenic boat ride down the river — weather permitting",
        location: "Arashiyama, Kyoto",
        time: "",
        confirmationNumber: ""
      }
    ],
    logistics: {
      transport: "JR Sagano Line to Arashiyama — about 1 hour from central Kyoto",
      accommodation: "MIMARU Kyoto Nijo Castle"
    },
    notes: "Go early — Arashiyama gets very crowded. Kimono rental at Maikoya is an option here."
  },
  {
    date: "2026-07-02",
    day: "Thursday",
    destination: "Kyoto → Nara",
    title: "Nara Day Trip",
    bookings: [],
    see: [
      {
        name: "Nara Park",
        description: "Home to hundreds of freely roaming deer that bow for crackers",
        location: "Nara",
        time: "Early — go before crowds",
        confirmationNumber: ""
      },
      {
        name: "Todai-ji",
        description: "Houses one of the world's largest bronze Buddha statues inside a massive wooden hall",
        location: "Nara",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Mochi Pounding",
        description: "Watch or participate in traditional mochi pounding",
        location: "Nara",
        time: "",
        confirmationNumber: ""
      }
    ],
    eat: [
      {
        name: "Shika Senbei (Deer Crackers)",
        description: "Buy from local vendors to feed the bowing deer in Nara Park",
        location: "Nara Park",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Mizuya Chaya",
        description: "Known for their udon — great lunch stop in Nara",
        location: "Nara",
        time: "Lunch",
        confirmationNumber: ""
      }
    ],
    explore: [
      {
        name: "Osaka Side Trip",
        description: "Nara is on the way to Osaka — consider spending the afternoon in Dotonbori for street food and neon lights. Osaka Castle is also nearby.",
        location: "Osaka",
        time: "Afternoon / Evening",
        confirmationNumber: ""
      }
    ],
    logistics: {
      transport: "Kintetsu Limited Express 'Awoniyoshi' from Kyoto Station — 35 min scenic ride to Nara",
      accommodation: "MIMARU Kyoto Nijo Castle"
    },
    notes: "Go early to Nara to avoid the crowd"
  },
  {
    date: "2026-07-03",
    day: "Friday",
    destination: "Kyoto → Yokohama",
    title: "Samurai Experience & Travel to Yokohama",
    bookings: [
      {
        name: "IHG Yokohama Grand",
        description: "Hotel in Yokohama for the final leg of the trip",
        location: "Yokohama",
        time: "Check-in",
        confirmationNumber: ""
      }
    ],
    see: [
      {
        name: "Samurai Ninja Museum Kyoto",
        description: "Family-friendly samurai experience — wear traditional armor and learn basic swordsmanship with a replica katana",
        location: "Kyoto",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Nishiki Market",
        description: "Kyoto's famous covered market — try local snacks like grilled octopus or mochi",
        location: "Downtown Kyoto",
        time: "",
        confirmationNumber: ""
      }
    ],
    eat: [],
    explore: [],
    logistics: {
      transport: "Check out of MIMARU Kyoto. Travel to Yokohama — Shinkansen to Shin-Yokohama recommended.",
      accommodation: "IHG Yokohama Grand"
    },
    notes: "Travel day — Kyoto to Yokohama"
  },

  // ─── YOKOHAMA ────────────────────────────────────────────────────────────
  {
    date: "2026-07-04",
    day: "Saturday",
    destination: "Yokohama",
    title: "Exploring Yokohama",
    bookings: [
      {
        name: "Cup Noodle Museum",
        description: "Interactive museum about the history of instant noodles — make your own cup",
        location: "Yokohama",
        time: "11:00am",
        confirmationNumber: ""
      }
    ],
    see: [],
    eat: [],
    explore: [],
    logistics: {
      transport: "",
      accommodation: "IHG Yokohama Grand"
    },
    notes: ""
  },
  {
    date: "2026-07-05",
    day: "Sunday",
    destination: "Yokohama",
    title: "Kamakura & Enoshima Day Trip",
    bookings: [],
    see: [
      {
        name: "Kamakura Temples",
        description: "Explore temples in Kamakura in the morning before heading to Enoshima",
        location: "Kamakura",
        time: "Morning",
        confirmationNumber: ""
      },
      {
        name: "Enoden Line",
        description: "Small coastal train from Kamakura station to Enoshima — rides along the coast",
        location: "Kamakura to Enoshima",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Enoshima Island",
        description: "Explore the island — spot community cats",
        location: "Enoshima",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Enoshima Iwaya Caves",
        description: "Sea caves on the far end of the island",
        location: "Enoshima",
        time: "",
        confirmationNumber: ""
      }
    ],
    eat: [
      {
        name: "Enoshima Benzaiten Shopping Street",
        description: "Street food along the main shopping street leading to the island",
        location: "Enoshima",
        time: "",
        confirmationNumber: ""
      }
    ],
    explore: [
      {
        name: "Beach & Sunset",
        description: "Hang out on the beach and watch the sunset",
        location: "Enoshima",
        time: "Evening",
        confirmationNumber: ""
      }
    ],
    logistics: {
      transport: "Train from Yokohama to Kamakura, then Enoden Line to Enoshima",
      accommodation: "IHG Yokohama Grand"
    },
    notes: ""
  },
  {
    date: "2026-07-06",
    day: "Monday",
    destination: "Yokohama",
    title: "Ramen Museum & Chinatown",
    bookings: [],
    see: [
      {
        name: "Shin-Yokohama Ramen Museum",
        description: "Not just a museum — the basement is a 1958-themed recreation of a Tokyo neighborhood where you can try mini-bowls from famous ramen shops across Japan",
        location: "Shin-Yokohama, Yokohama",
        time: "",
        confirmationNumber: ""
      },
      {
        name: "Yokohama Chinatown",
        description: "Largest Chinatown in Japan — colorful gates, the Kanteibyo Temple, and great food",
        location: "Yokohama",
        time: "",
        confirmationNumber: ""
      }
    ],
    eat: [],
    explore: [],
    logistics: {
      transport: "",
      accommodation: "IHG Yokohama Grand"
    },
    notes: ""
  },
  {
    date: "2026-07-07",
    day: "Tuesday",
    destination: "Yokohama",
    title: "Free Day",
    bookings: [],
    see: [],
    eat: [],
    explore: [],
    logistics: {
      transport: "",
      accommodation: "IHG Yokohama Grand"
    },
    notes: "Open day — rest, explore, or revisit a favorite spot"
  },
  {
    date: "2026-07-08",
    day: "Wednesday",
    destination: "Yokohama → Tokyo",
    title: "Back to Tokyo & Baseball",
    bookings: [
      {
        name: "Baseball Game",
        description: "Evening baseball game in Tokyo",
        location: "Tokyo",
        time: "6:00pm",
        confirmationNumber: ""
      }
    ],
    see: [],
    eat: [],
    explore: [
      {
        name: "Last Minute Souvenirs",
        description: "Spend the day in Tokyo picking up final souvenirs before heading home",
        location: "Tokyo",
        time: "",
        confirmationNumber: ""
      }
    ],
    logistics: {
      transport: "Train from Yokohama to Tokyo",
      accommodation: "IHG Yokohama Grand"
    },
    notes: "Souvenir ideas: Furikake, Rokusuke Salt, Chopsticks, Shichimi, Nail clippers, Lash curler, Eyelash clusters, Japanese knife. Give kids $20/day for shopping, desserts, and games."
  },
  {
    date: "2026-07-09",
    day: "Thursday",
    destination: "Yokohama",
    title: "Goodbye Japan",
    bookings: [],
    see: [],
    eat: [
      {
        name: "Final Breakfast",
        description: "Enjoy a final breakfast overlooking the harbor",
        location: "IHG Yokohama Grand or nearby",
        time: "Morning",
        confirmationNumber: ""
      }
    ],
    explore: [],
    logistics: {
      transport: "Head to airport — departure day",
      accommodation: ""
    },
    notes: "Departure day — sayonara Japan!"
  }
];

export default itinerary;
