import { ActivityIndicator, StyleSheet, View } from "react-native";
import { LoadingProps } from "./types";

const Loading = ({ style, ...props }: LoadingProps) => {
	return (
		<View style={StyleSheet.compose(styles.container, style)} {...props}>
			<ActivityIndicator size="large" />
		</View>
	);
};

export const styles = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Loading;
