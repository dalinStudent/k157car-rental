import { CarStatus } from "@/common/enums/car-status.enum";
import type { DiscountType } from "@/common/enums/discount-type.enum";

export type CarCategory = {
  id: number;
  name: string;
};

export type CarGallery = {
  id: number;
  imageUrl: string;
};

export type Car = {
  id: number;
  name: string;
  category: CarCategory;
  rentCount: number;
  price: number;
  pricePerDay: number;
  pricePerWeek: number;
  pricePerMonth: number;
  discountAmount?: number;
  discountType?: DiscountType;
  imageUrl: string;
  description: string;
  galleries: CarGallery[];
  status: CarStatus;
  minRentalDays?: number;
  availabilityStart?: string;
  availabilityEnd?: string;
  images?: string[];
  brand?: string;
  model?: string;
  type?: string;
  year?: number;
  color?: string;
};

export type BookingInfo = {
  brand: string;
  model: string;
  type: string;
  year: number;
  color: string;
  transmission: string;
  description: string;
  images: string[];
  pricePerDay: number;
  pricePerWeek: number;
  pricePerMonth: number;
  availabilityStart: string;
  availabilityEnd: string;
  minRentalDays: number;
};

export type BookingData = {
  startDate: string;
  endDate: string;
};
