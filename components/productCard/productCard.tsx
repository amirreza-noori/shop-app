import { Ionicons } from "@expo/vector-icons";
import { t } from "i18next";
import { Image, StyleSheet, View } from "react-native";
import { Card } from "../card";
import { Text } from "../text";
import { ProductCardProps } from "./types";

const ProductCard = ({ product, style }: ProductCardProps) => {
	const rate = Math.round(product.rating.rate / 2) / 10;
	const price = product.default_variant.price?.selling_price;

	return (
		<Card style={StyleSheet.compose(styles.container, style)}>
			<Image src={product.images.main.url[0]} style={styles.image} height={70} />
			<Text style={styles.title}>{product.title_fa}</Text>
			<View style={styles.priceAndRate}>
				<Text style={styles.price} color="primary">
					{price ?? t("outOfStock")}
				</Text>
				{!!rate && (
					<View style={styles.rate}>
						<Text>{rate}</Text>
						<Ionicons name="star" color="gold" />
					</View>
				)}
			</View>
		</Card>
	);
};

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
});

export default ProductCard;
