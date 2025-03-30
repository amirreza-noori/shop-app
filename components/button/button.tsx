import {
	StyleSheet,
	Button as RNButtonProps,
	TouchableNativeFeedback,
	TouchableOpacity,
	ViewStyle,
} from "react-native";
import { ButtonProps } from "./types";
import { Text } from "../text";
import { buttonColors } from "./constants/colors";

const Button = ({ title, disabled, color = "primary", ...props }: ButtonProps) => {
	const defaultStyle: ViewStyle = {
		backgroundColor: buttonColors[color],
		opacity: disabled ? 0.4 : 1,
	};

	return (
		<TouchableOpacity disabled={disabled} {...props} style={[styles.container, defaultStyle]}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		borderRadius: 5,
		paddingHorizontal: 15,
		paddingVertical: 10,
		boxShadow: "0 0 5px rgba(0,0,0,0.1)",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "white",
	},
});

export default Button;
