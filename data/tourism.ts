import { LocalizedValue } from "@/lib/i18n";

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

export type Season = "spring" | "summer" | "autumn" | "winter";
export type BudgetLevel = "moderate" | "premium" | "ultra";

export interface Destination {
  slug: string;
  image: string;
  region: "central" | "gobi" | "north" | "west";
  travelTypes: string[];
  seasons: Season[];
  title: LocalizedValue<string>;
  summary: LocalizedValue<string>;
  overview: LocalizedValue<string>;
  bestTime: LocalizedValue<string>;
  thingsToDo: LocalizedValue<string[]>;
  culturalNotes: LocalizedValue<string[]>;
  suggestedExperiences: LocalizedValue<string[]>;
  quickFacts: { label: LocalizedValue<string>; value: LocalizedValue<string> }[];
  gallery: { src: string; alt: LocalizedValue<string> }[];
  mapPosition: { x: number; y: number };
}

export interface AdventureExperience {
  slug: string;
  image: string;
  category: string;
  season: Season[];
  region: Destination["region"];
  intensity: "gentle" | "moderate" | "bold";
  duration: "short" | "medium" | "long";
  budget: BudgetLevel;
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
  highlights: LocalizedValue<string[]>;
}

export interface LuxuryTour {
  slug: string;
  image: string;
  duration: string;
  priceFrom: string;
  style: string;
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
  inclusions: LocalizedValue<string[]>;
}

export interface CulturalHighlight {
  image: string;
  title: LocalizedValue<string>;
  description: LocalizedValue<string>;
  details: LocalizedValue<string[]>;
}

export interface Testimonial {
  name: string;
  origin: LocalizedValue<string>;
  quote: LocalizedValue<string>;
}

export interface FaqItem {
  question: LocalizedValue<string>;
  answer: LocalizedValue<string>;
}

export interface GalleryItem {
  src: string;
  category: "nature" | "culture" | "adventure" | "luxury";
  title: LocalizedValue<string>;
}

export interface PlannerRecommendation {
  title: LocalizedValue<string>;
  style: "adventure" | "luxury" | "culture" | "photography" | "family";
  duration: "4-6" | "7-9" | "10+";
  budget: BudgetLevel;
  season: Season[];
  interests: string[];
  summary: LocalizedValue<string>;
  stops: LocalizedValue<string[]>;
}

export const siteCopy = {
  heroEyebrow: {
    en: "Curated Mongolia journeys",
    mn: "Монголын онцгой аяллын сонголт",
  },
  heroTitle: {
    en: "Where endless sky, deep culture, and refined adventure meet.",
    mn: "Хязгааргүй тэнгэр, гүн соёл, тансаг адал явдал огтлолцох нутаг.",
  },
  heroDescription: {
    en: "Private expeditions, cultured escapes, and cinematic landscapes designed with the calm precision of a luxury travel concierge.",
    mn: "Тансаг аяллын консьержийн нарийн төлөвлөлтөөр бүтсэн хувийн экспедиц, соёлын аялал, кино мэт байгалийн дүр төрх.",
  },
  heroStats: [
    {
      value: "21",
      label: {
        en: "signature itineraries",
        mn: "онцгой маршрут",
      },
    },
    {
      value: "4",
      label: {
        en: "seasons of travel",
        mn: "аялах улирал",
      },
    },
    {
      value: "100%",
      label: {
        en: "tailored inquiries",
        mn: "захиалгат санал",
      },
    },
  ],
  introTitle: {
    en: "Mongolia, elevated.",
    mn: "Монгол орны шинэ тансаг өнгө.",
  },
  introBody: {
    en: "Steppe & Sky presents Mongolia with a warm, modern, high-touch approach. Each page blends the drama of the Gobi, alpine lakes, nomadic heritage, and elevated camp experiences for travelers seeking meaning as much as movement.",
    mn: "Steppe & Sky нь Монгол орныг дулаан, орчин үеийн, өндөр түвшний үйлчилгээтэйгээр танилцуулна. Говийн сүр хүч, уулын нуур, нүүдлийн өв соёл, сайтар сонгосон кэмпийн туршлагыг утга учиртай аялалтай хослуулсан.",
  },
  reasonsToVisit: [
    {
      title: {
        en: "Space that resets the mind",
        mn: "Сэтгэлийг амраах уудам орон зай",
      },
      text: {
        en: "Open steppe, desert silence, and clear highland air create a rare sense of calm.",
        mn: "Уудам тал, цөлийн нам гүм, уулсын цэвэр агаар нь ховорхон тайвшралыг өгнө.",
      },
    },
    {
      title: {
        en: "Living nomadic culture",
        mn: "Амьд нүүдлийн соёл",
      },
      text: {
        en: "Hospitality, horsemanship, music, and seasonal customs remain deeply woven into daily life.",
        mn: "Зочломтгой зан, морин соёл, хөгжим, улирлын зан үйл өдөр тутмын амьдралд хэвээр оршсоор байна.",
      },
    },
    {
      title: {
        en: "Adventure without crowds",
        mn: "Олон хүнгүй адал явдал",
      },
      text: {
        en: "Ride, trek, photograph, and explore with a sense of genuine remoteness.",
        mn: "Морь унах, алхах, зураг авах, судлах бүх мөч жинхэнэ алсын мэдрэмжтэй.",
      },
    },
    {
      title: {
        en: "Luxury with authenticity",
        mn: "Жинхэнэ тансаг туршлага",
      },
      text: {
        en: "Private guides, elegant ger camps, and thoughtful pacing bring comfort without losing place.",
        mn: "Хувийн хөтөч, тансаг гэр кэмп, зөв хэмнэл нь тухтай байдлыг нутаг орны онцлогтой нь хадгална.",
      },
    },
  ],
  seasonalInspiration: [
    {
      season: {
        en: "Spring migration light",
        mn: "Хаврын нүүдлийн гэрэл",
      },
      text: {
        en: "Fresh grasslands, foals on the steppe, and clear skies around central Mongolia.",
        mn: "Төв Монголын ногоорон тэлсэн тал, унага дагасан сүрэг, тунгалаг тэнгэр.",
      },
    },
    {
      season: {
        en: "Summer festival energy",
        mn: "Зуны наадмын эрч хүч",
      },
      text: {
        en: "Naadam, alpine escapes, and long golden evenings by the lake.",
        mn: "Наадам, уулын амралт, нуурын эргийн урт алтан орой.",
      },
    },
    {
      season: {
        en: "Autumn eagle horizons",
        mn: "Намрын бүргэдийн тэнгэр",
      },
      text: {
        en: "Crisp desert air, photography journeys, and west Mongolia traditions.",
        mn: "Цөлийн сэрүүн агаар, гэрэл зургийн аялал, баруун Монголын уламжлал.",
      },
    },
    {
      season: {
        en: "Winter silence",
        mn: "Өвлийн нам гүм",
      },
      text: {
        en: "Frozen lakes, snowy horse trails, and intimate fireside stays.",
        mn: "Хөлдсөн нуур, цастай морин зам, галын дэргэдэх дотно амралт.",
      },
    },
  ],
  etiquette: {
    en: [
      "Receive milk tea or food with both hands or the right hand supported by the left.",
      "Walk to the left side of the ger interior and avoid stepping on the threshold.",
      "Ask before photographing elders, ceremonies, or private family spaces.",
      "Dress in layers, remove shoes when invited, and greet hosts with calm respect.",
    ],
    mn: [
      "Сүүтэй цай, идээг хоёр гараар эсвэл баруун гараа зүүнээрээ түшиж авна.",
      "Гэрийн босго дээр гишгэхгүй, дотор талын зүүн талаар тойрон орно.",
      "Ахмад настай хүн, ёслол, хувийн орон зайг зураглахын өмнө заавал зөвшөөрөл авна.",
      "Давхарлаж хувцаслах, урьсан үедээ гутлаа тайлах, тайван хүндэтгэлтэй мэндлэх нь чухал.",
    ],
  },
};

