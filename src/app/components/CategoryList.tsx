import { CarCategory } from "@/types/car.type";
import { useState } from "react";

type Props = {
	categories: CarCategory[];
	onItemClick: (item: CarCategory | null) => void;
};

export const CategoryList = (props: Props) => {
    const [selectedCategory, setSelectedCategory] = useState<CarCategory | null>(null);

    return (
<div className="flex flex-wrap gap-2 mb-14">
  <button
    className={`button-category ${selectedCategory === null ? 'active' : ''}`}
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
      className={`button-category ${
        selectedCategory?.id === category.id ? 'active' : ''
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

    )
}