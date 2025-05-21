export interface LanguageItem {
  flagSrc: string;
  label: string;
  code: string;
}

export const LanguageItems: LanguageItem[] = [
  {
    code: "km",
    label: "ភាសាខ្មែរ",
    flagSrc: "/svg/flags/km.svg",
  },
  {
    code: "en",
    label: "English",
    flagSrc: "/svg/flags/en.svg",
  },
  {
    code: "zh",
    label: "中文",
    flagSrc: "/svg/flags/zh.svg",
  },
];
