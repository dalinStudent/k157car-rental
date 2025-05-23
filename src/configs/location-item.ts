export interface LocationItem {
  label: string;
  code: string;
}

export const LocationItems: Record<"en" | "km" | "zh", LocationItem[]> = {
  en: [
    {
      label: "Phnom Penh",
      code: "PP",
    },
    {
      label: "Siem Reap",
      code: "SR",
    },
    {
      label: "Prey Veng",
      code: "PV",
    },
  ],
  km: [
    {
      label: "ភ្នំពេញ",
      code: "PP",
    },
    {
      label: "សៀមរាប",
      code: "SR",
    },
    {
      label: "ព្រៃវែង",
      code: "PV",
    },
  ],
  zh: [
    {
      label: "金边",
      code: "PP",
    },
    {
      label: "暹粒",
      code: "SR",
    },
    {
      label: "波罗勉",
      code: "PV",
    },
  ],
};
