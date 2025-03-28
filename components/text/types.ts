import { TextProps as RNTextProps } from "react-native";
import { textSizes } from "./constants/sizes";
import { textColors } from "./constants/colors";

export type TextProps = RNTextProps & {
	size?: keyof typeof textSizes;
	color?: keyof typeof textColors;
	bold?: boolean;
};
