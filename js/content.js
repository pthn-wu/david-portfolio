/* ============================================================
   EDIT THIS FILE TO UPDATE YOUR WEBSITE
   ============================================================
   Everything on the site — text, links, cards, jobs — lives here.
   Change the text between quotes, save, and re-upload the site.
   You never need to touch index.html or the CSS.

   Tips:
   - Keep the quotes around text: "like this"
   - In lists [ ... ], each item ends with a comma
   - To bold part of a bullet, wrap it in ** like **this**
   - To remove an item, delete its whole block { ... },
   - To add one, copy an existing block and edit it
   ============================================================ */

window.CONTENT = {

  /* ----- Basics ----- */
  name: "David",
  fullName: "Phyo Thihan Nyein (David)",
  email: "phyothihannyein@gmail.com",

  /* ----- Hero (top of the page) ----- */
  hero: {
    title: "Hey, I'm David 👋",
    subtitle: "Strategist & tech enthusiast building AI prototypes and growing businesses — with a Substack, a soft spot for Spurs, and an appetite for good food.",
    // The floating pill stickers around the hero.
    // color options: "red", "green", "purple", "yellow"
    stickers: [
      { text: "COYS ⚽",    color: "red",    position: "top-left" },
      { text: "AI tinkerer", color: "green",  position: "top-right" },
      { text: "foodie 🍜",  color: "purple", position: "bottom-left" },
      { text: "writer ✍",   color: "yellow", position: "bottom-right" },
    ],
    buttons: [
      { text: "Explore my world", link: "#work",    style: "dark" },
      { text: "Read my writing",  link: "#writing", style: "outline" },
    ],
  },

  /* ----- Scrolling banner (the dark strip under the hero) -----
     Words loop forever, separated by the Spurs logo. */
  marquee: [
    "AI PROTOTYPES",
    "BUSINESS DEVELOPMENT",
    "STRATEGY",
    "WRITING",
    "TOTTENHAM HOTSPUR",
    "FOOD",
  ],

  /* ----- Selected work -----
     Each card opens its "demo" file in a popup.
     tagColor options: "red", "green", "purple"
     The preview is the colored box on the card:
       - { image: "path/to/logo.png" }  → shows a logo on white
       - { background, wordmark, wordmarkColor, subtext, subtextColor, bar }
         → shows a brand-style block (like the Suboo cards)
     Cards alternate text-left / text-right automatically. */
  workSection: {
    eyebrow: "Selected work",
    title: "Things I've built & grown",
    cards: [
      {
        title: "Suboo — consumer app prototype",
        description: "An end-to-end consumer app concept — full UI kit and interactive prototype, taken from idea to a clickable product. Tap to open the live demo.",
        tag: "AI · PROTOTYPING",
        tagColor: "green",
        demo: "assets/demos/suboo-consumer-app.html",
        demoTitle: "consumer app prototype",
        preview: {
          background: "#2E2840",
          wordmark: "suboo",
          wordmarkColor: "#C42470",
          bar: "#F5821F",
        },
      },
      {
        title: "Suboo — merchant portal",
        description: "The other side of Suboo — a web portal for merchants to manage their storefront, orders, and operations. Tap to open the live demo.",
        tag: "AI · PROTOTYPING",
        tagColor: "red",
        demo: "assets/demos/suboo-merchant-portal.html",
        demoTitle: "merchant portal",
        preview: {
          background: "#C42470",
          wordmark: "suboo",
          wordmarkColor: "#fff",
          subtext: "MERCHANT",
          subtextColor: "#F5821F",
        },
      },
      {
        title: "grab & go — supplier portal",
        description: "A B2B portal for G&G's suppliers to manage listings, orders and fulfilment — part of the retail growth work at CDSG. Tap to open the live demo.",
        tag: "RETAIL · B2B PORTAL",
        tagColor: "purple",
        demo: "assets/demos/gng-supplier-portal.html",
        demoTitle: "grab & go supplier portal",
        preview: {
          image: "assets/images/gng-logo.png",
        },
      },
    ],
  },

  /* ----- Experience -----
     color options: "red", "purple" (dot + accent color) */
  experienceSection: {
    eyebrow: "Experience",
    title: "The short version",
    roles: [
      {
        role: "Head of Strategy & Business Development",
        company: "Capital Diamond Star Group (CDSG) — Retail Cluster",
        dates: "2022 — Now",
        color: "red",
        bullets: [
          "Built the 3–5-year growth strategy for the convenience, supermarket & hypermarket cluster",
          "Led go-to-market for new retail formats — **140% footprint growth**",
          "Launched MSME & local-supplier development programs",
          "Forged supplier partnerships (Carlsberg, Royal-D) and built the private-label & loyalty programs",
        ],
      },
      {
        role: "Assistant Manager, Strategy & Business Development",
        company: "KMA Group of Companies",
        dates: "2020 — 2022",
        color: "purple",
        bullets: [
          "Assisted in setting up a new e-commerce venture in Myanmar",
          "Built growth strategy, SOPs & hiring frameworks for KMA's US portfolio",
          "Represented KMA at the **SelectUSA 2021 Investment Summit** on US market entry",
        ],
      },
    ],
    // The gold "download my résumé" card under the roles.
    // To swap the PDF: put the new file in assets/ and update `file`.
    // Set resumeCard to null to hide the card entirely.
    resumeCard: {
      badge: "CV",
      title: "Want the long version?",
      description: "Grab my résumé — one page, zero fluff, mildly impressive.",
      buttonText: "Download PDF ↓",
      file: "assets/Phyo_Nyein_Resume.pdf",
    },
  },

  /* ----- Writing / Substack (the dark section) ----- */
  writingSection: {
    eyebrow: "Writing",
    title: "Inquisitive Introvert",
    substackUrl: "https://inquisitiveintrovert.substack.com/",
    substackLabel: "inquisitiveintrovert.substack.com →",
    quote: "“I write about whatever I find interesting — tech, ideas, and the occasional rabbit hole.”",
    cards: [
      {
        thumbLabel: "latest post",
        eyebrow: "FROM THE SUBSTACK",
        title: "Read my most recent essay",
        description: "Fresh thinking, straight from the source.",
        link: "https://inquisitiveintrovert.substack.com/",
      },
      {
        thumbLabel: "archive",
        eyebrow: "BROWSE ALL",
        title: "The full archive",
        description: "Every essay, in one place.",
        link: "https://inquisitiveintrovert.substack.com/archive",
      },
    ],
    subscribeCard: {
      title: "Never miss a post",
      description: "Get new essays in your inbox.",
      buttonText: "Subscribe free",
      link: "https://inquisitiveintrovert.substack.com/",
    },
  },

  /* ----- Now / interests -----
     The first card is the big red Spurs feature card.
     The others are simple emoji cards — add or remove freely. */
  nowSection: {
    eyebrow: "Now",
    title: "What I'm into lately",
    featureCard: {
      bigText: "COYS",
      title: "Tottenham Hotspur",
      description: "Big-time Spurs fan. Through the highs, the lows, and everything in between.",
      image: "assets/images/spurs-logo.png",
    },
    cards: [
      {
        emoji: "💻",
        title: "Tech, always",
        description: "Tinkering with new tools, AI, and whatever's next. Perpetually curious.",
      },
      {
        emoji: "🍜",
        title: "Foodie",
        description: "Always hunting the next great meal. Recommendations very welcome.",
      },
    ],
  },

  /* ----- Footer ----- */
  footer: {
    title: "Let's build something.",
    subtitle: "Open to interesting projects, collaborations, and conversations. Or just say hi.",
    buttons: [
      { text: "Get in touch", link: "mailto:phyothihannyein@gmail.com", style: "dark" },
      { text: "Substack", link: "https://inquisitiveintrovert.substack.com/", style: "outline" },
    ],
    copyrightNote: "Made with curiosity",
  },

  /* ----- "Say hi" popup + Calendly booking -----
     The nav "Say hi" button opens a playful popup (confetti + a waving
     greeting that cycles through the list below), which then opens your
     Calendly in a modal.
     - greetings: the words that rotate at the top of the popup
     - calendlyUrl: your Calendly link (change this if your handle changes)
     Set sayHi to null to make "Say hi" simply scroll to the footer instead. */
  sayHi: {
    greetings: ["Hey there!", "Mingalaba!", "Hello hello!", "COYS! ⚽", "Oh hi!"],
    text: "You found the fun button. Fancy a chat about products, AI, food — or why Spurs will definitely win the league this year?",
    bookButtonText: "Let's set up a time 📅",
    dismissText: "Maybe later",
    calendlyHeading: "Pick a time that works 📅",
    calendlyUrl: "https://calendly.com/phyothihannyein",
  },

};
