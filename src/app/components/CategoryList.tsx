import { CarCategory } from "@/types/car.type";
import { useState } from "react";

type Props = {
	categories: CarCategory[];
	onItemClick: (item: CarCategory | null) => void;
};

export const CategoryList = (props: Props) => {
    const [selectedCategory, setSelectedCategory] = useState<CarCategory | null>(null);

    return (
        <div className="flex flex-wrap gap2">
            <button className="px-4 py-2 rounded-full cursor-pointer
						hover:bg-[#A81C24] hover:text-white transition-all duration-200"
                        onClick={() => {
                            setSelectedCategory(null);
                            props.onItemClick(null);
                        }}
                        >
				<span className="text-sm font-normal">
					All
				</span>
            </button>
            {
                props.categories.map(category => (
                    <button
						key={category.id}
						type="button"
						className={`
								px-4 py-2 rounded-full cursor-pointer
								hover:bg-[#A81C24] hover:text-white transition-all duration-200
								${selectedCategory?.id === category.id ? 'bg-[#CD202A] text-white' : 'bg-[#F5F5F5] text-[#0D1117]'}
							`}
						onClick={() => {
							setSelectedCategory(category);
							props.onItemClick(category);
						}}
					>
						<span className="text-sm font-normal">
							{category.name}
						</span>
					</button>
                ))
            }
        </div>
    )
}