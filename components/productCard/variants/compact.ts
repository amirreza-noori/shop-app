import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		maxWidth: "100%",
		height: 80,
		gap: 10,
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	image: {
		height: "100%",
		width: 60,
		objectFit: "contain",
	},
	title: {
		flexGrow: 1,
		flexShrink: 1,
	},
	priceAndRate: {
		position: "absolute",
		bottom: 10,
		right: 85,
		flexDirection: "row-reverse",
		gap: 20,
		alignItems: "center",
	},
	price: {
		marginEnd: "auto",
	},
	rate: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	actions: {
		height: "100%",
		flexShrink: 0,
		justifyContent: "center",
	},
});
