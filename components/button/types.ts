import { ButtonProps as RNButtonProps } from "react-native";
import { buttonColors } from "./constants/colors";

export type ButtonProps = RNButtonProps & {
	color?: keyof typeof buttonColors;
};
