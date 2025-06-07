import { CarStatus } from "@/common/enums/car-status.enum";
import { DiscountType } from "@/common/enums/discount-type.enum";
import { Car } from "@/types/car.type";

export const Cars: Car[] = [
  {
    id: 1,
    name: "Raize",
    category: {
      id: 1,
      name: "SUV",
    },
    price: 0,
    imageUrl: "/images/brands/cars/suv/raize.png",
    description: "",
    galleries: [
      { id: 1, imageUrl: "/images/brands/cars/suv/raize/inside.png" },
      { id: 2, imageUrl: "/images/brands/cars/suv/raize/door.png" },
      { id: 3, imageUrl: "/images/brands/cars/suv/raize/light.png" },
      { id: 4, imageUrl: "/images/brands/cars/suv/raize/weel.png" },
    ],
    pricePerDay: 60,
    pricePerWeek: 350,
    pricePerMonth: 700,
    status: CarStatus.Unavailable,
    rentCount: 7
  },
  {
    id: 2,
    name: "Land Criusor",
    category: {
      id: 1,
      name: "SUV",
    },
    price: 0,
    imageUrl: "/images/brands/cars/suv/land.png",
    description: "",
    galleries: [
      { id: 1, imageUrl: "/images/brands/cars/suv/land/inside.png" },
      { id: 2, imageUrl: "/images/brands/cars/suv/land/door.png" },
      { id: 3, imageUrl: "/images/brands/cars/suv/land/light.png" },
      { id: 4, imageUrl: "/images/brands/cars/suv/land/weel.png" },
    ],
    pricePerDay: 120,
    pricePerWeek: 750,
    pricePerMonth: 1200,
    discountAmount: 5,
    discountType: DiscountType.Percentage,
    status: CarStatus.Available,
    rentCount: 5
  },
  {
    id: 3,
    name: "Corolla Cross",
    category: {
      id: 1,
      name: "SUV",
    },
    price: 0,
    imageUrl: "/images/brands/cars/suv/corolla-cross.png",
    description: "",
    galleries: [],
    pricePerDay: 0,
    pricePerWeek: 0,
    pricePerMonth: 0,
    discountAmount: 5,
    discountType: DiscountType.Percentage,
    status: CarStatus.Unavailable,
    rentCount: 5
  },
  {
    id: 4,
    name: "Camry",
    category: {
      id: 1,
      name: "Sedan",
    },
    price: 0,
    imageUrl: "/images/brands/cars/sedan/camry.png",
    description: "",
    galleries: [],
    pricePerDay: 0,
    pricePerWeek: 0,
    pricePerMonth: 0,
    status: CarStatus.Unavailable,
    rentCount: 5
  },
  {
    id: 5,
    name: "VIOS",
    category: {
      id: 2,
      name: "Sedan",
    },
    price: 9,
    imageUrl: "/images/brands/cars/sedan/vios.png",
    description: "",
    galleries: [],
    pricePerDay: 0,
    pricePerWeek: 0,
    pricePerMonth: 0,
    status: CarStatus.Available,
    rentCount: 5
  },
  {
    id: 6,
    name: "Corolla Altis",
    category: {
      id: 2,
      name: "Sedan",
    },
    price: 11,
    imageUrl: "/images/brands/cars/sedan/corolla-altis.png",
    description: "",
    galleries: [],
    pricePerDay: 0,
    pricePerWeek: 0,
    pricePerMonth: 0,
    status: CarStatus.Available,
    rentCount: 5
  },
  {
    id: 7,
    name: "Pick Up",
    category: {
      id: 5,
      name: "Pick Up",
    },
    price: 0,
    imageUrl: "/images/brands/cars/pickup/hiluxrevo.png",
    description: "",
    galleries: [],
    pricePerDay: 0,
    pricePerWeek: 0,
    pricePerMonth: 0,
    status: CarStatus.Available,
    rentCount: 5
  },
];
