import { Ionicons } from "@expo/vector-icons";
import { t } from "i18next";
import { Image, StyleSheet, View } from "react-native";
import { Card } from "../card";
import { Text } from "../text";
import { ProductCardProps } from "./types";
import { stylesList } from "./variants";

export const ProductCard = ({ product, variant = "default", style, actions }: ProductCardProps) => {
	const rate = Math.round(product.rating.rate / 2) / 10;
	const price = product.default_variant.price?.selling_price;
	const styles = stylesList[variant];

	return (
		<Card style={StyleSheet.compose(styles.container, style)}>
			<Image src={product.images.main.url[0]} style={styles.image} height={70} />
			<Text style={styles.title}>{product.title_fa}</Text>
			<View style={styles.priceAndRate}>
				<Text style={styles.price} color="primary">
					{price ? `${price.toLocaleString()} ${t("toman")}` : t("outOfStock")}
				</Text>
				{!!rate && (
					<View style={styles.rate}>
						<Text>{rate}</Text>
						<Ionicons name="star" color="gold" />
					</View>
				)}
			</View>
			{!!actions && <View style={styles.actions}>{actions}</View>}
		</Card>
	);
};

export default ProductCard;
