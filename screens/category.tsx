import { EmptyView, Loading, Text } from "@/components";
import { getCategory } from "@/services";
import { Category } from "@/services/categoryType";
import { useRoute } from "@react-navigation/native";
import { useQueries, useQuery } from "@tanstack/react-query";
import { ScrollView, StyleSheet, View } from "react-native";

export default function CategoryScreen() {
	const route = useRoute();
	const category = route.params as Category;
	const { data, isLoading } = useQuery({
		queryKey: ["category", category.code],
		queryFn: () => getCategory(category.code),
	});
	const products = data?.products;

	if (isLoading) return <Loading />;
	return (
		<View style={styles.container}>
			{products?.length ? (
				<ScrollView>
					{products.map((product) => (
						<Text key={product.id}>{product.title_fa}</Text>
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
		justifyContent: "center",
		alignItems: "center",
	},
});
