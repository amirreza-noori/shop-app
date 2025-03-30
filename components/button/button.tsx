import { StyleSheet, Button as RNButtonProps, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import { ButtonProps } from "./types";
import { Text } from "../text";

const Button = ({ title, disabled, ...props }: ButtonProps) => {
	return (
		<TouchableOpacity
			disabled={disabled}
			{...props}
			style={[styles.container, disabled ? styles.disabledContainer : null]}
		>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		backgroundColor: "blue",
		borderRadius: 5,
		paddingHorizontal: 15,
		paddingVertical: 10,
		boxShadow: "0 0 5px rgba(0,0,0,0.1)",
	},
	disabledContainer: {
		opacity: 0.5,
	},
	text: {
		color: "white",
	},
});

export default Button;
