import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useNavigationState, useRoute } from "@react-navigation/native";
import { ComponentProps, ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { routes } from "@/routes";
import { Text } from "@/components";
import { textColors } from "@/components/text/constants/colors";

type Props = {
	title: string;
	icon: ComponentProps<typeof Ionicons>["name"];
	route: string;
};

const NavButton = ({ title, icon, route }: Props) => {
	const navigation = useNavigation<any>();
	const routeKey = useNavigationState((state) => state?.routes?.slice(-1)[0]?.name ?? routes.aboutUs);
	const isActive = routeKey === route;

	return (
		<TouchableOpacity style={styles.container} onPress={() => navigation.navigate(route)}>
			<Ionicons style={{ color: isActive ? textColors.primary : textColors.text }} name={icon} size={28} />
			<Text color={isActive ? "primary" : "text"} style={styles.text}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		flexGrow: 1,
		flexShrink: 0,
	},
	text: {
		width: "100%",
		textAlign: "center",
	},
});

export default NavButton;
