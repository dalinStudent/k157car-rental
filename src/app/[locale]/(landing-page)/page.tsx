import { Brands } from "@/app/components/landing/Brand";
import { Filter } from "@/app/components/landing/Filter";
import { IntroductionBlock } from "@/app/components/landing/IntroductionBlock";
import CarsWrapper from "@/app/components/cars/CarWrapper";

export default function HomePage() {
  return (
    <>
      <div className="mx-auto max-w-[1194px] px-4">
        <IntroductionBlock />
        <Filter />
        <Brands />
      </div>
      <div className="mx-auto max-w-[1700px] px-4">
        <CarsWrapper />
      </div>
    </>
  );
}
