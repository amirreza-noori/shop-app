import { Text } from "@/components";
import { StyleSheet, View } from "react-native";

export default function ProfileScreen() {
	return (
		<View style={styles.container}>
			<Text>پروفایل کاربر</Text>
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
