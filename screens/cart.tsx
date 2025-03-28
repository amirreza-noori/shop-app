import { Text } from "@/components";
import { StyleSheet, View } from "react-native";

export default function CartScreen() {
	return (
		<View style={styles.container}>
			<Text>صفحه سبد خرید</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
