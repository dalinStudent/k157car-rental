import { CarCategory } from "@/types/car.type";
import { useState } from "react";

type Props = {
  categories: CarCategory[];
  onItemClick: (item: CarCategory | null) => void;
};

export const CategoryList = (props: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<CarCategory | null>(
    null
  );

  return (
    <div className="flex overflow-x-auto gap-2 px-2 scrollbar-hidden sm:flex-wrap sm:overflow-visible sm:px-0">
      <button
        className={`button-category whitespace-nowraps ${
          selectedCategory === null ? "active" : ""
        }`}
        onClick={() => {
          setSelectedCategory(null);
          props.onItemClick(null);
        }}
      >
        <span className="text-sm font-normal text-black">All</span>
      </button>

      {props.categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={`button-category whitespace-nowrap ${
            selectedCategory?.id === category.id ? "active" : ""
          }`}
          onClick={() => {
            setSelectedCategory(category);
            props.onItemClick(category);
          }}
        >
          <span className="text-sm font-normal">{category.name}</span>
        </button>
      ))}
    </div>
  );
};
