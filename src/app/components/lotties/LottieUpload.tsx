import dynamic from "next/dynamic";
import uploadData from "@/public/lotties/upload.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieUpload = () => {
  return (
    <div className="w-64">
      <Lottie animationData={uploadData} loop autoplay />
    </div>
  );
};

export default LottieUpload;
