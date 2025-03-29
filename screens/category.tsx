import { EmptyView, ErrorView, Loading, ProductCard, Text } from "@/components";
import { getCategory } from "@/services";
import { Category } from "@/types";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

export default function CategoryScreen() {
	const route = useRoute();
	const category = route.params as Category;
	const { data, isLoading, isError } = useQuery({
		queryKey: ["category", category.code],
		queryFn: () => getCategory(category.code),
	});
	const products = data?.products;

	if (isLoading) return <Loading />;
	if (isError) return <ErrorView />;
	return (
		<View style={styles.container}>
			{products?.length ? (
				<ScrollView contentContainerStyle={styles.productsContainer}>
					{products.map((product) => (
						<TouchableOpacity key={product.id} style={styles.product}>
							<ProductCard product={product} />
						</TouchableOpacity>
					))}
				</ScrollView>
			) : (
				<EmptyView />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	productsContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		padding: 10,
		gap: 10,
	},
	product: {
		width: 140,
		flexGrow: 1,
	},
});
