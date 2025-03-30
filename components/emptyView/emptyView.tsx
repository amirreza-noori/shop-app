import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { EmptyViewProps } from "./types";
import { Text } from "../text";
import { t } from "i18next";

const EmptyView = ({ style, ...props }: EmptyViewProps) => {
	return (
		<View style={StyleSheet.compose(styles.container, style)} {...props}>
			<Ionicons name="dice-outline" size={128} color="gray" />
			<Text>{t("emptyMessage")}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},
});

export default EmptyView;
