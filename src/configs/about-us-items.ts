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
    title: "បើកបរក្នុងប្រទេសកម្ពុជា តាមបែបរបស់អ្នក",
    description:
      "សេវាកម្មជួលរថយន្តដែលទុកចិត្តបាន តម្លៃសមរម្យ និងងាយស្រួលបំផុតនៅទូទាំងប្រទេសកម្ពុជា។ ស្វែងយល់ពីសម្រស់ទីក្រុងភ្នំពេញ សៀមរាប និងតំបន់ផ្សេងៗទៀត ជាមួយរថយន្តដែលមានទំនុកចិត្តខ្ពស់របស់យើង",
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
        "យើងមានគោលបំណងផ្តល់ជូននូវសេវាកម្មជួលរថយន្តដែលទុកចិត្តបាន និងតម្លៃសមរម្យនៅទូទាំងប្រទេសកម្ពុជា ដើម្បីធានានូវការពេញចិត្តរបស់អតិថិជននៅគ្រប់ដំណាក់កាល",
    },
    {
      title: "រថយន្តសម្រាប់ជួល",
      description:
        "យើងមានរថយន្តច្រើនប្រភេទសម្រាប់ជ្រើសរើស រាប់ចាប់ពីរថយន្តតូច រថយន្តស៊េដាន (Sedan) រថយន្ត SUV រហូតដល់រថយន្តទំនើបៗ ដើម្បីបម្រើជូនតាមគ្រប់តម្រូវការនៃការធ្វើដំណើររបស់អ្នក",
    },
    {
      title: "ហេតុអ្វីជ្រើសរើសយើង?",
      description:
        "យើងផ្តល់ជូននូវការកក់ទុកដ៏ងាយស្រួល សេវាបម្រើអតិថិជន ២៤ម៉ោងលើ២៤ម៉ោង និងរថយន្តដែលមានការថែទាំយ៉ាងល្អ ដើម្បីធានាបាននូវបទពិសោធន៍ជួលរថយន្តដ៏រលូន និងរីករាយ",
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
