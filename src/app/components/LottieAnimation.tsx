import dynamic from "next/dynamic";

import animationData from "@/public/data.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieAnimation = () => {
  return (
    <div className="w-96">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
};

export default LottieAnimation;
