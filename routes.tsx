import ProfileScreen from "@/screens/profile";
import { ScreenProps } from "@/types/screen";
import CartScreen from "./screens/cart";
import CategoriesScreen from "./screens/categories";
import HomeScreen from "./screens/home";
import CategoryScreen from "./screens/category";

export const routes = {
	home: "Home",
	categories: "Categories",
	cart: "Cart",
	profile: "Profile",
	category: "Category",
};

export const screens: Array<ScreenProps> = [
	{
		name: routes.home,
		component: HomeScreen,
	},
	{
		name: routes.categories,
		component: CategoriesScreen,
	},
	{
		name: routes.cart,
		component: CartScreen,
	},
	{
		name: routes.profile,
		component: ProfileScreen,
	},
	{
		name: routes.category,
		component: CategoryScreen,
	},
];
