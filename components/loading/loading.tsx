import { StyleSheet, View } from "react-native";
import { LoadingProps } from "./types";
import { Text } from "../text";

const Loading = ({ style, ...props }: LoadingProps) => {
	return (
		<View style={StyleSheet.compose(styles.container, style)} {...props}>
			<Text>در حال فراخوانی</Text>
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
