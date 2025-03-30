import { Product } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { t } from "i18next";
import { Alert } from "react-native";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CartStore = {
	items: Product[];
	add: (product: Product) => void;
	remove: (productId: Product["id"]) => void;
};

export const useCart = create<CartStore>()(
	persist(
		(set) => ({
			items: [],
			add: (product) =>
				set(({ items }) => {
					try {
						const isAdded = items.findIndex((item) => item.id === product.id) >= 0;
						return isAdded ? { items } : { items: [...items, product] };
					} finally {
						Alert.alert(t("productAddedToCart"));
					}
				}),
			remove: (id) =>
				set(({ items }) => {
					try {
						return { items: items.filter((item) => item.id !== id) };
					} finally {
						Alert.alert(t("productRemovedFromCart"));
					}
				}),
		}),
		{
			name: "cart-storage",
			storage: createJSONStorage(() => AsyncStorage),
		}
	)
);