export const destinations: Destination[] = [
  {
    slug: "ulaanbaatar",
    image: pexels(2950376),
    region: "central",
    travelTypes: ["culture", "city", "luxury"],
    seasons: ["spring", "summer", "autumn", "winter"],
    title: {
      en: "Ulaanbaatar",
      mn: "Улаанбаатар",
    },
    summary: {
      en: "A stylish gateway where contemporary Mongolia meets monasteries, museums, jazz, and modern hospitality.",
      mn: "Орчин үеийн Монголын өнгө, хийд, музей, жазз хөгжим, орчин үеийн зочлох соёл огтлолцох хот.",
    },
    overview: {
      en: "Begin with design-forward hotels, excellent dining, and cultural landmarks before transitioning into the open landscapes beyond the capital.",
      mn: "Загварлаг зочид буудал, чанартай хоол, соёлын дурсгалт газраас аяллаа эхлээд дараа нь нийслэлээс цаашх уудам байгаль руу шилжинэ.",
    },
    bestTime: {
      en: "Year-round, with summer for festivals and winter for a dramatic urban atmosphere.",
      mn: "Жилийн турш тохиромжтой. Зундаа наадам, өвөлдөө онцгой хотын уур амьсгалтай.",
    },
    thingsToDo: {
      en: ["Visit Gandan Monastery", "Explore modern Mongolian art", "Enjoy chef-led dining and design hotels"],
      mn: ["Гандантэгчинлэн хийд үзэх", "Орчин үеийн монгол урлагтай танилцах", "Шефийн меню, дизайны зочид буудал турших"],
    },
    culturalNotes: {
      en: ["The city offers the clearest introduction to Mongolia's Soviet, Buddhist, and contemporary layers."],
      mn: ["Хот нь Монголын социалист үе, буддын өв, орчин үеийн өнгийг зэрэг мэдрүүлэх хамгийн тод орон зай юм."],
    },
    suggestedExperiences: {
      en: ["Private museum curation", "Evening performance with dinner", "Luxury city-and-steppe combination"],
      mn: ["Музейн хувийн тайлбарт аялал", "Оройн тоглолт ба оройн зоог", "Хот ба тал нутгийг хослуулсан тансаг аялал"],
    },
    quickFacts: [
      { label: { en: "Region", mn: "Бүс" }, value: { en: "Central Mongolia", mn: "Төвийн бүс" } },
      { label: { en: "Mood", mn: "Уур амьсгал" }, value: { en: "Urban culture", mn: "Хотын соёл" } },
      { label: { en: "Best for", mn: "Тохиромжтой" }, value: { en: "Arrival nights and culture", mn: "Ирэх өдөр, соёлын аялал" } },
    ],
    gallery: [
      { src: pexels(2950376), alt: { en: "Ulaanbaatar skyline", mn: "Улаанбаатарын хотын дүр зураг" } },
      { src: pexels(1440476), alt: { en: "City architecture in Mongolia", mn: "Монголын хотын архитектур" } },
    ],
    mapPosition: { x: 312, y: 172 },
  },
  {
    slug: "gobi",
    image: pexels(20363276),
    region: "gobi",
    travelTypes: ["adventure", "luxury", "photography"],
    seasons: ["spring", "summer", "autumn"],
    title: { en: "Gobi Desert", mn: "Говь" },
    summary: {
      en: "Cinematic dunes, flaming cliffs, camel caravans, and star-filled luxury camps.",
      mn: "Элсэн манхан, Улаан цав, тэмээт жин, одтой тэнгэр дорх тансаг кэмп.",
    },
    overview: {
      en: "The Gobi is vast rather than barren, shaped by saxaul forests, dinosaur history, wind-carved canyons, and unexpectedly refined stays.",
      mn: "Говь бол хоосон бус, харин заг мод, үлэг гүрвэлийн түүх, салхинд элэгдсэн хавцал, тансаг кэмпээр баялаг уудам нутаг.",
    },
    bestTime: {
      en: "May to October, especially June and September for comfortable temperatures.",
      mn: "5-10 сар. Ялангуяа 6, 9 сар дулаан таатай.",
    },
    thingsToDo: {
      en: ["Ride camels at Khongor", "Sunrise at Yol Valley", "Private dinner under desert stars"],
      mn: ["Хонгорын элсээр тэмээ унах", "Ёлын амд нар мандахыг харах", "Цөлийн тэнгэр дор хувийн оройн зоог барих"],
    },
    culturalNotes: {
      en: ["Desert families are masters of adaptation and hospitality. Slow tea conversations are part of the experience."],
      mn: ["Говийн айлууд дасан зохицох ухаан, зочломтгой зангаар алдартай. Сүүтэй цайны яриа аяллын нэг хэсэг болдог."],
    },
    suggestedExperiences: {
      en: ["Luxury desert fly-drive", "Camel-supported photography journey", "Paleontology and landscape circuit"],
      mn: ["Тансаг нислэг ба авто хосолсон аялал", "Тэмээтэй гэрэл зургийн аялал", "Палеонтологи ба байгалийн маршрут"],
    },
    quickFacts: [
      { label: { en: "Region", mn: "Бүс" }, value: { en: "South Mongolia", mn: "Өмнөд бүс" } },
      { label: { en: "Mood", mn: "Уур амьсгал" }, value: { en: "Epic and elemental", mn: "Сүрлэг, үндсэн хүч" } },
      { label: { en: "Best for", mn: "Тохиромжтой" }, value: { en: "Desert expeditions", mn: "Цөлийн экспедиц" } },
    ],
    gallery: [
      { src: pexels(20363276), alt: { en: "Gobi road trip", mn: "Говийн аяллын зам" } },
      { src: pexels(6614885), alt: { en: "Camels in Mongolia", mn: "Монголын тэмээ" } },
    ],
    mapPosition: { x: 356, y: 270 },
  },
  {
    slug: "khuvsgul",
    image: pexels(1508575),
    region: "north",
    travelTypes: ["nature", "family", "luxury"],
    seasons: ["summer", "autumn", "winter"],
    title: { en: "Khuvsgul Lake", mn: "Хөвсгөл нуур" },
    summary: {
      en: "Blue water, pine ridges, horse trails, and quiet lake lodges at the northern edge of Mongolia.",
      mn: "Хөх ус, шилмүүст нуруу, морин зам, хойд Монголын нам гүм нуурын амралт.",
    },
    overview: {
      en: "Often called Mongolia's blue pearl, Khuvsgul feels expansive and restorative, ideal for families, photographers, and travelers seeking alpine calm.",
      mn: "Монголын хөх сувд гэгддэг Хөвсгөл нь өргөн уудам, тайван мэдрэмжтэй тул гэр бүл, зурагчин, уулын намуухан амралт хүсэгчдэд тохиромжтой.",
    },
    bestTime: {
      en: "Late June to early September for lakeside travel, or February for the ice festival atmosphere.",
      mn: "Нуурын аялалд 6 сарын сүүлээс 9 сарын эх. Мөсний баярыг үзэх бол 2 сар.",
    },
    thingsToDo: {
      en: ["Boat across the lake", "Ride through forest trails", "Lakeside sauna and stargazing"],
      mn: ["Нуур гатлан завиар аялах", "Ойн жимээр морь унах", "Нуурын эргийн саун, од харах"],
    },
    culturalNotes: {
      en: ["Northern communities include reindeer herding traditions and deep respect for sacred water landscapes."],
      mn: ["Хойд нутгийн иргэдэд цаатан өв соёл, ариун усны шүтлэг онцгой байр суурьтай."],
    },
    suggestedExperiences: {
      en: ["Lakeside family retreat", "Wellness and photography circuit", "Northern culture extension"],
      mn: ["Нуурын эргийн гэр бүлийн амралт", "Сэргээх ба гэрэл зургийн маршрут", "Хойд нутгийн соёлын өргөтгөл"],
    },
    quickFacts: [
      { label: { en: "Region", mn: "Бүс" }, value: { en: "Northern Mongolia", mn: "Хойд бүс" } },
      { label: { en: "Mood", mn: "Уур амьсгал" }, value: { en: "Fresh and serene", mn: "Сэрүүн, тайван" } },
      { label: { en: "Best for", mn: "Тохиромжтой" }, value: { en: "Lakes and wellness", mn: "Нуур, амралт" } },
    ],
    gallery: [
      { src: pexels(1508575), alt: { en: "Mountain lake landscape", mn: "Уулын нуурын дүр зураг" } },
      { src: pexels(1666021), alt: { en: "Forest and lake stay", mn: "Ой, нуурын амралт" } },
    ],
    mapPosition: { x: 320, y: 72 },
  },
  {
    slug: "terelj",
    image: pexels(25294083),
    region: "central",
    travelTypes: ["adventure", "culture", "weekend"],
    seasons: ["spring", "summer", "autumn", "winter"],
    title: { en: "Terelj", mn: "Тэрэлж" },
    summary: {
      en: "Granite formations, close-to-city riding country, and polished ger camp escapes.",
      mn: "Боржин хад, хотод ойр морин аялал, тансаг гэр кэмпийн амралт.",
    },
    overview: {
      en: "Terelj is Mongolia's most accessible nature escape, balancing dramatic rock scenery, horse culture, and stylish short stays.",
      mn: "Тэрэлж бол Монголын хамгийн ойр байгалийн амралт бөгөөд хадат байгаль, морин соёл, богино хугацааны тансаг амралтыг хослуулна.",
    },
    bestTime: {
      en: "All year, with lush landscapes in summer and snowy stillness in winter.",
      mn: "Жилийн дөрвөн улиралд тохиромжтой. Зундаа ногоон, өвөлдөө цастай нам гүм.",
    },
    thingsToDo: {
      en: ["Horseback riding", "Visit a family ger", "Private picnic beneath granite peaks"],
      mn: ["Морин аялал", "Айлын гэрээр зочлох", "Хадат оргилын дэргэд хувийн пикник"],
    },
    culturalNotes: {
      en: ["Its nearness to the capital makes Terelj ideal for a first encounter with steppe hospitality."],
      mn: ["Нийслэлд ойр тул тал нутгийн зочломтгой соёлтой анх танилцахад төгс тохирно."],
    },
    suggestedExperiences: {
      en: ["Weekend luxury retreat", "Horse and wellness escape", "Family steppe introduction"],
      mn: ["Амралтын өдрийн тансаг хөтөлбөр", "Морь ба амралтын аялал", "Гэр бүлийн тал нутгийн танилцуулга"],
    },
    quickFacts: [
      { label: { en: "Region", mn: "Бүс" }, value: { en: "Near Ulaanbaatar", mn: "Улаанбаатарт ойр" } },
      { label: { en: "Mood", mn: "Уур амьсгал" }, value: { en: "Easy and elegant", mn: "Амар, тансаг" } },
      { label: { en: "Best for", mn: "Тохиромжтой" }, value: { en: "Short premium escapes", mn: "Богино амралт" } },
    ],
    gallery: [
      { src: pexels(25294083), alt: { en: "Terelj horses", mn: "Тэрэлжийн адуу" } },
      { src: pexels(28560707), alt: { en: "Herder scene near Terelj", mn: "Тэрэлж орчмын малчин" } },
    ],
    mapPosition: { x: 352, y: 150 },
  },
  {
    slug: "altai",
    image: pexels(1624438),
    region: "west",
    travelTypes: ["adventure", "photography", "culture"],
    seasons: ["summer", "autumn", "winter"],
    title: { en: "Altai", mn: "Алтай" },
    summary: {
      en: "Wild western ranges, eagle hunters, glacier-fed valleys, and high drama for experienced travelers.",
      mn: "Баруун хязгаарын сүрлэг уулс, бүргэдчид, мөсөн голын хөндий, туршлагатай аялагчдад зориулсан онцгой бүс.",
    },
    overview: {
      en: "The Altai offers one of the richest combinations of culture and raw terrain in Central Asia, ideal for eagle festival departures and serious photographers.",
      mn: "Алтай нь Төв Азийн хэмжээнд соёл ба байгалийн хүчирхэг дүр төрхийг нэгтгэсэн ховор бүс бөгөөд бүргэдийн баяр, гэрэл зургийн аялалд төгс тохирно.",
    },
    bestTime: {
      en: "June to October, with September and early October for eagle festival energy.",
      mn: "6-10 сар. 9 сар болон 10 сарын эх нь бүргэдийн баярт хамгийн тохиромжтой.",
    },
    thingsToDo: {
      en: ["Meet eagle hunters", "Hike glacier valleys", "Photograph golden-hour mountain camps"],
      mn: ["Бүргэдчидтэй уулзах", "Мөсөн голын хөндийгөөр алхах", "Алтан цагийн уулын кэмпийг зураглах"],
    },
    culturalNotes: {
      en: ["Kazakh traditions in western Mongolia add a distinct identity of music, craft, and hunting culture."],
      mn: ["Баруун Монголын казах өв соёл нь хөгжим, гар урлал, анч зан заншлаараа онцгой өнгө төрхийг бүрдүүлдэг."],
    },
    suggestedExperiences: {
      en: ["Eagle festival private departure", "Photographer's west expedition", "Remote mountain camp journey"],
      mn: ["Бүргэдийн баярын хувийн аялал", "Зурагчдын баруун бүсийн маршрут", "Алсын уулын кэмпийн аялал"],
    },
    quickFacts: [
      { label: { en: "Region", mn: "Бүс" }, value: { en: "Western Mongolia", mn: "Баруун бүс" } },
      { label: { en: "Mood", mn: "Уур амьсгал" }, value: { en: "Wild and noble", mn: "Сүрлэг, эрхэм" } },
      { label: { en: "Best for", mn: "Тохиромжтой" }, value: { en: "Eagle festival and hiking", mn: "Бүргэдийн баяр, уулын аялал" } },
    ],
    gallery: [
      { src: pexels(1624438), alt: { en: "Mountain terrain", mn: "Уулын сүрлэг байгаль" } },
      { src: pexels(20363276), alt: { en: "Road through remote landscapes", mn: "Алсын байгаль дахь зам" } },
    ],
    mapPosition: { x: 102, y: 126 },
  },
  {
    slug: "arkhangai",
    image: pexels(28560707),
    region: "central",
    travelTypes: ["culture", "adventure", "wellness"],
    seasons: ["summer", "autumn"],
    title: { en: "Arkhangai", mn: "Архангай" },
    summary: {
      en: "Green valleys, volcanic landscapes, monasteries, and deeply satisfying camp travel.",
      mn: "Ногоон хөндий, галт уулын гаралтай газар, хийд, тайван кэмп аялал.",
    },
    overview: {
      en: "Arkhangai delivers the softer side of Mongolia with beautiful roads, river valleys, and rich opportunities to combine nature, heritage, and rest.",
      mn: "Архангай нь сайхан зам, голын хөндий, байгаль, өв соёл, амралтыг эвтэйхэн хослуулах боломжоороо Монголын зөөлөн уур амьсгалыг мэдрүүлдэг.",
    },
    bestTime: {
      en: "June to September for lush valleys and warm camp nights.",
      mn: "6-9 сар. Ногоон хөндий, дулаан үдшийг мэдрэхэд тохиромжтой.",
    },
    thingsToDo: {
      en: ["Visit monasteries", "Stay beside river valleys", "Explore volcanic formations and hot springs"],
      mn: ["Хийдүүдээр зочлох", "Голын хөндийд хоноглох", "Галт уулын тогтоц, халуун рашаан үзэх"],
    },
    culturalNotes: {
      en: ["This region rewards slow travel with a strong sense of spiritual calm and pastoral beauty."],
      mn: ["Энэ бүс нутаг удаан хэмнэлтэй аялалд гүн тайван, бэлчээрийн гоо сайхныг мэдрүүлдэг."],
    },
    suggestedExperiences: {
      en: ["Central heritage circuit", "Wellness and hot spring retreat", "Rider's valley journey"],
      mn: ["Төвийн өв соёлын маршрут", "Амралт ба рашааны хөтөлбөр", "Морин хөндийн аялал"],
    },
    quickFacts: [
      { label: { en: "Region", mn: "Бүс" }, value: { en: "Central-west", mn: "Төв-баруун" } },
      { label: { en: "Mood", mn: "Уур амьсгал" }, value: { en: "Gentle and grounding", mn: "Зөөлөн, тайвшруулах" } },
      { label: { en: "Best for", mn: "Тохиромжтой" }, value: { en: "Slow premium circuits", mn: "Удаан хэмнэлтэй тансаг маршрут" } },
    ],
    gallery: [
      { src: pexels(28560707), alt: { en: "Arkhangai pastoral scene", mn: "Архангайн мал аж ахуйн дүр зураг" } },
      { src: pexels(1508575), alt: { en: "River and hills", mn: "Гол, уулс" } },
    ],
    mapPosition: { x: 224, y: 160 },
  },
];

