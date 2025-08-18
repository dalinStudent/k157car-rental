import { fadeIn } from "@/configs/animate-css-classes";
import Image from "next/image";
import CarViewer from "./CarViewer";

export const WhyUs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-14 px-4">
      <div className="max-w-[450px] text-center mb-10">
        <h1 className={`${fadeIn} font-bold text-[40px] text-orange-500`}>
          Why Choose Us
        </h1>
        <p className="text-gray-700">
          We offer hassle-free booking, 24/7 customer support, and
          well-maintained vehicles for a smooth and enjoyable rental experience.
        </p>
      </div>

<div className="flex flex-row flex-wrap justify-center gap-6">
  {/* Column 1 */}
  <div className="flex flex-col max-w-[400px] gap-6">
    {/* Feature 1 */}
    <div>
      <Image src="/svg/wide-fleet.svg" alt="wide-fleet" width={20} height={20} />
      <p className="font-semibold text-black mb-1">Wide Fleet</p>
      <p className="text-gray-600 text-sm">Compact to luxury, we have it all.</p>
    </div>

    {/* Feature 2 */}
    <div>
      <Image src="/svg/call.svg" alt="24/7 Support" width={20} height={20} />
      <p className="font-semibold text-black mb-1">24/7 Support</p>
      <p className="text-gray-600 text-sm">We’re here any time you need us.</p>
    </div>
  </div>

  {/* Car viewer in the middle */}
  <div className="flex flex-col items-center text-center">
    <CarViewer />
  </div>

  {/* Column 3 */}
  <div className="flex flex-col max-w-[350px] gap-6">
    {/* Feature 3 */}
    <div>
      <Image src="/svg/call.svg" alt="24/7 Support" width={20} height={20} />
      <p className="font-semibold text-black mb-1">24/7 Support</p>
      <p className="text-gray-600 text-sm">We’re here any time you need us.</p>
    </div>

    {/* Feature 4 */}
    <div>
      <Image src="/svg/setting.svg" alt="Reliable Service" width={20} height={20} />
      <p className="font-semibold text-black mb-1">Reliable Service</p>
      <p className="text-gray-600 text-sm">Well-maintained and safe vehicles.</p>
    </div>
  </div>
</div>

    </div>
  );
};
