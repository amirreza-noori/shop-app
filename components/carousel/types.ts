import { ListRenderItem, ViewStyle } from "react-native";

export type CarouselProps<T> = {
	data: T[];
	renderItem: ListRenderItem<T>;
	style?: ViewStyle;
};