export const adventures: AdventureExperience[] = [
  {
    slug: "horseback-riding",
    image: pexels(28560707),
    category: "horseback riding",
    season: ["spring", "summer", "autumn"],
    region: "central",
    intensity: "moderate",
    duration: "medium",
    budget: "premium",
    title: { en: "Horseback Horizons", mn: "Морин хязгааргүй тал" },
    description: {
      en: "Ride with local horsemen across open valleys and granite formations, pausing at nomadic family camps.",
      mn: "Нутгийн адуучидтай хамт тал хөндий, боржин хадат бүсээр морь унан, нүүдэлч айлд саатна.",
    },
    highlights: {
      en: ["Private wrangler support", "Picnic styling on the steppe", "Ideal for first-time riders"],
      mn: ["Хувийн уналгачийн дэмжлэг", "Тал дээрх гоёмсог пикник", "Анхлан морь унахад тохиромжтой"],
    },
  },
  {
    slug: "camel-trekking",
    image: pexels(6614885),
    category: "camel trekking",
    season: ["spring", "summer", "autumn"],
    region: "gobi",
    intensity: "gentle",
    duration: "short",
    budget: "moderate",
    title: { en: "Gobi Camel Caravan", mn: "Говийн тэмээт аялал" },
    description: {
      en: "Slow desert movement through dunes and cliffs with sunset tea service and campfire dining.",
      mn: "Манхан, улаан цавын дундуур удаан хэмнэлтэй тэмээний аялал хийж, нар жаргах үеийн цай, галын дэргэдэх зоог барина.",
    },
    highlights: {
      en: ["Khongor dunes", "Sunset camel ride", "Family-friendly pace"],
      mn: ["Хонгорын элс", "Нар жаргах үеийн тэмээтэй аялал", "Гэр бүлд ээлтэй хэмнэл"],
    },
  },
  {
    slug: "mountain-trek",
    image: pexels(1624438),
    category: "hiking",
    season: ["summer", "autumn"],
    region: "west",
    intensity: "bold",
    duration: "long",
    budget: "premium",
    title: { en: "Altai Alpine Trek", mn: "Алтайн уулын трек" },
    description: {
      en: "A serious walking journey through glacier valleys, wildflower meadows, and broad western skies.",
      mn: "Мөсөн голын хөндий, цэцэгт нуга, баруун хязгаарын уудам тэнгэрийг туулсан жинхэнэ уулын алхалт.",
    },
    highlights: {
      en: ["Expert local guides", "Photographer's dawn stops", "Remote camp nights"],
      mn: ["Туршлагатай нутгийн хөтөч", "Нар мандах үеийн зураг авах цэгүүд", "Алсын кэмпийн шөнүүд"],
    },
  },
  {
    slug: "eagle-festival",
    image: pexels(20363276),
    category: "eagle festival trips",
    season: ["autumn"],
    region: "west",
    intensity: "moderate",
    duration: "medium",
    budget: "ultra",
    title: { en: "Eagle Festival Signature", mn: "Бүргэдийн баярын signature аялал" },
    description: {
      en: "Witness western Mongolia's most iconic living tradition with private interpretation and premium camp service.",
      mn: "Баруун Монголын хамгийн алдартай амьд уламжлалыг хувийн тайлбар, дээд зэрэглэлийн кэмп үйлчилгээтэйгээр мэдэрнэ.",
    },
    highlights: {
      en: ["Kazakh cultural access", "Festival seating support", "Luxury western logistics"],
      mn: ["Казах соёлын ойр харилцаа", "Баярын зохион байгуулалтын дэмжлэг", "Баруун бүсийн тансаг логистик"],
    },
  },
  {
    slug: "lake-expedition",
    image: pexels(1508575),
    category: "lake expeditions",
    season: ["summer", "autumn", "winter"],
    region: "north",
    intensity: "gentle",
    duration: "medium",
    budget: "premium",
    title: { en: "Blue Pearl Expedition", mn: "Хөх сувдын аялал" },
    description: {
      en: "Combine forest walks, boat rides, and warm lakeside hospitality on the shores of Khuvsgul.",
      mn: "Хөвсгөлийн эрэг дээр ой модны алхалт, завины аялал, дулаан зочломтгой амралтыг хослуулна.",
    },
    highlights: {
      en: ["Lakeside lodge pairing", "Forest horse trails", "Wellness-minded pacing"],
      mn: ["Нуурын эргийн lodge хослол", "Ойн морин жим", "Амралт төвтэй хэмнэл"],
    },
  },
  {
    slug: "nomadic-camp",
    image: pexels(25294083),
    category: "nomadic camp experiences",
    season: ["spring", "summer", "autumn"],
    region: "central",
    intensity: "gentle",
    duration: "short",
    budget: "premium",
    title: { en: "Nomad Camp Immersion", mn: "Нүүдэлчдийн кэмпийн туршлага" },
    description: {
      en: "Spend meaningful time at a family camp learning daily rituals, food, herding, and steppe etiquette.",
      mn: "Айлын бууцанд цаг гарган өнгөрүүлж, ахуй, идээ ундаа, мал маллагаа, тал нутгийн ёс заншлыг танин мэднэ.",
    },
    highlights: {
      en: ["Milk tea welcome", "Hands-on family activities", "Excellent cultural introduction"],
      mn: ["Сүүтэй цайгаар угтах", "Айлын өдөр тутмын үйлсэд оролцох", "Соёлын маш сайн танилцуулга"],
    },
  },
  {
    slug: "winter-adventure",
    image: pexels(827518),
    category: "winter adventures",
    season: ["winter"],
    region: "north",
    intensity: "moderate",
    duration: "short",
    budget: "premium",
    title: { en: "Winter Silence Escape", mn: "Өвлийн нам гүм аялал" },
    description: {
      en: "Frozen-lake mornings, horse sled transitions, and intimate warm stays designed for winter lovers.",
      mn: "Хөлдсөн нуурын өглөө, морин чарга, дулаан тухтай амралтаар бүрдсэн өвлийн онцгой хөтөлбөр.",
    },
    highlights: {
      en: ["Snow textures for photography", "Sauna and fireside evenings", "Short luxury winter itinerary"],
      mn: ["Гэрэл зурагт тохирох цасан дүрс", "Саун, галын дэргэдэх үдэш", "Богино өвлийн тансаг хөтөлбөр"],
    },
  },
  {
    slug: "desert-expedition",
    image: pexels(20363276),
    category: "desert expeditions",
    season: ["spring", "summer", "autumn"],
    region: "gobi",
    intensity: "bold",
    duration: "long",
    budget: "ultra",
    title: { en: "Deep Gobi Overland", mn: "Говийн гүн экспедиц" },
    description: {
      en: "A private off-road circuit through iconic desert landmarks with elevated camp design and expert drivers.",
      mn: "Цөлийн алдарт цэгүүдээр явган бус, хувийн өндөр зэрэглэлийн off-road логистиктой экспедиц.",
    },
    highlights: {
      en: ["Private 4x4 convoy", "Styled mobile lunches", "Best for adventurous premium travelers"],
      mn: ["Хувийн 4x4 цуваа", "Гоёмсог замын өдрийн хоол", "Адал явдалд дуртай premium аялагчдад"],
    },
  },
  {
    slug: "photography-journey",
    image: pexels(1508575),
    category: "photography journeys",
    season: ["summer", "autumn", "winter"],
    region: "west",
    intensity: "moderate",
    duration: "medium",
    budget: "ultra",
    title: { en: "Golden Light Photography Journey", mn: "Алтан гэрлийн фото аялал" },
    description: {
      en: "A composition-led route designed around dawn, dust, horse herds, and cultural portrait opportunities.",
      mn: "Нар мандах, тоосон зам, адууны сүрэг, соёлын хөрөг авах боломжид төвлөрсөн маршрут.",
    },
    highlights: {
      en: ["Guide-photographer coordination", "Best-light timing", "Portrait etiquette support"],
      mn: ["Хөтөч, зурагчны уялдаа", "Гэрлийн оновчтой цаг", "Хөрөг зургийн ёс зүйн дэмжлэг"],
    },
  },
];

