"use client";

import { useState } from "react";
import { ListType } from "@/common/enums/list-type.enum";
import Cars from "./Cars";

export default function CarsWrapper() {
  const [listType, setListType] = useState<ListType>(ListType.List);

  return (
    <div className="bg-white/20 mt-5">
      <Cars listType={listType} />
    </div>
  );
}
