import { Car } from "@/types/car.type";

export const diffDays = (start: string, end: string): number => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffTime = endDate.getTime() - startDate.getTime();
  return Math.ceil(diffTime / (1000 * 3600 * 24)) + 1;
};

export const calculatePrice = (
  car: Car,
  start: string,
  end: string
): { price: number; error: string } => {
  if (!start || !end) return { price: 0, error: "" };
  const days = diffDays(start, end);
  if (days < (car.minRentalDays ?? 1)) {
    return {
      price: 0,
      error: `Minimum rental period is ${car.minRentalDays} days.`,
    };
  }
  if (days >= 30) {
    const months = Math.floor(days / 30);
    const leftoverDays = days % 30;
    return {
      price:
        months * (car.pricePerMonth ?? 0) +
        leftoverDays * (car.pricePerDay ?? 0),
      error: "",
    };
  } else if (days >= 7) {
    const weeks = Math.floor(days / 7);
    const leftoverDays = days % 7;
    return {
      price:
        weeks * (car.pricePerWeek ?? 0) + leftoverDays * (car.pricePerDay ?? 0),
      error: "",
    };
  } else {
    return { price: days * (car.pricePerDay ?? 0), error: "" };
  }
}
