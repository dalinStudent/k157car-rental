import { BookingData, BookingInfo } from "@/types/car.type";
import { useState } from "react";

const BookingPage = ({ car }: { car: BookingInfo }) => {
  const [booking, setBooking] = useState<BookingData>({
    startDate: "",
    endDate: "",
  });
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const diffDays = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = endDate.getTime() - startDate.getTime();
    return Math.ceil(diffTime / (1000 * 3600 * 24)) + 1;
  };

  const calculatePrice = (start: string, end: string) => {
    if (!start || !end) return 0;
    const days = diffDays(start, end);
    if (days < car.minRentalDays) {
      setError(`Minimum rental period is ${car.minRentalDays} days.`);
      return 0;
    }
    setError("");
    if (days >= 30) {
      // monthly price
      const months = Math.floor(days / 30);
      const leftoverDays = days % 30;
      return months * car.pricePerMonth + leftoverDays * car.pricePerDay;
    } else if (days >= 7) {
      // weekly price
      const weeks = Math.floor(days / 7);
      const leftoverDays = days % 7;
      return weeks * car.pricePerWeek + leftoverDays * car.pricePerDay;
    } else {
      return days * car.pricePerDay;
    }
  };

  const onDateChange = (field: "startDate" | "endDate", value: string) => {
    const newBooking = { ...booking, [field]: value };
    setBooking(newBooking);
    const price = calculatePrice(newBooking.startDate, newBooking.endDate);
    setTotalPrice(price);
  };
  
  const onBook = () => {
    if (!booking.startDate || !booking.endDate) {
      setError("Please select start and end date.");
      return;
    }
    if (totalPrice <= 0) return;
    alert(
      `Booked from ${booking.startDate} to ${
        booking.endDate
      } for $${totalPrice.toFixed(2)}`
    );
    // Here add to cart or API call logic
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Car Info */}
      <section>
        <h1 className="text-3xl font-bold">
          {car.brand} {car.model}
        </h1>
        <p className="text-gray-600">
          {car.type} - {car.year} - {car.color} - {car.transmission}
        </p>
        <p className="mt-2">{car.description}</p>
      </section>

      {/* Price Section */}
      <section className="flex space-x-6 text-lg font-semibold">
        <div>Day: ${car.pricePerDay}</div>
        <div>Week: ${car.pricePerWeek}</div>
        <div>Month: ${car.pricePerMonth}</div>
      </section>

      {/* Images */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {car.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${car.brand} ${car.model} image ${i + 1}`}
            className="rounded-lg object-cover w-full h-48"
          />
        ))}
      </section>

      {/* Booking Info & Form */}
      <section className="space-y-4 border p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Book this car</h2>
        <p>
          Available from {car.availabilityStart} to {car.availabilityEnd}
        </p>
        <p>Minimum rental period: {car.minRentalDays} day(s)</p>

        <div className="flex space-x-4">
          <div>
            <label className="block mb-1 font-medium">Start Date</label>
            <input
              type="date"
              min={car.availabilityStart}
              max={car.availabilityEnd}
              value={booking.startDate}
              onChange={(e) => onDateChange("startDate", e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">End Date</label>
            <input
              type="date"
              min={booking.startDate || car.availabilityStart}
              max={car.availabilityEnd}
              value={booking.endDate}
              onChange={(e) => onDateChange("endDate", e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <div className="text-lg font-bold">
          Total Price: ${totalPrice.toFixed(2)}
        </div>

        <button
          onClick={onBook}
          disabled={!!error || totalPrice <= 0}
          className={`mt-4 px-6 py-3 rounded bg-orange-500 text-white font-semibold hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          Book Now1
        </button>
      </section>
    </div>
  );
};

export default BookingPage;
