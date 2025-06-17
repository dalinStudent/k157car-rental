"use client";

import { DatePicker } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
import { Dayjs } from "dayjs";
import { useTranslations } from "next-intl";

const { RangePicker } = DatePicker;

export const DateRangePicker = ({
  value,
  onChange,
}: {
  value: [Dayjs, Dayjs] | null;
  onChange: (value: [Dayjs, Dayjs] | null) => void;
}) => {
  const t = useTranslations("landing");
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <div ref={ref} className="relative inline-block">
      <CalendarOutlined onClick={() => setOpen(true)} className="icons" />
      <span className="hidden sm:inline ml-1 text-sm text-gray-600 whitespace-nowrap">
        {value
          ? `${value[0].format("MMM D, YYYY")} - ${value[1].format(
              "MMM D, YYYY"
            )}`
          : t("booked_date")}
      </span>
      <RangePicker
        open={open}
        onOpenChange={(status) => setOpen(status)}
        value={value}
        onChange={(dates) => {
          if (dates && dates[0] && dates[1]) {
            onChange(dates as [Dayjs, Dayjs]);
          } else {
            onChange(null);
          }
          setOpen(false);
        }}
        getPopupContainer={() => ref.current || document.body}
        className="hidden-datepicker"
      />
    </div>
  );
};
