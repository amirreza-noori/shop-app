import { Button, EmptyView, ProductCard } from "@/components";
import { useCart } from "@/hooks";
import { routes } from "@/routes";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

export default function CartScreen() {
	const navigation = useNavigation<any>();
	const cart = useCart();

	return (
		<ScrollView contentContainerStyle={styles.container}>
			{!!cart.items.length ? (
				cart.items.map((item) => (
					<TouchableOpacity onPress={() => navigation.navigate(routes.product, item)}>
						<ProductCard
							key={item.id}
							product={item}
							variant="compact"
							actions={<Button title="حذف" onPress={() => cart.remove(item.id)} />}
						/>
					</TouchableOpacity>
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
