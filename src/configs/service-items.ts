interface ServiceItem {
  title: string;
  description: string;
  iconSrc: string;
  imageUrl?: string;
}

export const ServiceFeature: Record<"en" | "km" | "zh", ServiceItem[]> = {
  en: [
    {
      title: "24/7 Customer Support",
      description:
        "We’re here anytime you need help — before, during, or after your rental.",
      iconSrc: "/svg/icons/call.svg",
    },
    {
      title: "Airport Pickup & Drop-off",
      description:
        "Convenient car delivery to and from major airport locations.",
      iconSrc: "/svg/icons/airport.svg",
    },
    {
      title: "Fully Insured Rentals",
      description:
        "Drive with confidence — all our rentals come with full insurance coverage.",
      iconSrc: "/svg/icons/insuren.svg",
    },
    {
      title: "Clean & Sanitized Vehicles",
      description:
        "Every car is thoroughly cleaned and disinfected before each rental.",
      iconSrc: "/svg/icons/clean.svg",
    },
    {
      title: "GPS & Add-ons Available",
      description:
        "Upgrade your rental with GPS, child seats, Wi-Fi, and more.",
      iconSrc: "/svg/icons/gps.svg",
    },
    {
      title: "Loyalty Rewards Program",
      description: "Earn points and get discounts with every rental you make.",
      iconSrc: "/svg/icons/gift.svg",
    },
  ],
  km: [
    {
      title: "សេវាអតិថិជន 24/7",
      description:
        "យើងនៅទីនេះគ្រប់ពេលដែលអ្នកត្រូវការជំនួយ — មុន កំឡុងពេល ឬបន្ទាប់ពីការជួលរបស់អ្នក។",
      iconSrc: "/svg/icons/call.svg",
    },
    {
      title: "ទទួលពីព្រលានយន្តហោះ",
      description:
        "ការដឹកជញ្ជូនរថយន្តងាយស្រួលទៅនិងមកពីទីតាំងព្រលានយន្តហោះសំខាន់ៗ។",
      iconSrc: "/svg/icons/airport.svg",
    },
    {
      title: "ការជួលធានារ៉ាប់រងពេញលេញ",
      description:
        "បើកបរប្រកបដោយទំនុកចិត្ត - ការជួលរបស់យើងទាំងអស់មកជាមួយការធានារ៉ាប់រងពេញលេញ។",
      iconSrc: "/svg/icons/insuren.svg",
    },
    {
      title: "យានជំនិះស្អាត និងអនាម័យ",
      description:
        "ឡាននីមួយៗត្រូវបានសម្អាត និងសម្លាប់មេរោគយ៉ាងហ្មត់ចត់មុនពេលជួលនីមួយៗ។",
      iconSrc: "/svg/icons/clean.svg",
    },
    {
      title: "GPS និងកម្មវិធីបន្ថែម",
      description:
        "ដំឡើង​កំណែ​ការ​ជួល​របស់​អ្នក​ជាមួយ​នឹង GPS កៅអី​កុមារ Wi-Fi និង​ច្រើន​ទៀត។",
      iconSrc: "/svg/icons/gps.svg",
    },
    {
      title: "កម្មវិធីរង្វាន់ភាពស្មោះត្រង់",
      description:
        "ទទួលបានពិន្ទុ និងទទួលបានការបញ្ចុះតម្លៃជាមួយរាល់ការជួលដែលអ្នកធ្វើ។",
      iconSrc: "/svg/icons/gift.svg",
    },
  ],
  zh: [
    {
      title: "24/7客户支持",
      description:
        "无论在租赁前、租赁中还是租赁后，只要您需要帮助，我们都会随时为您提供帮助。",
      iconSrc: "/svg/icons/call.svg",
    },
    {
      title: "机场接送",
      description: "方便地将车辆送往各大机场地点。",
      iconSrc: "/svg/icons/airport.svg",
    },
    {
      title: "全额保险租赁",
      description: "放心驾驶——我们所有的租赁车辆均提供全额保险。",
      iconSrc: "/svg/icons/insuren.svg",
    },
    {
      title: "清洁和消毒车辆",
      description: "每次租赁前，每辆车都会经过彻底清洁和消毒。",
      iconSrc: "/svg/icons/clean.svg",
    },
    {
      title: "GPS 和附加组件可用",
      description: "使用 GPS、儿童座椅、Wi-Fi 等升级您的租赁服务。",
      iconSrc: "/svg/icons/gps.svg",
    },
    {
      title: "忠诚度奖励计划",
      description: "每次租车均可赚取积分并获得折扣。",
      iconSrc: "/svg/icons/gift.svg",
    },
  ],
};

