import { Component, FC } from "react";
import LottieBooking from "@/app/components/lotties/LottieBooking";
import LottieAgreement from "@/app/components/lotties/LottieContract";
import LottieIntroduction from "@/app/components/lotties/LottieIntroduction";
import LottieLocation from "@/app/components/lotties/LottieLocation";
import LottieUpload from "@/app/components/lotties/LottieUpload";

interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: FC;
}

interface CardItem {
  title: string;
  description: string;
  icon: string;
  path: string;
}

export const StepItems: Record<"en" | "km" | "zh", StepItem[]> = {
  en: [
    {
      id: 1,
      title: "Introduction",
      description:
        "Browse our car selection, choose the vehicle that suits your needs, and check pricing for daily, weekly, or monthly rentals",
      icon: LottieIntroduction,
    },
    {
      id: 2,
      title: "Booking & Payment",
      description:
        "Provide your rental details, confirm your dates, and complete payment securely through our platform.",
      icon: LottieBooking,
    },
    {
      id: 3,
      title: "Verification & Info",
      description:
        "Upload your driver’s license and required documents. We verify your information quickly to approve your rental.",
      icon: LottieUpload,
    },
    {
      id: 4,
      title: "Rental Agreement",
      description:
        "Review and sign your digital rental contract. This outlines rental terms, insurance coverage, and any additional services.",
      icon: LottieAgreement,
    },
    {
      id: 5,
      title: "Pick Up Your Car",
      description:
        "Visit our location at your scheduled time, inspect your car, and start your journey with confidence.",
      icon: LottieLocation,
    },
  ],
  km: [
    {
      id: 1,
      title: "សេចក្តីផ្តើម",
      description:
        "រកមើលការជ្រើសរើសរថយន្តរបស់យើង ជ្រើសរើសយានយន្តដែលសាកសមនឹងតម្រូវការរបស់អ្នក និងពិនិត្យមើលតម្លៃសម្រាប់ការជួលប្រចាំថ្ងៃ ប្រចាំសប្តាហ៍ ឬប្រចាំខែ",
      icon: LottieIntroduction,
    },
    {
      id: 2,
      title: "ការកក់ និងការទូទាត់",
      description:
        "ផ្តល់ព័ត៌មានលម្អិតអំពីការជួលរបស់អ្នក បញ្ជាក់កាលបរិច្ឆេទរបស់អ្នក និងបញ្ចប់ការទូទាត់ដោយសុវត្ថិភាពតាមរយៈវេទិការបស់យើង។",
      icon: LottieBooking,
    },
    {
      id: 3,
      title: "ការផ្ទៀងផ្ទាត់ និងព័ត៌មាន",
      description:
        "បង្ហោះប័ណ្ណបើកបររបស់អ្នក និងឯកសារដែលត្រូវការ។ យើងផ្ទៀងផ្ទាត់ព័ត៌មានរបស់អ្នកយ៉ាងឆាប់រហ័ស ដើម្បីយល់ព្រមលើការជួលរបស់អ្នក។",
      icon: LottieUpload,
    },
    {
      id: 4,
      title: "កិច្ចព្រមព្រៀងជួល",
      description:
        "ពិនិត្យ និងចុះហត្ថលេខាលើកិច្ចសន្យាជួលឌីជីថលរបស់អ្នក។ នេះរៀបរាប់អំពីលក្ខខណ្ឌជួល ការធានារ៉ាប់រង និងសេវាកម្មបន្ថែមណាមួយ។",
      icon: LottieAgreement,
    },
    {
      id: 5,
      title: "ទទួលយកឡាន",
      description:
        "ទស្សនាទីតាំងរបស់យើងតាមពេលវេលាកំណត់របស់អ្នក ពិនិត្យរថយន្តរបស់អ្នក ហើយចាប់ផ្តើមការធ្វើដំណើររបស់អ្នកដោយភាពជឿជាក់។",
      icon: LottieLocation,
    },
  ],
  zh: [
    {
      id: 1,
      title: "介绍",
      description:
        "浏览我们的车型选择，选择适合您需求的车辆，并查看每日、每周或每月的租车价格",
      icon: LottieIntroduction,
    },
    {
      id: 2,
      title: "预订及付款",
      description:
        "通过我们的平台提供您的租赁详情、确认您的日期并安全地完成付款。",
      icon: LottieBooking,
    },
    {
      id: 3,
      title: "验证与信息",
      description:
        "上传您的驾照及其他所需文件。我们会快速验证您的信息，并批准您的租车申请。",
      icon: LottieUpload,
    },
    {
      id: 4,
      title: "租赁协议",
      description:
        "审查并签署您的电子租赁合同。合同概述了租赁条款、保险范围以及所有附加服务。",
      icon: LottieAgreement,
    },
    {
      id: 5,
      title: "取车",
      description:
        "请按照您预定的时间访问我们的位置，检查您的车辆，然后满怀信心地开始您的旅程。",
      icon: LottieLocation,
    },
  ],
};

export const CardItems: Record<"en" | "km" | "zh", CardItem[]> = {
  en: [
    {
      title: "Fast & Easy Booking",
      description:
        "Reserve your car in minutes with our simple and user-friendly online process.",
      icon: "/svg/icons/reciept.svg",
      path: "/",
    },
    {
      title: "Wide Selection",
      description:
        "Choose from economy, luxury, SUV, or family cars to suit your needs.",
      icon: "/svg/icons/car.svg",
      path: "/",
    },
    {
      title: "Secure Payments",
      description:
        "Safe, transparent payment options with instant confirmation for peace of mind.",
      icon: "/svg/icons/payment.svg",
      path: "/payment",
    },
  ],
  km: [
    {
      title: "ការកក់រហ័ស និងងាយស្រួល",
      description:
        "កក់រថយន្តរបស់អ្នកក្នុងរយៈពេលប៉ុន្មាននាទីជាមួយនឹងដំណើរការអនឡាញដ៏សាមញ្ញ និងងាយស្រួលប្រើរបស់យើង។",
      icon: "/svg/icons/reciept.svg",
      path: "/",
    },
    {
      title: "ការជ្រើសរើសធំទូលាយ",
      description:
        "ជ្រើសរើសពីប្រណិតភាព SUV ឬរថយន្តគ្រួសារ ដើម្បីបំពេញតម្រូវការរបស់អ្នក។",
      icon: "/svg/icons/car.svg",
      path: "/",
    },
    {
      title: "ការទូទាត់ប្រកបដោយសុវត្ថិភាព",
      description:
        "ជម្រើសទូទាត់ប្រកបដោយសុវត្ថិភាព តម្លាភាព ជាមួយនឹងការបញ្ជាក់ភ្លាមៗ ដើម្បីសន្តិភាពនៃចិត្ត។",
      icon: "/svg/icons/payment.svg",
      path: "/payment",
    },
  ],
  zh: [
    {
      title: "快速轻松的预订",
      description:
        "通过我们简单且用户友好的在线流程，您可以在几分钟内预订您的汽车。",
      icon: "/svg/icons/reciept.svg",
      path: "/",
    },
    {
      title: "广泛的选择",
      description:
        "从经济型、豪华型、SUV 或家庭用车中进行选择，以满足您的需求。",
      icon: "/svg/icons/car.svg",
      path: "/",
    },
    {
      title: "安全支付",
      description:
        "安全、透明的付款方式，即时确认，让您安心无忧。",
      icon: "/svg/icons/payment.svg",
      path: "/payment",
    },
  ],
};
