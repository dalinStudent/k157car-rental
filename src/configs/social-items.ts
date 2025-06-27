interface SocialItem {
  name: string;
  icon: string;
  link: string;
}

interface IconItem {
  name: string;
  icon: string;
}

export const SocialItems: SocialItem[] = [
  {
    name: "Telegram",
    icon: "/svg/socials/telegram.svg",
    link: "https://web.telegram.org/",
  },
  {
    name: "Facebook",
    icon: "/svg/socials/facebook.svg",
    link: "https://www.facebook.com/",
  },
  {
    name: "Instagram",
    icon: "/svg/socials/instagram.svg",
    link: "https://www.instagram.com/",
  },
  {
    name: "Tiktok",
    icon: "/svg/socials/tiktok.svg",
    link: "https://www.tiktok.com/",
  },
  {
    name: "Youtube",
    icon: "/svg/socials/youtube.svg",
    link: "https://www.youtube.com/",
  },
];

export const CarSpecItems: Record<"en" | "km" | "zh", IconItem[]> = {
  en: [
    {
      name: "5 Seats",
      icon: "/svg/icons/people.svg"
    },
    {
      name: "2 Suitcases",
      icon: "/svg/icons/luggage.svg"
    },
    {
      name: "A/C",
      icon: "/svg/icons/fan.svg"
    },
    {
      name: "Petrol",
      icon: "/svg/icons/luggage.svg"
    },
    {
      name: "Bluetooth Media",
      icon: "/svg/icons/music.svg"
    },
    {
      name: "Auto Transmission",
      icon: "/svg/icons/setting.svg"
    }
  ],
  km: [
    {
      name: "5 កៅអី",
      icon: "/svg/icons/people.svg"
    },
    {
      name: "2 វ៉ាលី",
      icon: "/svg/icons/luggage.svg"
    },
    {
      name: "ម៉ាស៊ីនត្រជាក់",
      icon: "/svg/icons/fan.svg"
    },
    {
      name: "ប្រេងសាំង",
      icon: "/svg/icons/luggage.svg"
    },
    {
      name: "ប៊្លូធូស",
      icon: "/svg/icons/music.svg"
    },
    {
      name: "លេខស្វ័យប្រវត្តិ",
      icon: "/svg/icons/setting.svg"
    }
  ],
  zh: [
    {
      name: "5 座位",
      icon: "/svg/icons/people.svg"
    },
    {
      name: "2 手提箱",
      icon: "/svg/icons/luggage.svg"
    },
    {
      name: "空调",
      icon: "/svg/icons/fan.svg"
    },
    {
      name: "汽油",
      icon: "/svg/icons/luggage.svg"
    },
    {
      name: "蓝牙",
      icon: "/svg/icons/music.svg"
    },
    {
      name: "汽车",
      icon: "/svg/icons/setting.svg"
    }
  ]
}

export const includedSpecItems: Record<string, string[]> = {
  en: [
    "Insurance (collision and theft coverage)",
    "Unlimited mileage",
    // "Free cancellation up to 24 hours before pickup",
    "24/7 roadside assistance",
    "Taxes and fees included",
    "Additional driver option",
    // "Child safety seat (upon request)",
    "GPS navigation system",
    // "Road toll pass included",
    "Vehicle cleaning and sanitization",
  ],
  km: [
    "ធានារ៉ាប់រង (ការខូចខាត និងការលួច)",
    "គ្មានកំណត់ចម្ងាយ",
    // "បោះបង់ដោយឥតគិតថ្លៃមុនពេលទទួលយករថយន្ត ២៤ ម៉ោង",
    "ជំនួយផ្លូវភេទ ២៤ម៉ោង",
    "ពន្ធ និងកម្រៃរួមបញ្ចូល",
    "ជម្រើសអ្នកបើកបន្ថែម",
    // "កៅអីសុវត្ថិភាពសម្រាប់កុមារ (តាមការស្នើសុំ)",
    "ប្រព័ន្ធនាវាស្វ័យប្រវត្តិ",
    // "រួមបញ្ចូលការបង់ផ្លូវ",
    "សម្អាត និងផ្ដល់សុវត្ថិភាពរថយន្ត",
  ],
  zh: [
    "保险（碰撞和盗窃覆盖）",
    "不限里程",
    // "取车前24小时免费取消",
    "全天候道路救援",
    "含税费",
    "额外驾驶员选项",
    // "儿童安全座椅（按需提供）",
    "GPS导航系统",
    // "道路通行费包含",
    "车辆清洁和消毒",
  ],
};

