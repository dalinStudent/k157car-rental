"use client";

import { Modal, Button } from "antd";
import { useState, useEffect } from "react";
import { appMessage } from "@/utils/messageBox.util";
import { Car } from "@/types/car.type";
import { Cars } from "@/data/Cars";
import { DeleteOutlined } from "@ant-design/icons";
import { DiscountType } from "@/common/enums/discount-type.enum";
import { useLocale, useTranslations } from "next-intl";

interface FavoriteModalProps {
  open: boolean;
  onClose: () => void;
}

const getFavoriteCars = (): Car[] => {
  const stored = localStorage.getItem("add-to-favorites");
  if (!stored) return [];

  try {
    const ids: string[] = JSON.parse(stored);
    return Cars.filter((car) => ids.includes(car.id.toString()));
  } catch {
    return [];
  }
};

export const FavoriteModal = ({ open, onClose }: FavoriteModalProps) => {
  const [favorites, setFavorites] = useState<Car[]>([]);
  const t = useTranslations("landing");

  useEffect(() => {
    if (open) {
      const favoriteCars = getFavoriteCars();
      setFavorites(favoriteCars);
    }
  }, [open]);

  const removeFavorite = (id: number) => {
    const stored = JSON.parse(localStorage.getItem("add-to-favorites") || "[]");
    const updated = stored.filter((carId: string) => carId !== id.toString());
    localStorage.setItem("add-to-favorites", JSON.stringify(updated));
    setFavorites(favorites.filter((car) => car.id !== id));
    appMessage.info("Removed from favorites");
  };

  return (
    <Modal open={open} onCancel={onClose} title={t('my_favorites')} footer={null}>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((car) => (
          <div
            key={car.id}
            className="flex justify-between items-center bg-white shadow-md p-4 mt-4 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={car.imageUrl}
              alt={car.name}
              className="max-w-[200px] object-cover rounded-lg flex-shrink-0"
            />

            <div className="flex flex-col justify-between flex-1 ml-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-gray-800">
                  {car.name}
                </h4>

                <DeleteOutlined
                  style={{ color: "#EF4444" }}
                  className="cursor-pointer text-lg"
                  onClick={() => removeFavorite(car.id)}
                />
              </div>
              {car.discountAmount && (
                <p className="text-[12px] text-green-600 font-medium">
                  OFF: {car.discountAmount}
                  {car.discountType === DiscountType.Percentage ? "%" : "$"}
                </p>
              )}

              <div className="flex items-center gap-4 mt-2">
                <p className="text-sm text-gray-700">
                  M:{" "}
                  <span className="font-medium text-orange-500">
                    ${car.pricePerDay}
                  </span>
                </p>
                <p className="text-sm text-gray-700">
                  W:{" "}
                  <span className="font-medium text-orange-500">
                    ${car.pricePerWeek}
                  </span>
                </p>
                <p className="text-sm text-gray-700">
                  M:{" "}
                  <span className="font-medium text-orange-500">
                    ${car.pricePerMonth}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </Modal>
  );
};
