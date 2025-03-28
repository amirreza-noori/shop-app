import { Text as RNText, StyleSheet, TextStyle } from "react-native";
import { textColors } from "./constants/colors";
import { textSizes } from "./constants/sizes";
import { TextProps } from "./types";

const Text = ({ style, size = "sm", color = "text", bold, ...props }: TextProps) => {
	const defaultStyle: TextStyle = {
		fontSize: textSizes[size],
		color: textColors[color],
		fontFamily: bold ? "Vazir-Bold" : "Vazir",
	};
	return <RNText style={StyleSheet.compose(defaultStyle, style)} {...props} />;
};

export default Text;
