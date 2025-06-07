import { CarCategory } from "@/types/car.type";
import { BaseResponse, PaginatedResponse } from "@/types/response.type";

export const Categories: CarCategory[] = [
  { id: 1, name: "SUV" },
  { id: 2, name: "Sedan" },
  { id: 3, name: "Hatchback" },
  { id: 4, name: "Convertible" },
  { id: 5, name: "Pick Up" },
];

export const mockCategoryResponse: BaseResponse<PaginatedResponse<CarCategory>> = {
  status: {
    code: 200,
    message: null,
    errorCode: null,
    timestamp: Date.now(),
  },
  data: {
    content: Categories,
    totalPages: 1,
    payloadSize: Categories.length,
    hasNext: false,
    currentPage: 1,
    skippedRecords: 0,
    totalRecords: Categories.length,
  },
};
