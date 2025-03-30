import { Product } from "@/types";
import { t } from "i18next";
import { Alert } from "react-native";
import { create } from "zustand";

type CartStore = {
	items: Product[];
	add: (product: Product) => void;
	remove: (productId: Product["id"]) => void;
};

export const useCart = create<CartStore>()((set) => ({
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
}));