export const luxuryTours: LuxuryTour[] = [
  {
    slug: "private-gobi-retreat",
    image: pexels(20363276),
    duration: "6 days / 5 nights",
    priceFrom: "From $4,800",
    style: "private fly-drive",
    title: { en: "Private Gobi Retreat", mn: "Говийн хувийн retreat" },
    description: {
      en: "A polished desert itinerary pairing refined ger camps, private guides, and measured, unhurried pacing.",
      mn: "Тансаг гэр кэмп, хувийн хөтөч, амар тайван хэмнэлтэй говийн цэвэрхэн маршрут.",
    },
    inclusions: {
      en: ["Airport meet and concierge", "Private SUV and driver", "Design-led desert camp stays"],
      mn: ["Нисэх буудлын тосолт, concierge үйлчилгээ", "Хувийн SUV ба жолооч", "Дизайны шийдэлтэй цөлийн кэмп"],
    },
  },
  {
    slug: "lakes-and-luxury",
    image: pexels(1508575),
    duration: "7 days / 6 nights",
    priceFrom: "From $5,600",
    style: "lakeside wellness",
    title: { en: "Northern Blue Luxury", mn: "Хойд хөх тансаг аялал" },
    description: {
      en: "A restorative route through Khuvsgul with wellness rituals, elegant lodges, and private nature access.",
      mn: "Хөвсгөлөөр дамжих амралт төвтэй, wellness зан үйл, тансаг lodge, байгальд хувийн ойртолт бүхий маршрут.",
    },
    inclusions: {
      en: ["Lakeside sauna experience", "Private boat charter", "Curated family or couple pacing"],
      mn: ["Нуурын эргийн саун", "Хувийн завины үйлчилгээ", "Хос эсвэл гэр бүлийн тохируулгатай хэмнэл"],
    },
  },
  {
    slug: "culture-concierge",
    image: pexels(2950376),
    duration: "5 days / 4 nights",
    priceFrom: "From $3,900",
    style: "city + countryside",
    title: { en: "Culture Concierge Circuit", mn: "Соёлын concierge маршрут" },
    description: {
      en: "A beautiful introduction to Mongolia through museums, monasteries, performance, and refined countryside stays.",
      mn: "Музей, хийд, тоглолт, хөдөөний тансаг амралтыг хослуулсан Монголтой танилцах гоёмсог аялал.",
    },
    inclusions: {
      en: ["Private curator-style touring", "Fine dining reservations", "Steppe afternoon escape"],
      mn: ["Хувийн curator хэлбэрийн тайлбарт аялал", "Нарийн рестораны захиалга", "Тал нутгийн үдээс хойшх амралт"],
    },
  },
  {
    slug: "grand-steppe-signature",
    image: pexels(28560707),
    duration: "10 days / 9 nights",
    priceFrom: "From $8,200",
    style: "multi-destination signature",
    title: { en: "Grand Steppe Signature", mn: "Их талын signature аялал" },
    description: {
      en: "Our flagship itinerary balancing adventure, luxury transport, cultural access, and premium camp design.",
      mn: "Адал явдал, тансаг тээвэр, соёлын ойр харилцаа, premium кэмпийн шийдлийг тэнцвэржүүлсэн гол маршрут.",
    },
    inclusions: {
      en: ["Domestic air and overland coordination", "Dedicated trip host", "Bespoke celebrations and special requests"],
      mn: ["Дотоод нислэг, авто тээврийн зохион байгуулалт", "Хувийн trip host", "Тусгай хүсэлт, баярын зохион байгуулалт"],
    },
  },
];

