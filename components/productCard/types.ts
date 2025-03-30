import { Product } from "@/types";
import { ViewStyle } from "react-native";
import { stylesList } from "./variants";
import { ReactNode } from "react";

export type ProductCardProps = {
	product: Product;
	variant?: keyof typeof stylesList;
	style?: ViewStyle;
	actions?: ReactNode;
};
