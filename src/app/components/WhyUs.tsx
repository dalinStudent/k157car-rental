import Image from "next/image";

export const WhyUs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-14 px-4">
      <div className="max-w-[450px] text-center mb-10">
        <h1 className="text-2xl font-semibold text-black mb-4">Why Choose Us</h1>
        <p className="text-gray-700">
          We offer hassle-free booking, 24/7 customer support, and well-maintained vehicles
          for a smooth and enjoyable rental experience.
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-6">
        <div className="flex flex-col max-w-[350px]">
          <Image src='/svg/wide-fleet.svg' alt="wide-fleet" width={24} height={24} />
          <p className="font-semibold text-black mb-1">Wide Fleet</p>
          <p className="text-gray-600 text-sm">Compact to luxury, we have it all.</p>
          <Image src='/svg/call.svg' alt="wide-fleet" width={24} height={24} />
          <p className="font-semibold text-black mb-1">24/7 Support</p>
          <p className="text-gray-600 text-sm">We’re here any time you need us.</p>
        </div>
        <div className="flex flex-col items-center text-center max-w-[500px]">
    <Image alt="car" src='/images/pruis10.jpg' width={100} height={100} ></Image>
        </div>
        <div className="flex flex-col items-center text-center max-w-[350px]">
                      <Image src='/svg/call.svg' alt="wide-fleet" width={24} height={24} />
          <p className="font-semibold text-black mb-1">24/7 Support</p>
          <p className="text-gray-600 text-sm">We’re here any time you need us.</p>
          <Image src='/svg/setting.svg' alt="wide-fleet" width={24} height={24} />
          <p className="font-semibold text-black mb-1">Reliable Service</p>
          <p className="text-gray-600 text-sm">Well-maintained and safe vehicles.</p>
        </div>
      </div>
    </div>
  );
};
