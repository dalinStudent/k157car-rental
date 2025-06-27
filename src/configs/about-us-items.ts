interface AboutUsItem {
  title: string;
  description: string;
  imageUrl?: string;
}

export const TitleAboutUs: Record<
  "en" | "km" | "zh",
  { title: string; description: string }
> = {
  en: {
    title: "Drive Cambodia Your Way",
    description:
      "Reliable, affordable, and hassle-free car rentals across Cambodia. Explore the beauty of Phnom Penh, Siem Reap, and beyond with our trusted vehicles.",
  },
  km: {
    title: "បើកបរប្រទេសកម្ពុជា របស់អ្នកឯង",
    description:
      "ជួលរថយន្តដែលទំនុកចិត្ត, មានតម្លៃសមរម្យ និងងាយស្រួល នៅទូទាំងប្រទេសកម្ពុជា។ ស្វែងរកភាពស្រស់ស្អាតរបស់ភ្នំពេញ សៀមរាប និងតំបន់ផ្សេងទៀត។",
  },
  zh: {
    title: "按您的方式畅游柬埔寨",
    description:
      "可靠、实惠且无忧的柬埔寨汽车租赁服务。探索金边、暹粒及更多地区的美景。",
  },
};

export const ValueAboutUs: Record<"en" | "km" | "zh", AboutUsItem[]> = {
  en: [
    {
      title: "Our Mission",
      description:
        "We aim to provide reliable and affordable car rental services throughout Cambodia, ensuring customer satisfaction at every step.",
        imageUrl: '/images/car.jpg'
    },
    {
      title: "Our Fleet",
      description:
        "Our diverse fleet includes compact cars, sedans, SUVs, and luxury vehicles, catering to all your travel needs.",
    },
    {
      title: "Why Choose Us?",
      description:
        "We offer hassle-free booking, 24/7 customer support, and well-maintained vehicles for a smooth and enjoyable rental experience.",
        imageUrl: '/images/car-rental.jpg'
    },
  ],
  km: [
    {
      title: "បេសកកម្មរបស់យើង",
      description:
        "យើងមានបំណងផ្តល់សេវាកម្មជួលរថយន្តដែលអាចទុកចិត្តបាន និងតម្លៃសមរម្យនៅទូទាំងប្រទេសកម្ពុជា ធានាបាននូវការពេញចិត្តរបស់អតិថិជនគ្រប់ជំហាន។",
    },
    {
      title: "រថយន្តសម្រាប់ជួល",
      description:
        "យើងផ្តល់ជូនរថយន្តច្រើនប្រភេទ រួមមានរថយន្តតូច សេដាន អេសយូវី និងរថយន្តប្រណិត ដើម្បីបំពេញតម្រូវការធ្វើដំណើររបស់អ្នក។",
    },
    {
      title: "ហេតុអ្វីជ្រើសរើសយើង?",
      description:
        "យើងផ្តល់ការកក់ងាយស្រួល គាំទ្រអតិថិជន 24/7 និងរថយន្តដែលបានថែរក្សាដោយល្អសម្រាប់បទពិសោធន៍ជួលរថយន្តរលូន។",
    },
  ],
  zh: [
    {
      title: "我们的使命",
      description:
        "我们的目标是在柬埔寨各地提供可靠且价格合理的汽车租赁服务，确保客户每一步都满意。",
    },
    {
      title: "我们的车队",
      description:
        "我们拥有多样化的车队，包括小型车、轿车、SUV 和豪华车，满足您的各种出行需求。",
    },
    {
      title: "为什么选择我们？",
      description:
        "我们提供便捷的预订、24/7 客户支持以及维护良好的车辆，让您的租车体验顺畅愉快。",
    },
  ],
};