export const culturalHighlights: CulturalHighlight[] = [
  {
    image: pexels(28560707),
    title: { en: "Nomadic rhythm", mn: "Нүүдлийн хэмнэл" },
    description: {
      en: "Daily life follows livestock, weather, and landscape. Movement is seasonal, practical, and deeply graceful.",
      mn: "Өдөр тутмын амьдрал мал сүрэг, цаг агаар, нутагтай уялдан өрнөнө. Нүүдэл нь улирлын, ухаалаг, дотоод хэмнэлтэй.",
    },
    details: {
      en: ["Seasonal camps", "Generational skills", "Landscape-led living"],
      mn: ["Улирлын бууц", "Үе дамжсан ур чадвар", "Нутгаа дагасан амьдрал"],
    },
  },
  {
    image: pexels(2950376),
    title: { en: "Spiritual heritage", mn: "Сүнслэг өв" },
    description: {
      en: "Buddhist monasteries, ovoo offerings, and sacred mountains shape the emotional map of Mongolia.",
      mn: "Буддын хийд, овоо тахилга, ариун уулс нь Монголын сэтгэлийн газрын зургийг бүтээдэг.",
    },
    details: {
      en: ["Monasteries", "Sacred landscapes", "Quiet ceremony"],
      mn: ["Хийдүүд", "Ариун нутаг", "Чимээгүй ёслол"],
    },
  },
  {
    image: pexels(4321588),
    title: { en: "Food and hospitality", mn: "Идээ, зочломтгой зан" },
    description: {
      en: "Milk tea, airag, handmade dumplings, and generous hosting remain central to welcome and belonging.",
      mn: "Сүүтэй цай, айраг, гар хийцийн бууз, өгөөмөр дайллага нь зочломтгой зангийн үндэс хэвээр байна.",
    },
    details: {
      en: ["Milk tea rituals", "Pastoral ingredients", "Warm hosting"],
      mn: ["Сүүтэй цайны ёс", "Бэлчээрийн орц", "Дулаан дайллага"],
    },
  },
  {
    image: pexels(33231151),
    title: { en: "Textiles and dress", mn: "Хувцас, нэхмэл" },
    description: {
      en: "The deel, boots, belts, and layered textures express region, season, and ceremonial beauty.",
      mn: "Дээл, гутал, бүс, давхарласан материал нь бүс нутаг, улирал, ёслолын гоо сайхныг илэрхийлнэ.",
    },
    details: {
      en: ["Deel silhouettes", "Embroidery", "Ceremonial styling"],
      mn: ["Дээлийн хэлбэр", "Хатгамал", "Ёслолын хэв маяг"],
    },
  },
  {
    image: pexels(827518),
    title: { en: "Music of the steppe", mn: "Талын хөгжим" },
    description: {
      en: "Morin khuur, long song, and throat singing carry landscape into sound.",
      mn: "Морин хуур, уртын дуу, хөөмий нь байгалийн уудам өнгийг авиа болгож өгдөг.",
    },
    details: {
      en: ["Morin khuur", "Long song", "Throat singing"],
      mn: ["Морин хуур", "Уртын дуу", "Хөөмий"],
    },
  },
  {
    image: pexels(20363276),
    title: { en: "Festival culture", mn: "Баяр наадмын соёл" },
    description: {
      en: "Naadam and the eagle festival reveal sport, identity, and regional pride in vivid, memorable form.",
      mn: "Наадам болон Бүргэдийн баяр нь спорт, ондоошил, бүс нутгийн бахархлыг тод томруун харуулдаг.",
    },
    details: {
      en: ["Naadam", "Eagle festival", "Community pride"],
      mn: ["Наадам", "Бүргэдийн баяр", "Орон нутгийн бахархал"],
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Clara & Julien",
    origin: { en: "Paris, France", mn: "Парис, Франц" },
    quote: {
      en: "It felt less like booking a tour and more like being hosted by a beautifully organized private travel house in Mongolia.",
      mn: "Энгийн аялал захиалсан биш, Монголд маш сайхан зохион байгуулалттай хувийн аяллын байшинд урилгаар очсон мэт санагдсан.",
    },
  },
  {
    name: "Ariunaa B.",
    origin: { en: "Ulaanbaatar, Mongolia", mn: "Улаанбаатар, Монгол" },
    quote: {
      en: "The luxury weekender in Terelj felt fresh, local, and genuinely premium without losing the Mongolian soul.",
      mn: "Тэрэлжийн тансаг амралтын маршрут нь монгол мэдрэмжээ алдалгүй, шинэлэг бөгөөд үнэхээр premium санагдсан.",
    },
  },
  {
    name: "Marcus Lee",
    origin: { en: "Singapore", mn: "Сингапур" },
    quote: {
      en: "Every transition was smooth, every camp was beautiful, and the culture was introduced with real respect.",
      mn: "Шилжилт бүр саадгүй, кэмп бүр үзэсгэлэнтэй, соёлыг маш хүндэтгэлтэй танилцуулсан.",
    },
  },
];

export const faqs: FaqItem[] = [
  {
    question: {
      en: "Can you tailor journeys for families or local weekend travelers?",
      mn: "Гэр бүл эсвэл дотоодын богино аялалд маршрут тохируулж болох уу?",
    },
    answer: {
      en: "Yes. The inquiry forms are designed for both international visitors and Mongolian residents. We can adjust pacing, comfort level, and logistics accordingly.",
      mn: "Тийм. Манай inquiry form нь гадаад аялагч болон Монголын дотоодын аялагчдад зориулагдсан. Хурд, тав тух, логистикийг хэрэгцээнд тааруулж тохируулна.",
    },
  },
  {
    question: {
      en: "Are the luxury tours fully private?",
      mn: "Тансаг аяллууд бүрэн хувийн байдаг уу?",
    },
    answer: {
      en: "The featured luxury journeys are presented as private or semi-private premium departures with concierge-style support.",
      mn: "Тансаг аяллын хөтөлбөрүүд нь ихэвчлэн хувийн эсвэл хагас хувийн premium departure байдлаар, concierge төрлийн үйлчилгээтэй байна.",
    },
  },
  {
    question: {
      en: "What is the best season for first-time travelers?",
      mn: "Анх удаа ирэх аялагчдад хамгийн тохиромжтой улирал аль вэ?",
    },
    answer: {
      en: "June to September is the easiest overall window, while September offers especially beautiful light and fewer crowds.",
      mn: "Ерөнхийдөө 6-9 сар хамгийн хялбар үе. Харин 9 сар нь гэрэл сайтай, хүн багатай тул онцгой гоё байдаг.",
    },
  },
  {
    question: {
      en: "Is the AI planner a real booking engine?",
      mn: "AI planner нь жинхэнэ захиалгын систем үү?",
    },
    answer: {
      en: "It is a polished mock planner that suggests relevant itineraries using local content. Final trip design happens through direct inquiry.",
      mn: "Энэ нь орон нутгийн контент дээр үндэслэн санал гаргадаг polished mock planner юм. Эцсийн маршрут нь шууд inquiry-гаар шийдэгдэнэ.",
    },
  },
  {
    question: {
      en: "Can I inquire in Mongolian?",
      mn: "Монгол хэлээр inquiry илгээж болох уу?",
    },
    answer: {
      en: "Absolutely. The site supports both English and Mongolian, and the contact flow is meant for both audiences.",
      mn: "Мэдээж. Сайт Англи, Монгол хэлтэй бөгөөд inquiry хэсэг нь хоёр төрлийн хэрэглэгчдэд зориулагдсан.",
    },
  },
  {
    question: {
      en: "How quickly will you reply?",
      mn: "Хэр хурдан хариу ирэх вэ?",
    },
    answer: {
      en: "This demo uses mock submission, but the contact design is structured like a premium concierge with clear phone and email touchpoints.",
      mn: "Энэ демо нь mock submission ашиглаж байгаа ч холбоо барих бүтэц нь premium concierge үйлчилгээ шиг хурдан холбоо үүсгэхээр зохион байгуулагдсан.",
    },
  },
];

export const galleryItems: GalleryItem[] = [
  { src: pexels(28560707), category: "culture", title: { en: "Morning herder ritual", mn: "Өглөөний малчны мөч" } },
  { src: pexels(20363276), category: "adventure", title: { en: "Gobi expedition line", mn: "Говийн экспедиц" } },
  { src: pexels(1508575), category: "nature", title: { en: "Blue pearl stillness", mn: "Хөх сувдын нам гүм" } },
  { src: pexels(25294083), category: "adventure", title: { en: "Terelj riding country", mn: "Тэрэлжийн морин бүс" } },
  { src: pexels(2950376), category: "luxury", title: { en: "City arrival elegance", mn: "Хотын тансаг эхлэл" } },
  { src: pexels(4321588), category: "culture", title: { en: "Table of welcome", mn: "Дайллагын ширээ" } },
  { src: pexels(6614885), category: "nature", title: { en: "Desert silence", mn: "Цөлийн нам гүм" } },
  { src: pexels(1624438), category: "nature", title: { en: "Altai altitude", mn: "Алтайн өндөрлөг" } },
];

export const plannerRecommendations: PlannerRecommendation[] = [
  {
    title: { en: "Adventure and steppe immersion", mn: "Адал явдал ба тал нутгийн аялал" },
    style: "adventure",
    duration: "7-9",
    budget: "premium",
    season: ["summer", "autumn"],
    interests: ["horseback riding", "nomadic life", "hiking"],
    summary: {
      en: "Terelj, Arkhangai, and a final evening in Ulaanbaatar with room for active days and elevated camp nights.",
      mn: "Тэрэлж, Архангай, төгсгөлд нь Улаанбаатарын оройг багтаасан, идэвхтэй өдөр ба тансаг кэмпийн шөнийг хослуулсан маршрут.",
    },
    stops: {
      en: ["Ulaanbaatar arrival", "Terelj riding escape", "Arkhangai valley camp", "Cultural finale"],
      mn: ["Улаанбаатар", "Тэрэлжийн морин аялал", "Архангайн хөндийн кэмп", "Соёлын төгсгөл"],
    },
  },
  {
    title: { en: "Luxury desert calm", mn: "Цөлийн тансаг тайван аялал" },
    style: "luxury",
    duration: "4-6",
    budget: "ultra",
    season: ["spring", "summer", "autumn"],
    interests: ["luxury", "desert", "photography"],
    summary: {
      en: "A concise high-end Gobi program with refined camp stays, desert dining, and private transport throughout.",
      mn: "Говийн товч атлаа өндөр зэрэглэлийн маршрут. Тансаг кэмп, цөлийн оройн зоог, бүх хугацаанд хувийн тээвэртэй.",
    },
    stops: {
      en: ["Ulaanbaatar concierge check-in", "Fly south", "Khongor dunes", "Flaming cliffs"],
      mn: ["Улаанбаатарын concierge угталт", "Өмнө рүү нисэх", "Хонгорын элс", "Улаан цав"],
    },
  },
  {
    title: { en: "Culture and city refinement", mn: "Соёл ба хотын тансаг танилцуулга" },
    style: "culture",
    duration: "4-6",
    budget: "premium",
    season: ["spring", "summer", "autumn", "winter"],
    interests: ["culture", "food", "city"],
    summary: {
      en: "Museums, monasteries, elevated local dining, and one elegant countryside retreat near the capital.",
      mn: "Музей, хийд, тансаг орон нутгийн хоол, нийслэлд ойр нэгэн дэгжин хөдөөний амралтыг хослуулсан аялал.",
    },
    stops: {
      en: ["Ulaanbaatar culture day", "Performance evening", "Terelj retreat", "Design shopping and departure"],
      mn: ["Улаанбаатарын соёлын өдөр", "Оройн тоглолт", "Тэрэлжийн амралт", "Дизайны дэлгүүр, буцах"],
    },
  },
  {
    title: { en: "Northern family lakes", mn: "Хойд нутгийн гэр бүлийн нуурын аялал" },
    style: "family",
    duration: "7-9",
    budget: "premium",
    season: ["summer"],
    interests: ["family", "nature", "wellness"],
    summary: {
      en: "Relaxed pacing in Khuvsgul with boating, horse walks, lakeside meals, and gentle forest time.",
      mn: "Хөвсгөлд нуурын завь, хөнгөн морин аялал, эргийн хоол, ой доторх тайван мөчүүдтэй гэр бүлийн хөтөлбөр.",
    },
    stops: {
      en: ["Ulaanbaatar", "Fly north", "Lakeside lodge", "Forest excursions"],
      mn: ["Улаанбаатар", "Хойш нисэх", "Нуурын эргийн lodge", "Ойн жижиг аяллууд"],
    },
  },
  {
    title: { en: "Western photography edition", mn: "Баруун бүсийн фото маршрут" },
    style: "photography",
    duration: "10+",
    budget: "ultra",
    season: ["autumn", "winter"],
    interests: ["photography", "eagle festival", "culture"],
    summary: {
      en: "Built around light, portrait opportunities, and dramatic western terrain for serious visual travelers.",
      mn: "Гэрэл, хөрөг, баруун бүсийн сүрлэг байгальд төвлөрсөн, зурагт дуртай аялагчдын маршрут.",
    },
    stops: {
      en: ["West arrival", "Golden-hour camp work", "Festival access", "Remote mountain extension"],
      mn: ["Баруун бүсэд хүрэх", "Алтан цагийн зураг авалт", "Баярын ойртолт", "Алсын уулын өргөтгөл"],
    },
  },
];
