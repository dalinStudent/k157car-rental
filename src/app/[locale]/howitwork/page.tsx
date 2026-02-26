'use client'

import CardSection from "@/app/components/howitwork/CardSection";
import { StepItems } from "@/configs/how-it-work";
import { useLocale, useTranslations } from "next-intl";

const HowItWorks = () => {
  const locale = useLocale() as "en" | "km" | "zh";
  const t = useTranslations('how_it_works')
  const items = StepItems[locale]

  return (
    <section className="relative sm:py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-orange-500 text-3xl font-bold text-center mb-12">{t('title')}</h2>
        <div className="relative flex flex-col items-center">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {items.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={step.id}
                className="mb-16 flex w-full justify-between items-start relative"
              >
                {/* Left column */}
                <div className="w-1/2 flex justify-end pr-8">
                  {isLeft && (
                    <div className="flex flex-col items-end w-[500px]">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white font-bold mb-4">
                        {step.id}
                      </div>
                      <h3 className="font-semibold text-lg text-orange-400">{step.title}</h3>
                      <p className="mt-2">{step.description}</p>
                    </div>
                  )}

                  {!isLeft && (
                    <div className="flex items-center justify-start">
                      <div className="text-4xl"><step.icon /></div>
                    </div>
                  )}
                </div>

                {/* Vertical line */}
                <div className="w-0.5 bg-blue-200 relative">
                  <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>
                </div>

                {/* Right column */}
                <div className="w-1/2 flex justify-start pl-8">
                  {!isLeft && (
                    <div className="flex flex-col items-start w-[500px]">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white font-bold mb-4">
                        {step.id}
                      </div>
                      <h3 className="font-semibold text-lg text-orange-400">{step.title}</h3>
                      <p className="mt-2">{step.description}</p>
                    </div>
                  )}

                  {isLeft && (
                    <div className="flex items-center justify-end">
                      <div className="text-4xl"><step.icon /></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <CardSection />
      </div>
    </section>
  );
};

export default HowItWorks;
