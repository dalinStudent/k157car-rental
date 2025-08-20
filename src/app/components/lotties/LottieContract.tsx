import dynamic from "next/dynamic";
import contractData from "@/public/lotties/aggrement.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieAgreement = () => {
  return (
    <div className="w-32">
      <Lottie animationData={contractData} loop autoplay />
    </div>
  );
};

export default LottieAgreement;
