import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { ErrorViewProps } from "./types";

const ErrorView = ({ style, ...props }: ErrorViewProps) => {
	return (
		<View style={StyleSheet.compose(styles.container, style)} {...props}>
			<Ionicons name="cloud-offline-outline" size={128} color="gray" />
		</View>
	);
};

export const styles = StyleSheet.create({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default ErrorView;
