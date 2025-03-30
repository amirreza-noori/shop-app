import { Button, EmptyView, ProductCard } from "@/components";
import { useCart } from "@/hooks";
import { ScrollView, StyleSheet } from "react-native";

export default function CartScreen() {
	const cart = useCart();

	return (
		<ScrollView contentContainerStyle={styles.container}>
			{!!cart.items.length ? (
				cart.items.map((item) => (
					<ProductCard
						key={item.id}
						product={item}
						variant="compact"
						actions={<Button title="حذف" onPress={() => cart.remove(item.id)} />}
					/>
				))
			) : (
				<EmptyView />
			)}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		gap: 10,
	},
});
