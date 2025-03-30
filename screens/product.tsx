import { Button, Carousel, ErrorView, Loading, Text } from "@/components";
import { useCart } from "@/hooks";
import { getProduct } from "@/services/product";
import { Product } from "@/types";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { t } from "i18next";

import { Image, ScrollView, StyleSheet, View } from "react-native";

export default function ProductScreen() {
	const route = useRoute();
	const cart = useCart();

	const product = route.params as Product;
	const { data, isLoading, isError } = useQuery({
		queryKey: ["Product", product.id],
		queryFn: () => getProduct(product.id),
	});
	if (isLoading) return <Loading />;
	if (isError || !data) return <ErrorView />;

	const description = data.expert_reviews?.description;
	const images = data.images.list;
	const specifications = data.specifications;
	const price = data.default_variant.price?.selling_price;

	return (
		<ScrollView style={styles.container}>
			<Text size="xl" style={styles.title}>
				{product.title_fa}
			</Text>
			{!!images && (
				<Carousel
					data={images}
					renderItem={({ item }) => <Image src={item.url[0]} style={styles.image} />}
					style={{ height: 300 }}
				/>
			)}

			<View style={styles.cta}>
				<Text size="md">{price ? `${price.toLocaleString()} ${t("toman")}` : t("outOfStock")}</Text>
				<Button disabled={!price} title={t("addToCart")} onPress={() => cart.add(data)} />
			</View>

			{!!description && (
				<View>
					<Text size="lg" bold style={styles.subTitle}>
						{t("description")}
					</Text>
					<Text style={styles.description}>{description}</Text>
				</View>
			)}

			{!!specifications &&
				specifications.map((specification) => (
					<View key={specification.title}>
						<Text size="lg" bold style={styles.subTitle}>
							{specification.title}
						</Text>
						{specification.attributes.map((attribute) => (
							<View key={attribute.title} style={styles.attribute}>
								<Text style={styles.attributeTitle}>{attribute.title}</Text>
								<Text style={styles.attributeValue}>{attribute.values.join("\n")}</Text>
							</View>
						))}
					</View>
				))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		padding: 10,
	},
	subTitle: {
		paddingTop: 10,
		paddingHorizontal: 10,
	},
	image: {
		width: "100%",
		height: "100%",
		objectFit: "contain",
	},
	cta: {
		flexDirection: "row",
		padding: 10,
		alignItems: "center",
		justifyContent: "space-between",
	},
	description: {
		padding: 10,
	},

	attribute: {
		flexDirection: "row",
		paddingHorizontal: 10,
		gap: 3,
		marginBottom: 3,
		margin: 0,
	},
	attributeTitle: {
		width: "30%",
		backgroundColor: "#ddd",
		padding: 5,
	},
	attributeValue: {
		backgroundColor: "#eaeaea",
		padding: 5,
		width: "60%",
		flexGrow: 1,
	},
});
