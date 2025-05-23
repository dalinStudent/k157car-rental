"use client";

import { Location } from "../Location";
import { useState } from "react";
import { DateRangePicker } from "../DatePicker";
import { Dayjs } from "dayjs";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";
import React from "react";

export const Filter = () => {
  const t = useTranslations("landing");
  const [location, setLocation] = useState<string>("");
  const [range, setRange] = useState<[Dayjs, Dayjs] | null>(null);
  const handleSelectChange = (value: string) => {
    setLocation(value);
  };

  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center text-white mt-[50px] mb-6">
        {t.rich("main_title", {
          highlight: (chunks) => (
            <span className="text-orange-500">{chunks}</span>
          ),
        })}
      </h1>
      <div className="filter">
        <div className="m-auto w-[700px] flex justify-between bg-white rounded-full p-4">
          <div className="flex items-center gap-1 min-w-[120px]">
            <Location value={location} onChange={handleSelectChange} />
          </div>

          <div className="flex items-center gap-2">
            <DateRangePicker value={range} onChange={setRange} />
          </div>

          <div className="flex items-center gap-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
              {t('button.explore')}
              <ArrowRightOutlined />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
