import dynamic from "next/dynamic";
import locationData from "@/public/lotties/location.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieLocation = () => {
  return (
    <div className="w-24">
      <Lottie animationData={locationData} loop autoplay />
    </div>
  );
};

export default LottieLocation;
