import { direction } from "@/i18n";
import { routes } from "@/routes";
import { t } from "i18next";
import { StyleSheet, View } from "react-native";
import NavButton from "./components/navButton";
import { NavbarProps } from "./types";

const Navbar = ({ style, ...props }: NavbarProps) => {
	return (
		<View style={StyleSheet.compose(styles.container, style)} {...props}>
			<NavButton title={t("home")} icon="home" route={routes.home} />
			<NavButton title={t("profile")} icon="person" route={routes.profile} />
			<NavButton title={t("categories")} icon="grid" route={routes.categories} />
			<NavButton title={t("cart")} icon="cart" route={routes.cart} />
		</View>
	);
};

export const styles = StyleSheet.create({
	container: {
		display: "flex",
		direction,
		flexDirection: "row",
		backgroundColor: "white",
		borderRadius: 5,
		paddingHorizontal: 25,
		paddingVertical: 10,
		boxShadow: "0 0 5px rgba(0,0,0,0.1)",
		justifyContent: "space-between",
	},
});

export default Navbar;
