import dynamic from "next/dynamic";
import bookingData from "@/public/lotties/booking.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieBooking = () => {
  return (
    <div className="w-38">
      <Lottie animationData={bookingData} loop autoplay />
    </div>
  );
};

export default LottieBooking;
