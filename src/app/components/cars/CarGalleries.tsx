import { CarGallery } from "@/types/car.type";
import Image from 'next/image';

type Props = {
	galleries: CarGallery[];
	selectedImage: string | null;
	onSelectImage: (image: string) => void;
};

export const CarGalleries = (props: Props) => {
    return (
		<div className="w-full flex justify-center gap-3 overflow-auto">
			{
				props.galleries.map((gallery, index) => (
					<button
						key={gallery.id}
						type="button"
						className="relative w-[140px] aspect-video cursor-pointer"
						onClick={() => props.onSelectImage(gallery.imageUrl)}
					>
						<Image
							src={gallery.imageUrl}
							alt={`gallery-${index}`}
							fill
							className="object-cover rounded-2xl"
						/>

						{
							props.selectedImage === gallery.imageUrl
								? (
										<div className="absolute size-full p-2 top-0 left-0">
											<div className="size-full bg-transparent border-2 border-white rounded-lg">
											</div>
										</div>
									)
								: (
										<div className="absolute size-full top-0 left-0 bg-[#F5F5F5] opacity-30">
										</div>
									)
						}
					</button>
				))
			}
		</div>
	);
}