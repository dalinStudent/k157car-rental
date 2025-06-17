// "use client";

import { CarList } from "@/app/components/cars/CarList";
import { ListType } from "@/common/enums/list-type.enum";

type Props = {
  listType: ListType;
};

export const Cars = ({ listType }: Props) => {
  return (
    <div className="w-full py-10 px-4 relative">
      <CarList listType={listType} />
    </div>
  );
};
