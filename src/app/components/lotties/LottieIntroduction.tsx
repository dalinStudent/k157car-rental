import dynamic from "next/dynamic";
import introductionData from "@/public/lotties/introduction.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieIntroduction = () => {
  return (
    <div className="w-48">
      <Lottie animationData={introductionData} loop autoplay />
    </div>
  );
};

export default LottieIntroduction;
