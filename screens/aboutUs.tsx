import { Text } from "@/components";
import { Ionicons } from "@expo/vector-icons";
import { t } from "i18next";
import { StyleSheet, View } from "react-native";

export default function AboutUsScreen() {
	return (
		<View style={styles.container}>
			<Ionicons name="dice-outline" size={128} />
			<Text>{t("aboutUsContent.app")}</Text>
			<Text>{t("aboutUsContent.me")}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		gap: 20,
	},
});
