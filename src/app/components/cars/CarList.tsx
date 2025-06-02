import { ListType } from "@/common/enums/list-type.enum";
import { CategoryItems } from "@/configs/category-item";
import { Car, CarCategory } from "@/types/car.type";
import { PaginatedResponse } from "@/types/response.type";
import { useLocale } from "next-intl";
import { useState } from "react";
import { CategoryList } from "../CategoryList";
import { CarListItem } from "./CarListItem";
import { CarGridItem } from "./CarGridItem";
import { CarDetails } from "./CarDetail";

type Props = {
  listType: ListType;
};

export const CarList = (props: Props) => {
  const [categories, setCategories] =
    useState<PaginatedResponse<CarCategory>>();
  const [carList, setCarList] = useState<PaginatedResponse<Car>>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<Car | null>(null);

  const handleOnItemClick = (item: Car) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleOk = (_quantity: number) => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-col gap-4 px-4 py-10">
      {categories && (
        <CategoryList
          categories={categories.content}
          onItemClick={(item: CarCategory | null) => {}}
        />
      )}
      {carList &&
        (props.listType === ListType.List ? (
          <div className="gap-[30px] grid-cols-1">
            {carList.content.map((item) => (
              <CarListItem
                key={item.id}
                item={item}
                onClick={() => handleOnItemClick(item)}
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-[30px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {carList.content.map((item) => (
              <CarGridItem
                key={item.id}
                item={item}
                onClick={() => handleOnItemClick(item)}
              />
            ))}
            {isModalOpen && selectedItem && (
              <CarDetails
                item={selectedItem}
                isModalOpen={isModalOpen}
                onAddToCart={(quantity) => handleOk(quantity)}
                onClose={() => handleCancel()}
              />
            )}
          </div>
        ))}
    </div>
  );
};
