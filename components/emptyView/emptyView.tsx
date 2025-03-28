import { StyleSheet, View } from "react-native";
import { EmptyViewProps } from "./types";
import { Text } from "../text";

const EmptyView = ({ style, ...props }: EmptyViewProps) => {
	return (
		<View style={StyleSheet.compose(styles.container, style)} {...props}>
			<Text style={styles.text}>اطلاعاتی برای نمایش وجود ندارد</Text>
		</View>
	);
};

export const styles = StyleSheet.create({
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		alignItems: "center",
	},
});

export default EmptyView;
