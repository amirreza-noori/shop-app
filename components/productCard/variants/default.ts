import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
		gap: 10,
	},
	image: {
		width: "100%",
		aspectRatio: 1,
		objectFit: "contain",
	},
	title: {
		maxWidth: "100%",
	},
	priceAndRate: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: "auto",
	},
	price: {
		marginEnd: "auto",
	},
	rate: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
	},
	actions: {},
});
