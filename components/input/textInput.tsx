import { StyleSheet, TextInput as RNTextInput, View } from "react-native";
import { TextInputProps } from "./types";
import { Text } from "../text";

const TextInput = ({ label, style, ...props }: TextInputProps) => {
	return (
		<View style={StyleSheet.compose(styles.container, style)}>
			{label && <Text style={styles.label}>{label}</Text>}
			<RNTextInput style={styles.input} {...props} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		backgroundColor: "white",
		borderRadius: 5,
		padding: 0,
		boxShadow: "0 0 5px rgba(0,0,255,0.3)",
		marginVertical: 10,
	},
	input: {
		paddingHorizontal: 10,
	},
	label: {
		position: "absolute",
		top: -13,
		right: 10,
	},
});

export default TextInput;