export const ServiceItems: Record<"en" | "km" | "zh", ServiceItem[]> = {
  en: [
    {
      title: "Browse & Choose",
      description:
        "Explore our wide selection of vehicles and pick the one that suits your trip.",
      iconSrc: "/svg/icons/browse.svg",
      imageUrl: "/images/services/explain.png",
    },
    {
      title: "Book Online",
      description:
        "Reserve your vehicle in minutes through our easy-to-use online platform.",
      iconSrc: "/svg/icons/booked.svg",
      imageUrl: "/images/services/book-online.png",
    },
    {
      title: "Pick Up or Get Delivered",
      description:
        "Pick up your car or have it delivered to your preferred location, including airports.",
      iconSrc: "/svg/icons/delivery.svg",
      imageUrl: "/images/services/enjoy-ride.png",
    },
    {
      title: "Enjoy the Ride",
      description:
        "Drive confidently with full insurance and 24/7 support throughout your rental.",
      iconSrc: "/svg/icons/drive.svg",
      imageUrl: "/images/services/trip.png",
    },
  ],
  km: [
    {
      title: "រកមើលនិងជ្រើសរើស",
      description:
        "រុករកជម្រើសដ៏ធំទូលាយរបស់យើងនៃយានជំនិះ ហើយជ្រើសរើសរថយន្តដែលសាកសមនឹងការធ្វើដំណើររបស់អ្នក។",
      iconSrc: "/images/services/trip.png",
    },
    {
      title: "កក់តាមអ៊ីនធឺណិត",
      description:
        "កក់យានយន្តរបស់អ្នកក្នុងរយៈពេលប៉ុន្មាននាទី តាមរយៈវេទិកាអនឡាញដែលងាយស្រួលប្រើរបស់យើង។",
      iconSrc: "/images/services/book-online.png",
    },
    {
      title: "ទទួល ឬ ដឹកជញ្ជូន",
      description:
        "យកឡានរបស់អ្នក ឬដឹកជញ្ជូនវាទៅទីតាំងដែលអ្នកពេញចិត្ត រួមទាំងព្រលានយន្តហោះផងដែរ។",
      iconSrc: "/images/services/contract.png",
    },
    {
      title: "សូមរីករាយជាមួយការជិះ",
      description:
        "បើកបរប្រកបដោយទំនុកចិត្តជាមួយនឹងការធានារ៉ាប់រងពេញលេញ និងការគាំទ្រ 24/7 ទូទាំងការជួលរបស់អ្នក។",
      iconSrc: "/images/services/enjoy.png",
    },
  ],
  zh: [
    {
      title: "浏览并选择",
      description: "浏览我们丰富的车辆选择，选择适合您行程的车辆.",
      iconSrc: "/images/services/trip.png",
    },
    {
      title: "在线预订",
      description: "通过我们易于使用的在线平台，几分钟内即可预订您的车辆。",
      iconSrc: "/images/services/book-online.png",
    },
    {
      title: "自取或送货",
      description: "领取您的汽车或将其送到您喜欢的地点，包括机场。",
      iconSrc: "/images/service/contract.png",
    },
    {
      title: "享受旅程",
      description: "租车期间，全额保险和全天候支持让您安心驾驶.",
      iconSrc: "/images/services/enjoy.png",
    },
  ],
};

export const ourServiceItems: Record<"en" | "km" | "zh", ServiceItem[]> = {
  en: [
    {
      title: "Browse & Choose",
      description:
        "Explore our wide selection of vehicles and pick the one that suits your trip.",
      iconSrc: "/svg/icons/browse.svg",
      imageUrl: "/images/services/explain.png",
    },
    {
      title: "Book Online",
      description:
        "Reserve your vehicle in minutes through our easy-to-use online platform.",
      iconSrc: "/svg/icons/booked.svg",
      imageUrl: "/images/services/book-online.png",
    },
    {
      title: "Pick Up or Get Delivered",
      description:
        "Pick up your car or have it delivered to your preferred location, including airports.",
      iconSrc: "/svg/icons/delivery.svg",
      imageUrl: "/images/services/contract.png",
    },
    {
      title: "Enjoy the Ride",
      description:
        "Drive confidently with full insurance and 24/7 support throughout your rental.",
      iconSrc: "/svg/icons/drive.svg",
      imageUrl: "/images/services/enjoy-ride.png",
    },
  ],
  km: [
    {
      title: "Browse & Choose",
      description:
        "Explore our wide selection of vehicles and pick the one that suits your trip.",
      iconSrc: "/svg/icons/browse.svg",
      imageUrl: "/images/services/explain.png",
    },
    {
      title: "Book Online",
      description:
        "Reserve your vehicle in minutes through our easy-to-use online platform.",
      iconSrc: "/svg/icons/booked.svg",
      imageUrl: "/images/services/book-online.png",
    },
    {
      title: "Pick Up or Get Delivered",
      description:
        "Pick up your car or have it delivered to your preferred location, including airports.",
      iconSrc: "/svg/icons/delivery.svg",
      imageUrl: "/images/services/contract.png",
    },
    {
      title: "Enjoy the Ride",
      description:
        "Drive confidently with full insurance and 24/7 support throughout your rental.",
      iconSrc: "/svg/icons/drive.svg",
      imageUrl: "/images/services/enjoy-ride.png",
    },
  ],
  zh: [
    {
      title: "Browse & Choose",
      description:
        "Explore our wide selection of vehicles and pick the one that suits your trip.",
      iconSrc: "/svg/icons/browse.svg",
      imageUrl: "/images/services/explain.png",
    },
    {
      title: "Book Online",
      description:
        "Reserve your vehicle in minutes through our easy-to-use online platform.",
      iconSrc: "/svg/icons/booked.svg",
      imageUrl: "/images/services/book-online.png",
    },
    {
      title: "Pick Up or Get Delivered",
      description:
        "Pick up your car or have it delivered to your preferred location, including airports.",
      iconSrc: "/svg/icons/delivery.svg",
      imageUrl: "/images/services/contract.png",
    },
    {
      title: "Enjoy the Ride",
      description:
        "Drive confidently with full insurance and 24/7 support throughout your rental.",
      iconSrc: "/svg/icons/drive.svg",
      imageUrl: "/images/services/enjoy-ride.png",
    },
  ],
};
