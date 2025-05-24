"use client";

import { Location } from "../Location";
import { useState } from "react";
import { DateRangePicker } from "../DatePicker";
import { Dayjs } from "dayjs";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";
import React from "react";
import { CarHoverRotate } from "./ImageRotate";
import { SortPrice } from "../SortPrice";
import { Condition } from "./Condition";

export const Filter = () => {
  const t = useTranslations("landing");
  const [location, setLocation] = useState<string>("");
  const [priceLabel, setPriceLabel] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [range, setRange] = useState<[Dayjs, Dayjs] | null>(null);
  const handleSelectChange = (value: string) => {
    setLocation(value);
  };

  return (
      <><div className="filter">
      <div className="m-auto w-[800px] flex justify-between bg-white rounded-full p-4">
        <div className="flex items-center gap-1 min-w-[120px]">
          <Location value={location} onChange={handleSelectChange} />
        </div>

        <div className="flex items-center gap-1 min-w-[120px]">
          <SortPrice value={priceLabel} onChange={setPriceLabel} />
        </div>

        <div className="flex items-center gap-1 min-w-[120px]">
          <Condition value={condition} onChange={setCondition} />
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
    
    <CarHoverRotate />
    </>
  );
};
