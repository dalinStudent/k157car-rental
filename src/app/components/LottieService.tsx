import dynamic from "next/dynamic";

import animationData from "@/public/service.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieService = () => {
  return (
    <div className="w-96">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};

export default LottieService;
