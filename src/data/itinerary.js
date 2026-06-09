const itinerary = [
  // ─── TOKYO ───────────────────────────────────────────────────────────────
  {
    date: "2026-06-21",
    day: "Sunday",
    destination: "Tokyo",
    title: "Arrival & Local Walk",
    bookings: [],
    see: [
      {
        name: "Ningyocho",
        description: "Traditional neighborhood near the hotel — great for an evening stroll",
        address: "Nihonbashi-Ningyocho, Chuo-ku, Tokyo",
        time: "",
      },
    ],
    eat: [
      {
        name: "Ningyocho Traditional Snacks",
        description: "Pick up local snacks while exploring the neighborhood",
        address: "Nihonbashi-Ningyocho, Chuo-ku, Tokyo",
        time: "",
      },
    ],
    explore: [],
    logistics: {
      transport: [
        {
          type: "flight",
          description: "Flight arrives at Narita",
          from: "Origin",
          to: "Narita International Airport (NRT)",
          time: "14:50",
          confirmationNumber: "ADD-CONFIRMATION-NUMBER",
        },
        {
          type: "van",
          description: "Private van transfer",
          from: "Narita International Airport",
          to: "Hotel Minn Nihonbashi Suitengumae",
          time: "After arrival",
          confirmationNumber: "ADD-CONFIRMATION-NUMBER",
        },
      ],
      accommodation: "Hotel Minn Nihonbashi Suitengumae",
    },
    notes: "",
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
        address: "2-3-1 Asakusa, Taito-ku, Tokyo 111-0032",
        time: "",
      },
      {
        name: "Nakamise-dori Shopping Street",
        description: "Traditional shopping street leading to Senso-ji, great for souvenirs",
        address: "1-36-3 Asakusa, Taito-ku, Tokyo 111-0032",
        time: "",
      },
      {
        name: "Kappabashi Kitchen Supply Town",
        description: "Street lined with kitchen and restaurant supply shops — unique Tokyo experience",
        address: "Kappabashi-dori, Matsugaya, Taito-ku, Tokyo 111-0036",
        time: "",
      },
      {
        name: "Tokyo Skytree",
        description: "One of the world's tallest towers with panoramic city views",
        address: "1-1-2 Oshiage, Sumida-ku, Tokyo 131-0045",
        time: "",
      },
    ],
    eat: [
      {
        name: "Kuroge Wagyu Ichinoya Asakusa",
        description: "Famous wagyu beef restaurant in Asakusa",
        address: "Asakusa, Taito-ku, Tokyo",
        time: "",
      },
      {
        name: "Age.3",
        description: "Known for their stuffed cream sandwich",
        address: "Asakusa, Taito-ku, Tokyo",
        time: "",
      },
      {
        name: "Melon Pan",
        description: "Look for melon pan from local bakeries or street vendors",
        address: "Asakusa, Taito-ku, Tokyo",
        time: "",
      },
    ],
    explore: [],
    logistics: {
      transport: [
        {
          type: "train",
          description: "Tokyo Metro Hanzomon Line",
          from: "Suitengumae Station",
          to: "Oshiage Station (Skytree)",
          time: "",
          confirmationNumber: "",
        },
      ],
      accommodation: "Hotel Minn Nihonbashi Suitengumae",
    },
    notes: "Asakusa is pronounced 'a-sak-sa'",
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
        address: "2-2-1 Dogenzaka, Shibuya-ku, Tokyo 150-0043",
        time: "",
      },
      {
        name: "Harajuku & Takeshita-dori",
        description: "Tokyo's fashion district — quirky street style and shops",
        address: "1-17 Jingumae, Shibuya-ku, Tokyo 150-0001",
        time: "",
      },
      {
        name: "Meiji Jingu",
        description: "Serene Shinto shrine surrounded by forest in the middle of the city",
        address: "1-1 Yoyogikamizonocho, Shibuya-ku, Tokyo 151-8557",
        time: "",
      },
      {
        name: "Tokyo Public Toilets",
        description: "Famous architectural public restrooms designed by world-class architects",
        address: "Shibuya-ku, Tokyo",
        time: "",
      },
      {
        name: "Cat Street",
        description: "Less mainstream shopping street with independent boutiques",
        address: "6-19-13 Jingumae, Shibuya-ku, Tokyo 150-0001",
        time: "",
      },
      {
        name: "Omoide Yokocho (Memory Lane)",
        description: "Narrow alley packed with tiny yakitori stalls — atmospheric and old-school Tokyo",
        address: "1-2-14 Nishishinjuku, Shinjuku-ku, Tokyo 160-0023",
        time: "Evening",
      },
    ],
    eat: [
      {
        name: "Omoide Yokocho",
        description: "Street food and yakitori in the atmospheric Memory Lane alley",
        address: "1-2-14 Nishishinjuku, Shinjuku-ku, Tokyo 160-0023",
        time: "Evening",
      },
      {
        name: "Conveyor Belt Sushi",
        description: "Kaiten-zushi — fun and interactive sushi on a conveyor belt",
        address: "Shibuya or Shinjuku area",
        time: "",
      },
      {
        name: "Vending Machine",
        description: "Try something from one of Japan's legendary vending machines",
        address: "Anywhere",
        time: "",
      },
    ],
    explore: [],
    logistics: {
      transport: [
        {
          type: "train",
          description: "Tokyo Metro — various lines connect these neighborhoods",
          from: "Suitengumae Station",
          to: "Shibuya / Harajuku / Shinjuku",
          time: "",
          confirmationNumber: "",
        },
      ],
      accommodation: "Hotel Minn Nihonbashi Suitengumae",
    },
    notes: "",
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
        address: "6-1-16 Toyosu, Koto-ku, Tokyo 135-0061",
        time: "9:00am–9:30am",
        confirmationNumber: "ADD-CONFIRMATION-NUMBER",
      },
    ],
    see: [],
    eat: [
      {
        name: "Godaime Hanayama Udon Ginza",
        description: "Famous for their dipping udon (tsukemen-style udon)",
        address: "Ginza, Chuo-ku, Tokyo",
        time: "",
      },
      {
        name: "Kirby Petit Cafe",
        description: "Themed cafe based on the Kirby video game character",
        address: "Tokyo",
        time: "",
      },
      {
        name: "Tsukiji Outer Market",
        description: "Famous fish market outer area with fresh seafood, tamagoyaki, and street food",
        address: "4-16-2 Tsukiji, Chuo-ku, Tokyo 104-0045",
        time: "Morning recommended",
      },
    ],
    explore: [],
    logistics: {
      transport: [
        {
          type: "train",
          description: "Yurikamome Line to teamLab, then walk or taxi to Tsukiji",
          from: "Shimbashi Station",
          to: "Shin-Toyosu Station (1 min walk to teamLab)",
          time: "",
          confirmationNumber: "",
        },
      ],
      accommodation: "Hotel Minn Nihonbashi Suitengumae",
    },
    notes: "",
  },
  {
    date: "2026-06-25",
    day: "Thursday",
    destination: "Tokyo",
    title: "Ghibli Day — Mitaka",
    bookings: [
      {
        name: "Ghibli Museum",
        description: "Museum dedicated to Studio Ghibli films — whimsical and magical. Entry by advance reservation only.",
        address: "1-1-83 Shimorenjaku, Mitaka-shi, Tokyo 181-0013",
        time: "2:00pm",
        confirmationNumber: "ADD-CONFIRMATION-NUMBER",
      },
    ],
    see: [],
    eat: [],
    explore: [
      {
        name: "Kichijoji & Inokashira Park",
        description: "Charming neighborhood near the museum — great for morning exploration before entry time. Inokashira Park is nearby and lovely.",
        address: "Kichijoji, Musashino-shi, Tokyo 180-0003",
        time: "Morning",
      },
    ],
    logistics: {
      transport: [
        {
          type: "train",
          description: "JR Chuo Line (Rapid)",
          from: "Shinjuku Station",
          to: "Mitaka Station (15 min walk to museum, or take community bus)",
          time: "",
          confirmationNumber: "",
        },
      ],
      accommodation: "Hotel Minn Nihonbashi Suitengumae",
    },
    notes: "Explore Kichijoji in the morning before the 2pm Ghibli entry",
  },
  {
    date: "2026-06-26",
    day: "Friday",
    destination: "Tokyo",
    title: "Harry Potter Day",
    bookings: [
      {
        name: "Warner Bros. Studio Tour Tokyo — The Making of Harry Potter",
        description: "Official Harry Potter studio tour with authentic sets, costumes, and props",
        address: "1-1-7 Kasugacho, Nerima-ku, Tokyo 179-0074",
        time: "10:30am",
        confirmationNumber: "ADD-CONFIRMATION-NUMBER",
      },
    ],
    see: [],
    eat: [],
    explore: [
      {
        name: "Claw Machine Arcade",
        description: "Japan's UFO catcher arcades are a must — Akihabara or Shibuya have great options",
        address: "Akihabara, Chiyoda-ku, Tokyo / Shibuya, Tokyo",
        time: "",
      },
      {
        name: "Manga & Anime — Akihabara",
        description: "Explore Akihabara for manga, anime, and collectibles",
        address: "Akihabara, Chiyoda-ku, Tokyo 101-0021",
        time: "",
      },
    ],
    logistics: {
      transport: [
        {
          type: "train",
          description: "Seibu Ikebukuro Line (direct) or Toei Oedo Line",
          from: "Seibu Ikebukuro Station / Shinjuku Station",
          to: "Toshimaen Station (2 min walk to studio)",
          time: "",
          confirmationNumber: "",
        },
      ],
      accommodation: "Hotel Minn Nihonbashi Suitengumae",
    },
    notes: "Check out of Hotel Minn tomorrow morning before heading to Tokyo Station",
  },
  {
    date: "2026-06-27",
    day: "Saturday",
    destination: "Tokyo → Mt. Fuji",
    title: "Departure to Mt. Fuji / Yamanakako",
    bookings: [
      {
        name: "KIMIEN Hotel Apartments",
        description: "Hotel apartment in peaceful Lake Yamanaka area — less crowded than Kawaguchi with great Mt. Fuji views",
        address: "1410 Yamanaka, Yamanakako-mura, Minamitsuru-gun, Yamanashi 401-0501",
        time: "Check-in",
        phone: "0555-28-5171",
        confirmationNumber: "ADD-CONFIRMATION-NUMBER",
      },
    ],
    see: [],
    eat: [
      {
        name: "Houtou Noodles",
        description: "Famous regional dish — thick miso-based noodles with pumpkin. A Mt. Fuji area specialty.",
        address: "Yamanakako area, Yamanashi",
        time: "",
      },
    ],
    explore: [
      {
        name: "Lake Kawaguchi",
        description: "About 25 min away — panoramic view of Mt. Fuji across the lake",
        address: "Kawaguchiko, Fujikawaguchiko-cho, Minamitsuru-gun, Yamanashi 401-0301",
        time: "",
      },
    ],
    logistics: {
      transport: [
        {
          type: "luggage",
          description: "Yamato TA-Q-BIN luggage forwarding",
          from: "Hotel Minn Nihonbashi Suitengumae",
          to: "KIMIEN Hotel Apartments",
          time: "Arrange day before — pickup by 12:00pm",
          confirmationNumber: "ADD-CONFIRMATION-NUMBER",
        },
        {
          type: "bus",
          description: "JR Highway Bus (¥13,200)",
          from: "Tokyo Station — Yaesu South Exit, JR Highway Bus Terminal",
          to: "Fujisan (Mt. Fuji) Station",
          time: "ADD-DEPARTURE-TIME",
          confirmationNumber: "ADD-CONFIRMATION-NUMBER",
        },
        {
          type: "taxi",
          description: "Taxi to hotel",
          from: "Fujisan Station",
          to: "KIMIEN Hotel Apartments",
          time: "~15 min",
          confirmationNumber: "",
        },
      ],
      accommodation: "KIMIEN Hotel Apartments",
    },
    notes: "Check out of Hotel Minn before heading to Tokyo Station. KIMIEN tel: 0555-28-5171",
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
        address: "697 Oshino, Oshino-mura, Minamitsuru-gun, Yamanashi 401-0511",
        time: "Early morning recommended",
      },
    ],
    eat: [],
    explore: [],
    logistics: {
      transport: [
        {
          type: "taxi",
          description: "Taxi or drive from hotel",
          from: "KIMIEN Hotel Apartments",
          to: "Oshino Hakkai",
          time: "~15 min",
          confirmationNumber: "",
        },
      ],
      accommodation: "KIMIEN Hotel Apartments",
    },
    notes: "Go early — it gets busy",
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
      transport: [
        {
          type: "luggage",
          description: "Yamato TA-Q-BIN luggage forwarding",
          from: "KIMIEN Hotel Apartments",
          to: "MIMARU Kyoto Nijo Castle",
          time: "Arrange day before — pickup by 11:00am",
          confirmationNumber: "ADD-CONFIRMATION-NUMBER",
        },
        {
          type: "bus",
          description: "Bus or taxi to Mishima Station",
          from: "KIMIEN Hotel Apartments / Yamanakako",
          to: "Mishima Station",
          time: "~70 min",
          confirmationNumber: "",
        },
        {
          type: "train",
          description: "Shinkansen (Kodama or Hikari)",
          from: "Mishima Station",
          to: "Kyoto Station",
          time: "~2 hrs",
          confirmationNumber: "ADD-CONFIRMATION-NUMBER",
        },
      ],
      accommodation: "MIMARU Kyoto Nijo Castle",
    },
    notes: "Travel day — transfer from Yamanakako to Kyoto",
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
        description: "Centrally located — great access to most Kyoto sights. On Horikawa-dori, 8 min walk from Nijojo-mae Station.",
        address: "249 Tsuboyacho, Nakagyo-ku, Kyoto 604-8255",
        time: "Check-in",
        phone: "+81 75-585-5516",
        confirmationNumber: "ADD-CONFIRMATION-NUMBER",
      },
    ],
    see: [],
    eat: [],
    explore: [
      {
        name: "Local Markets",
        description: "Explore local markets near the hotel after check-in",
        address: "Nijo area, Nakagyo-ku, Kyoto",
        time: "",
      },
      {
        name: "Nijo Castle",
        description: "Right next to the hotel — famous for its 'nightingale floors' that chirp when walked upon to warn of intruders",
        address: "541 Nijojocho, Nakagyo-ku, Kyoto 604-8301",
        time: "",
      },
    ],
    logistics: {
      transport: [
        {
          type: "train",
          description: "Arriving via Shinkansen from Mishima",
          from: "Mishima Station",
          to: "Kyoto Station",
          time: "",
          confirmationNumber: "",
        },
      ],
      accommodation: "MIMARU Kyoto Nijo Castle",
    },
    notes: "Expect high humidity and temperatures exceeding 80°F. Start days early and take frequent water breaks.",
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
        address: "Higashiyama-ku, Kyoto 605-0862",
        time: "Early morning",
      },
      {
        name: "Yasaka Shrine",
        description: "Iconic shrine in the heart of the Gion district",
        address: "625 Gionmachi Kitagawa, Higashiyama-ku, Kyoto 605-0073",
        time: "",
      },
      {
        name: "Gion District",
        description: "Kyoto's famous geisha district — beautiful traditional architecture",
        address: "Gionmachi, Higashiyama-ku, Kyoto 605-0073",
        time: "",
      },
    ],
    eat: [
      {
        name: "Hikiniku to Come",
        description: "Famous for burger patties over rice — hard to get in, try for a reservation",
        address: "Downtown Kyoto",
        time: "",
      },
    ],
    explore: [],
    logistics: {
      transport: [
        {
          type: "bus",
          description: "Kyoto City Bus #100 or subway",
          from: "Nijojo-mae Station",
          to: "Higashiyama / Gion",
          time: "",
          confirmationNumber: "",
        },
      ],
      accommodation: "MIMARU Kyoto Nijo Castle",
    },
    notes: "",
  },
  {
    date: "2026-07-01",
    day: "Wednesday",
    destination: "Kyoto",
    title: "Arashiyama",
    bookings: [],
    see: [
      {
        name: "Arashiyama Bamboo Grove",
        description: "Iconic bamboo grove — go very early to beat the crowds",
        address: "Sagaogurayama Tabuchiyamacho, Ukyo-ku, Kyoto 616-8394",
        time: "Early morning (before 9am recommended)",
      },
      {
        name: "Tenryu-ji Temple",
        description: "Major Zen temple with a beautiful pond garden — UNESCO World Heritage site",
        address: "68 Susukinobabacho, Sagatenryuji, Ukyo-ku, Kyoto 616-8385",
        time: "",
      },
      {
        name: "Arashiyama Monkey Park Iwatayama",
        description: "20-30 min uphill hike — steep in sections but manageable. Feed wild macaques from inside a protected hut at the top.",
        address: "8 Arashiyamakorochichiyamacho, Nishikyo-ku, Kyoto 616-0007",
        time: "",
      },
      {
        name: "Kimono Forest",
        description: "Colorful kimono-patterned pillars at Arashiyama Station",
        address: "Saga-Arashiyama Station, Ukyo-ku, Kyoto",
        time: "",
      },
      {
        name: "Kinkaku-ji (Golden Pavilion)",
        description: "Famous gold-leafed temple reflected in a surrounding pond — best in morning light",
        address: "1 Kinkakujicho, Kita-ku, Kyoto 603-8361",
        time: "Afternoon",
      },
    ],
    eat: [],
    explore: [
      {
        name: "Hozugawa River Boat Ride",
        description: "Scenic boat ride down the river — weather permitting",
        address: "Arashiyama, Ukyo-ku, Kyoto",
        time: "",
      },
    ],
    logistics: {
      transport: [
        {
          type: "train",
          description: "JR Sagano Line (Rapid)",
          from: "Kyoto Station",
          to: "Saga-Arashiyama Station",
          time: "~15 min",
          confirmationNumber: "",
        },
      ],
      accommodation: "MIMARU Kyoto Nijo Castle",
    },
    notes: "Go early — Arashiyama gets very crowded. Kimono rental is available at Maikoya.",
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
        address: "469 Zoshicho, Nara-shi, Nara 630-8213",
        time: "Early — go before crowds",
      },
      {
        name: "Todai-ji",
        description: "Houses one of the world's largest bronze Buddha statues inside a massive wooden hall",
        address: "406-1 Zoshicho, Nara-shi, Nara 630-8211",
        time: "",
      },
      {
        name: "Mochi Pounding",
        description: "Watch or participate in traditional mochi pounding",
        address: "Nakatanido, 29 Hashimotocho, Nara-shi, Nara 630-8362",
        time: "",
      },
    ],
    eat: [
      {
        name: "Shika Senbei (Deer Crackers)",
        description: "Buy from local vendors to feed the bowing deer in Nara Park",
        address: "Nara Park, Nara-shi, Nara",
        time: "",
      },
      {
        name: "Mizuya Chaya",
        description: "Known for their udon — great lunch stop in Nara",
        address: "48 Noboriojimachi, Nara-shi, Nara 630-8213",
        time: "Lunch",
      },
    ],
    explore: [
      {
        name: "Osaka Side Trip",
        description: "Nara is on the way to Osaka — consider spending the afternoon in Dotonbori for street food and neon lights.",
        address: "Dotonbori, Namba, Chuo-ku, Osaka 542-0071",
        time: "Afternoon / Evening",
      },
    ],
    logistics: {
      transport: [
        {
          type: "train",
          description: "Kintetsu Limited Express 'Awoniyoshi'",
          from: "Kintetsu-Kyoto Station",
          to: "Kintetsu-Nara Station",
          time: "~35 min scenic ride",
          confirmationNumber: "",
        },
      ],
      accommodation: "MIMARU Kyoto Nijo Castle",
    },
    notes: "Go early to Nara to avoid the crowds",
  },
  {
    date: "2026-07-03",
    day: "Friday",
    destination: "Kyoto → Yokohama",
    title: "Samurai Experience & Travel to Yokohama",
    bookings: [
      {
        name: "IHG InterContinental Yokohama Grand",
        description: "Luxury hotel in Yokohama Minatomirai for the final leg of the trip",
        address: "1-1-1 Minatomirai, Nishi-ku, Yokohama, Kanagawa 220-8522",
        time: "Check-in",
        phone: "+81 45-223-2300",
        confirmationNumber: "ADD-CONFIRMATION-NUMBER",
      },
    ],
    see: [
      {
        name: "Samurai Ninja Museum Kyoto",
        description: "Family-friendly samurai experience — wear traditional armor and learn basic swordsmanship with a replica katana",
        address: "292 Higashidaimonjicho, Nakagyo-ku, Kyoto 604-8004",
        time: "Morning",
      },
      {
        name: "Nishiki Market",
        description: "Kyoto's famous covered market — try local snacks like grilled octopus or mochi",
        address: "609 Nakanocho, Nakagyo-ku, Kyoto 604-8054",
        time: "",
      },
    ],
    eat: [],
    explore: [],
    logistics: {
      transport: [
        {
          type: "luggage",
          description: "Yamato TA-Q-BIN luggage forwarding",
          from: "MIMARU Kyoto Nijo Castle",
          to: "IHG InterContinental Yokohama Grand",
          time: "Arrange day before — pickup by 12:00pm",
          confirmationNumber: "ADD-CONFIRMATION-NUMBER",
        },
        {
          type: "train",
          description: "Shinkansen (Nozomi)",
          from: "Kyoto Station",
          to: "Shin-Yokohama Station",
          time: "~2.5 hrs",
          confirmationNumber: "ADD-CONFIRMATION-NUMBER",
        },
        {
          type: "taxi",
          description: "Taxi or Minatomirai Line to hotel",
          from: "Shin-Yokohama Station",
          to: "IHG InterContinental Yokohama Grand",
          time: "~20 min",
          confirmationNumber: "",
        },
      ],
      accommodation: "IHG InterContinental Yokohama Grand",
    },
    notes: "Travel day — Kyoto to Yokohama. Check out of MIMARU Kyoto in the morning.",
  },

  // ─── YOKOHAMA ────────────────────────────────────────────────────────────
  {
    date: "2026-07-04",
    day: "Saturday",
    destination: "Yokohama",
    title: "Exploring Yokohama",
    bookings: [
      {
        name: "Cup Noodles Museum",
        description: "Interactive museum about the history of instant noodles — make your own cup",
        address: "2-3-4 Shinko, Naka-ku, Yokohama 231-0001",
        time: "11:00am",
        confirmationNumber: "ADD-CONFIRMATION-NUMBER",
      },
    ],
    see: [],
    eat: [],
    explore: [],
    logistics: {
      transport: [
        {
          type: "train",
          description: "Minatomirai Line (8 min walk from hotel)",
          from: "IHG InterContinental Yokohama Grand",
          to: "Cup Noodles Museum (8 min walk from Minatomirai Station)",
          time: "",
          confirmationNumber: "",
        },
      ],
      accommodation: "IHG InterContinental Yokohama Grand",
    },
    notes: "",
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
        description: "Explore temples in Kamakura in the morning — Kotoku-in (Great Buddha) is a must",
        address: "4-2-28 Hase, Kamakura-shi, Kanagawa 248-0016",
        time: "Morning",
      },
      {
        name: "Enoden Line",
        description: "Small coastal train from Kamakura to Enoshima — rides along the coast with ocean views",
        address: "Kamakura Station, Kamakura-shi, Kanagawa 248-0006",
        time: "",
      },
      {
        name: "Enoshima Island",
        description: "Explore the island — spot community cats along the way",
        address: "2 Chome Enoshima, Fujisawa-shi, Kanagawa 251-0036",
        time: "",
      },
      {
        name: "Enoshima Iwaya Caves",
        description: "Sea caves on the far end of the island — bring a candle",
        address: "2 Chome-3 Enoshima, Fujisawa-shi, Kanagawa 251-0036",
        time: "",
      },
    ],
    eat: [
      {
        name: "Enoshima Benzaiten Shopping Street",
        description: "Street food along the main shopping street leading to the island — try shirasu (whitebait) dishes",
        address: "Enoshima, Fujisawa-shi, Kanagawa 251-0036",
        time: "",
      },
    ],
    explore: [
      {
        name: "Beach & Sunset",
        description: "Hang out on the beach and watch the sunset",
        address: "Enoshima Beach, Fujisawa-shi, Kanagawa",
        time: "Evening",
      },
    ],
    logistics: {
      transport: [
        {
          type: "train",
          description: "JR Yokosuka Line or Shonan-Shinjuku Line",
          from: "Yokohama Station",
          to: "Kamakura Station",
          time: "~55 min",
          confirmationNumber: "",
        },
        {
          type: "train",
          description: "Enoden Line (Enoshima Electric Railway)",
          from: "Kamakura Station",
          to: "Enoshima Station",
          time: "~25 min",
          confirmationNumber: "",
        },
      ],
      accommodation: "IHG InterContinental Yokohama Grand",
    },
    notes: "",
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
        description: "The basement is a 1958-themed recreation of a Tokyo neighborhood with famous ramen shops from across Japan — try mini-bowls from multiple shops",
        address: "2-14-21 Shin-Yokohama, Kohoku-ku, Yokohama 222-0033",
        time: "",
      },
      {
        name: "Yokohama Chinatown",
        description: "Largest Chinatown in Japan — colorful gates, the Kanteibyo Temple, and great food",
        address: "149 Yamashitacho, Naka-ku, Yokohama 231-0023",
        time: "",
      },
    ],
    eat: [],
    explore: [],
    logistics: {
      transport: [
        {
          type: "train",
          description: "JR Yokohama Line or Shinkansen",
          from: "Yokohama Station / Shin-Yokohama Station",
          to: "Shin-Yokohama Station (Ramen Museum, 5 min walk)",
          time: "",
          confirmationNumber: "",
        },
      ],
      accommodation: "IHG InterContinental Yokohama Grand",
    },
    notes: "",
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
      transport: [],
      accommodation: "IHG InterContinental Yokohama Grand",
    },
    notes: "Open day — rest, explore, or revisit a favorite spot",
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
        address: "Tokyo",
        time: "6:00pm",
        confirmationNumber: "ADD-CONFIRMATION-NUMBER",
      },
    ],
    see: [],
    eat: [],
    explore: [
      {
        name: "Last Minute Souvenirs",
        description: "Spend the day in Tokyo picking up final souvenirs before heading home",
        address: "Tokyo",
        time: "",
      },
    ],
    logistics: {
      transport: [
        {
          type: "train",
          description: "JR Tokaido Line or Keikyu Line",
          from: "Yokohama Station",
          to: "Tokyo / Shibuya",
          time: "~30 min",
          confirmationNumber: "",
        },
      ],
      accommodation: "IHG InterContinental Yokohama Grand",
    },
    notes: "Souvenir ideas: Furikake, Rokusuke Salt, Chopsticks, Shichimi, Nail clippers, Lash curler, Eyelash clusters, Japanese knife. Give kids $20/day for shopping, desserts, and games.",
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
        address: "IHG InterContinental Yokohama Grand or nearby",
        time: "Morning",
      },
    ],
    explore: [],
    logistics: {
      transport: [
        {
          type: "van",
          description: "Transfer to airport",
          from: "IHG InterContinental Yokohama Grand",
          to: "Narita International Airport",
          time: "ADD-DEPARTURE-TIME",
          confirmationNumber: "ADD-CONFIRMATION-NUMBER",
        },
      ],
      accommodation: "",
    },
    notes: "Departure day — sayonara Japan!",
  },
];

