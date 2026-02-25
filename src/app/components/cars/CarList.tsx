"use client";

import { ListType } from "@/common/enums/list-type.enum";
import { Car, CarCategory } from "@/types/car.type";
import { useState } from "react";
import { CategoryList } from "../CategoryList";
import { CarListItem } from "./CarListItem";
import { CarGridItem } from "./CarGridItem";
import { CarDetails } from "./CarDetail";
import { Categories } from "@/data/Categories";
import { Cars } from "@/data/Cars";
import { fadeInUp } from "@/configs/animate-css-classes";
import LottieAnimation from "../LottieAnimation";

type Props = {
  listType: ListType;
};

export const CarList = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<CarCategory | null>(
    null
  );
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

  const categories = {
    content: Categories,
  };

  const cars = {
    content: Cars,
  };

  const filteredCars = selectedCategory
    ? cars.content.filter((car) => car.category.id === selectedCategory.id)
    : cars.content;

  const popularCars = filteredCars
    .filter((car) => car.rentCount && car.rentCount > 3)
    .sort((a, b) => b.rentCount - a.rentCount);

  return (
    <div className="flex flex-col gap-8 sm:gap-4 px-4 py-4">
      {categories && (
        <CategoryList
          categories={categories.content}
          onItemClick={(item) => {
            setSelectedCategory(item);
          }}
        />
      )}
      {popularCars &&
        (props.listType === ListType.List ? (
          popularCars.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center text-gray-500">
              <LottieAnimation />
              <h3 className="text-xl font-semibold">No cars found</h3>
              <p className="text-sm mt-2">
                Try selecting a different category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {popularCars.map((item, index) => {
                const delay = `${index * 0.15}s`;
                return (
                  <div
                    key={item.id}
                    className={`${fadeInUp}`}
                    style={{ animationDelay: delay }}
                  >
                    <CarListItem
                      key={item.id}
                      item={item}
                      onClick={() => handleOnItemClick(item)} locale={""} />
                  </div>
                );
              })}
            </div>
          )
        ) : (
          <div className="grid gap-[30px] grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {popularCars.map((item) => (
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
