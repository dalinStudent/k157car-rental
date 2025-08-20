import dynamic from "next/dynamic";
import stationData from "@/public/lotties/car-station.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieStation = () => {
  return (
    <div className="w-96">
      <Lottie animationData={stationData} loop autoplay />
    </div>
  );
};

export default LottieStation;