export const LOCATIONS = {
  Yokohama: [
    {
      name: "KLA Corporation",
      address: "Ocean Gate Minatomirai 11F, 3-7-1 Minatomirai, Nishi-ku, Yokohama-city, Kanagawa",
    },
  ],
}

export const HOTELS = {
  Tokyo: {
    name: "Hotel Minn Nihonbashi Suitengumae",
    address: "3-7-3 Nihonbashi Ningyocho, Chuo-ku, Tokyo 103-0013",
    phone: "ADD-PHONE-NUMBER",
    confirmationNumber: "ADD-CONFIRMATION-NUMBER",
  },
  "Mt. Fuji": {
    name: "KIMIEN Hotel Apartments",
    address: "1410 Yamanaka, Yamanakako-mura, Minamitsuru-gun, Yamanashi 401-0501",
    phone: "0555-28-5171",
    confirmationNumber: "ADD-CONFIRMATION-NUMBER",
  },
  Kyoto: {
    name: "MIMARU Kyoto Nijo Castle",
    address: "249 Tsuboyacho, Nakagyo-ku, Kyoto 604-8255",
    phone: "+81 75-585-5516",
    confirmationNumber: "ADD-CONFIRMATION-NUMBER",
  },
  Yokohama: {
    name: "IHG InterContinental Yokohama Grand",
    address: "1-1-1 Minatomirai, Nishi-ku, Yokohama, Kanagawa 220-8522",
    phone: "+81 45-223-2300",
    confirmationNumber: "ADD-CONFIRMATION-NUMBER",
  },
}

export default itinerary;
