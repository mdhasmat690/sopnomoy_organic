// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
} */

/* https://drive.google.com/file/d/14k6XgLTRv71xTP5SL0xZKcLXdAt7iLxf/edit?fbclid=IwAR1gt8KQpq_OXwMH2rHHDDzU5nsBsVPES-yHUYDjGkfYGibqQL4GKOtTb4I */

const text = [
  {
    id: "1",
    name: "​Rosemira Organics",
    nike: "Blue Bliss Beauty Balm",
    img: "https://i.ibb.co/LdmvrKY/s23.webp",
    desc: "Formulated to enrich your skin and entice your senses, Blue Bliss Beauty Balm provides deep moisturize and soothes the skin. Designed for health by Dr. Mira Herman using Blue Tansy, Marula, Shea Butter, Cacao Butter, Baobab, Yangu and essential oils blended into a sublimely concentrated, cruelty-free product that will nourish, calm, diminish redness, and erase fine lines.",
    price: "100",
  },
  {
    id: "2",
    name: "Raw Skin Care",
    nike: "My Micellar",
    img: "https://i.ibb.co/DM6m7HQ/s22.webp",
    desc: "My Micellar Organic Oil Free Complexion Waters are wonderful for removing Water Resistant Mascara, Make Up and daily debris, leaves the skin free of make up and ready for a deep cleansing without dryness. Two Choices: Sensitive with Chamomile and Anti-Aging with Geranium Rose and 100% Organic with no Toxins and Preservatives.",
    price: "166",
  },
  {
    id: "3",
    name: "​Puraveda Organics",
    nike: "SunProtect SPF30+",
    img: "https://i.ibb.co/drt7RHB/s21.webp",
    desc: "No-Nano Particles. Micronized Zinc Oxide Sun Block. Easy to apply, No White Sheen. REEF SAFE! CHILD SAFE. Cruelty Free. Travel Compliant Size. Perfect for Vacation, Beach, Pool, & Outdoor Activities. Super Hydrating & Moisturizing! 20% Zinc Oxide. Paraben, Petroleum & Toxin Free. WATER RESISTANT: Up to 2 Hours of Water & Sweat Resistance. Clean Beachy Scent. With Shea Butter. Fair Trade & Sustainable USA Company. All Ingredients EWG Approved.",
    price: "44",
  },
  {
    id: "4",
    name: "​Pevonia Botanica Natural Skincare",
    nike: "BodyRenew™ Bathing Pleasures Collection",
    img: "https://i.ibb.co/NYPTC30/s20.webp",
    desc: "In addition to the BodyRenew collection, Pevonia offers an entire array of family-friendly products that are safe for even the tiniest member of the family. Free from alcohol, parabens, and chemicals that can be harsh or harmful to delicate and sensitive skin, Pevonia gently yet effectively cares for every skin type while delivering unparalleled results!",
    price: "148",
  },
  {
    id: "5",
    name: "​Mad Hippie",
    nike: "Hydrating Nutrient Mist",
    img: "https://i.ibb.co/vq52NZT/s19.webp",
    desc: "A blissfully hydrating mist packed to the brim with antioxidants all formulated to reduce the appearance of photodamage and build your skin's natural resilience.",
    price: "678",
  },
  {
    id: "6",
    name: "​LOTUSWEI",
    nike: "Fierce Compassion Aura Mist",
    img: "https://i.ibb.co/L0hGM1n/s18.webp",
    desc: "Awaken more compassion, love fearlessly and dive into uncharted territories of true intimacy, closeness + connection. Infused with rose, green cognac + mimosa oils and exotic flower elixirs.",
    price: "456",
  },
  {
    id: "7",
    name: "ISUN Skincar",
    nike: "Phyto-Infusion",
    img: "https://i.ibb.co/5jq6cnP/s17.webp",
    desc: "Brimming over with concentrated herb and berry polyphenols; vegan stem cells; antioxidants including curcuminoids, CoQ10, SOD, Vitamin C, carotenes and tocotrienols; probiotics; cell respiratory factors; nutrient-rich, glow-boosting oils, and a gorgeous aromablend of essential oils.",
    price: "2345",
  },
  {
    id: "8",
    name: "Herbal Face Foods",
    nike: "Herbal Face Food Serum",
    img: "https://i.ibb.co/wKKL4d6/s16.webp",
    desc: "100% Plant concentrate skincare that yields quick visible results. No toxins, preservatives, parabens, chemicals, or fragrances, gluten free, vegan, no animal testing. Addresses the 10 most visible signs of Aging, Acne, Scarring and more.",
    price: "456",
  },
  {
    id: "9",
    name: "​LOTUSWEI",
    nike: "Fierce Compassion Aura Mist",
    img: "https://i.ibb.co/3fvmT7k/s15.webp",
    desc: "Awaken more compassion, love fearlessly and dive into uncharted territories of true intimacy, closeness + connection. Infused with rose, green cognac + mimosa oils and exotic flower elixirs.",
    price: "345",
  },
  {
    id: "10",
    name: "ISUN Skincare",
    nike: "Phyto-Infusion",
    img: "https://i.ibb.co/MD54yFp/s36.webp",
    desc: "Brimming over with concentrated herb and berry polyphenols; vegan stem cells; antioxidants including curcuminoids, CoQ10, SOD, Vitamin C, carotenes and tocotrienols; probiotics; cell respiratory factors; nutrient-rich, glow-boosting oils, and a gorgeous aromablend of essential oils.",
    price: "567",
  },
  {
    id: "11",
    name: "Herbal Face Foods",
    nike: "Herbal Face Food Serum",
    img: "https://i.ibb.co/pJJLNNw/s35.webp",
    desc: "100% Plant concentrate skincare that yields quick visible results. No toxins, preservatives, parabens, chemicals, or fragrances, gluten free, vegan, no animal testing. Addresses the 10 most visible signs of Aging, Acne, Scarring and more.",
    price: "567",
  },
  {
    id: "12",
    name: "The Good Stuff Botanicals",
    nike: "Gypsy Cream",
    img: "https://i.ibb.co/55QtFMm/s34.webp",
    desc: "Healing moisturizer delivers vital nutrients for an array of skin conditions featuring hemp oil + hot spring water from a source containing the worlds 2nd highest trace mineral content.",
    price: "546",
  },
  {
    id: "13",
    name: "Frownies®",
    nike: "Facial Patches",
    img: "https://i.ibb.co/QrNxrGN/s33.webp",
    desc: "Frownies Facial Patches assist to soften and smooth the appearance of deep wrinkles or fine lines mechanically, without any harsh chemicals or needles. Good Housekeeping Magazine named Frownies Facial Patches the  Our skin care line is organic, natural and hand-made.",
    price: "456",
  },
  {
    id: "14",
    name: "Emuaid®",
    nike: "First Aid Ointment",
    img: "https://i.ibb.co/YdmTK4V/s32.webp",
    desc: "100% Plant concentrate skincare that yields quick visible results. No toxins, preservatives, parabens, chemicals, or fragrances, gluten free, vegan, no animal testing. Addresses the 10 most visible signs of Aging, Acne, Scarring and more.",
    price: "43",
  },
  {
    id: "15",
    name: " Organic Skin Care",
    nike: "Facial Recovery Oil",
    img: "https://i.ibb.co/ZNLVxMr/s31.webp",
    desc: "100% Plant concentrate skincare that yields quick visible results. No toxins, preservatives, parabens, chemicals, or fragrances, gluten free, vegan, no animal testing. Addresses the 10 most visible signs of Aging, Acne, Scarring and more.",
    price: "43",
  },
  {
    id: "16",
    name: "Curious",
    nike: "Premium Intimate Skincare Collection",
    img: "https://i.ibb.co/ZMtNBdF/s30.webp",
    desc: "100% Plant concentrate skincare that yields quick visible results. No toxins, preservatives, parabens, chemicals, or fragrances, gluten free, vegan, no animal testing. Addresses the 10 most visible signs of Aging, Acne, Scarring and more.",
    price: "2345",
  },
  {
    id: "17",
    name: "Combray",
    nike: "Nourishing Facial Oil",
    img: "https://i.ibb.co/xS7FQGd/s29.webp",
    desc: "100% Plant concentrate skincare that yields quick visible results. No toxins, preservatives, parabens, chemicals, or fragrances, gluten free, vegan, no animal testing. Addresses the 10 most visible signs of Aging, Acne, Scarring and more.",
    price: "234",
  },
  {
    id: "18",
    name: "Clovertree",
    nike: "Triple C Repair Serum",
    img: "https://i.ibb.co/GRp0qMZ/s28.webp",
    desc: "100% Plant concentrate skincare that yields quick visible results. No toxins, preservatives, parabens, chemicals, or fragrances, gluten free, vegan, no animal testing. Addresses the 10 most visible signs of Aging, Acne, Scarring and more.",
    price: "23",
  },
  {
    id: "19",
    name: "Body Bliss",
    nike: "Vibrance",
    img: "https://i.ibb.co/F5Zwxcx/s24.webp",
    desc: "100% Plant concentrate skincare that yields quick visible results. No toxins, preservatives, parabens, chemicals, or fragrances, gluten free, vegan, no animal testing. Addresses the 10 most visible signs of Aging, Acne, Scarring and more.",
    price: "768",
  },
  {
    id: "20",
    name: "BioMed Health",
    nike: "SKINprotect Skin Rejuvenation",
    img: "https://i.ibb.co/4N0fYy7/s26.webp",
    desc: "100% Plant concentrate skincare that yields quick visible results. No toxins, preservatives, parabens, chemicals, or fragrances, gluten free, vegan, no animal testing. Addresses the 10 most visible signs of Aging, Acne, Scarring and more.",
    price: "345",
  },
  {
    id: "21",
    name: "Auromère",
    nike: "Ayurvedic Beauty Care Package",
    img: "https://i.ibb.co/kXpdJ1N/s25.webp",
    desc: "Awaken more compassion, love fearlessly and dive into uncharted territories of true intimacy, closeness + connection. Infused with rose, green cognac + mimosa oils and exotic flower elixirs.",
    price: "456",
  },
  {
    id: "22",
    name: "Aromatherapy Associates",
    nike: "Anti-Ageing Overnight Repair Mask",
    img: "https://i.ibb.co/ChSn1hx/s27.webp",
    desc: "Awaken more compassion, love fearlessly and dive into uncharted territories of true intimacy, closeness + connection. Infused with rose, green cognac + mimosa oils and exotic flower elixirs.",
    price: "4567",
  },
  {
    id: "23",
    name: "Alaska Glacial Mud Co.",
    nike: "Glacial Facial Purifying Mineral Mud Masque",
    img: "https://i.ibb.co/yyrRLhL/s14.webp",
    desc: "Awaken more compassion, love fearlessly and dive into uncharted territories of true intimacy, closeness + connection. Infused with rose, green cognac + mimosa oils and exotic flower elixirs.",
    price: "765",
  },
  {
    id: "24",
    name: "Rejuva Minerals",
    nike: "Mega Lash Mascara",
    img: "https://i.ibb.co/412QQW2/s11.webp",
    desc: "Awaken more compassion, love fearlessly and dive into uncharted territories of true intimacy, closeness + connection. Infused with rose, green cognac + mimosa oils and exotic flower elixirs.",
    price: "456",
  },
  {
    id: "25",
    name: "Rejuva Minerals",
    nike: "Mega Lash Mascara",
    img: "https://i.ibb.co/q1Yk9qR/s10.webp",
    desc: "Awaken more compassion, love fearlessly and dive into uncharted territories of true intimacy, closeness + connection. Infused with rose, green cognac + mimosa oils and exotic flower elixirs.",
    price: "567",
  },
  {
    id: "26",
    name: "BioMed Health",
    nike: "SKINprotect Skin Rejuvenation",
    img: "https://i.ibb.co/bm1vc2s/s8.webp",
    desc: "Awaken more compassion, love fearlessly and dive into uncharted territories of true intimacy, closeness + connection. Infused with rose, green cognac + mimosa oils and exotic flower elixirs.",
    price: "566",
  },
  {
    id: "27",
    name: "Frownies®",
    nike: "Facial Patches",
    img: "https://i.ibb.co/0K7jFBW/s7.webp",
    desc: "Awaken more compassion, love fearlessly and dive into uncharted territories of true intimacy, closeness + connection. Infused with rose, green cognac + mimosa oils and exotic flower elixirs.",
    price: "67",
  },
  {
    id: "28",
    name: "Awaken",
    nike: "Fecial awakn",
    img: "https://i.ibb.co/X7vwpyk/s6.webp",
    desc: "Awaken more compassion, love fearlessly and dive into uncharted territories of true intimacy, closeness + connection. Infused with rose, green cognac + mimosa oils and exotic flower elixirs.",
    price: "66",
  },
  {
    id: "29",
    name: "Alaska Glacial Mud Co.",
    nike: "Glacial Facial Purifying Mineral Mud Masque",
    img: "https://i.ibb.co/5LQ96vN/s4.webp",
    desc: "Awaken more compassion, love fearlessly and dive into uncharted territories of true intimacy, closeness + connection. Infused with rose, green cognac + mimosa oils and exotic flower elixirs.",
    price: "66",
  },
  {
    id: "30",
    name: "​Rosemira Organics",
    nike: "Blue Bliss Beauty Balm",
    img: "https://i.ibb.co/xJ4tzYQ/19.webp",
    desc: "Awaken more compassion, love fearlessly and dive into uncharted territories of true intimacy, closeness + connection. Infused with rose, green cognac + mimosa oils and exotic flower elixirs.",
    price: "566",
  },
];
