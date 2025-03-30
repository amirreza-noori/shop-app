import ContactUsScreen from "@/screens/contactUs";
import { ScreenProps } from "@/types/screen";
import CartScreen from "./screens/cart";
import CategoriesScreen from "./screens/categories";
import AboutUsScreen from "./screens/aboutUs";
import CategoryScreen from "./screens/category";
import ProductScreen from "./screens/product";

export const routes = {
	aboutUs: "AboutUs",
	categories: "Categories",
	cart: "Cart",
	contactUs: "ContactUs",
	category: "Category",
	product: "Product",
};

export const screens: Array<ScreenProps> = [
	{
		name: routes.aboutUs,
		component: AboutUsScreen,
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
		name: routes.contactUs,
		component: ContactUsScreen,
	},
	{
		name: routes.category,
		component: CategoryScreen,
	},
	{
		name: routes.product,
		component: ProductScreen,
	},
];
