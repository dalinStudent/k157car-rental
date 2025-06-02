import type { DiscountType } from '@/common/enums/discount-type.enum';

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
	price: number;
	discountAmount?: number;
	discountType?: DiscountType;
	imageUrl: string;
	description: string;
	galleries: CarGallery[];
};
