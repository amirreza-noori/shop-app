import { EmptyView, Loading, Text } from "@/components";
import { routes } from "@/routes";
import { getCategoryTree } from "@/services";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ScrollView, SectionList, StyleSheet, TouchableOpacity, View } from "react-native";

export default function CategoriesScreen() {
	const navigation = useNavigation<any>();
	const [selectedIndex, setSelectedIndex] = useState(0);
	const { data, isLoading } = useQuery({ queryKey: ["categories"], queryFn: getCategoryTree });
	const mainCategory = data?.[selectedIndex];
	const sections = mainCategory?.children;

	if (isLoading) return <Loading />;
	return (
		<View style={styles.container}>
			<ScrollView horizontal={false} showsVerticalScrollIndicator style={styles.main}>
				{data?.map((category, index) => (
					<TouchableOpacity
						style={[styles.mainItem, selectedIndex === index ? { backgroundColor: "#eee" } : undefined]}
						onPress={() => setSelectedIndex(index)}
						key={category.id}
					>
						<Text style={styles.mainItemText}>{category.title_fa}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>

			{sections?.length ? (
				<SectionList
					windowSize={5}
					style={styles.sub}
					sections={sections.map((section) => ({ ...section, data: section.children }))}
					renderItem={({ item, section }) => (
						<TouchableOpacity
							style={styles.subSectionItem}
							onPress={() => navigation.navigate(routes.category, item)}
						>
							<Text>{item.title_fa}</Text>
						</TouchableOpacity>
					)}
					renderSectionHeader={({ section }) => (
						<TouchableOpacity
							style={styles.subSectionTitle}
							onPress={() => navigation.navigate(routes.category, section)}
						>
							<Text bold size="lg">
								{section.title_fa}
							</Text>
						</TouchableOpacity>
					)}
					stickySectionHeadersEnabled
				/>
			) : (
				<EmptyView style={styles.sub} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
	},
	main: {
		width: 70,
		flexGrow: 0,
		flexShrink: 0,
		backgroundColor: "#aaa",
	},
	mainItem: {
		alignItems: "center",
		justifyContent: "center",
		minHeight: 40,
		borderTopEndRadius: 5,
		borderBottomEndRadius: 5,
		backgroundColor: "#bbb",
		marginVertical: 3,
		marginStart: 6,
		padding: 3,
	},
	mainItemText: {
		textAlign: "center",
	},
	sub: {
		flexGrow: 1,
		backgroundColor: "#eee",
		paddingHorizontal: 10,
	},
	subSectionTitle: {
		backgroundColor: "#eee",
		paddingVertical: 7,
	},
	subSectionItem: {
		paddingVertical: 2,
		paddingHorizontal: 10,
	},
});
