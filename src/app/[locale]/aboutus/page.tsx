import { CardInfo } from "@/app/components/CardItem";
import ImageTitle from "@/app/components/ImageTitle";
import { WhyUs } from "@/app/components/WhyUs";

const AboutUs = () => {
  return (
    <div className="">
      <ImageTitle />
      <WhyUs />
      <div className="z-0">
        {/* <CardInfo /> */}
      </div>
    </div>
  );
};

export default AboutUs;
