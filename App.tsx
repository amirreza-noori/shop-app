import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { Navbar } from "./components";
import "./i18n";
import { direction } from "./i18n";
import { routes, screens } from "./routes";
import { queryClient } from "./services/core/queryClient";

const Stack = createNativeStackNavigator();

export default function App() {
	useFonts({ Vazir: require("./assets/fonts/Vazir.ttf"), "Vazir-Bold": require("./assets/fonts/Vazir-Bold.ttf") });

	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer direction="rtl">
				<Stack.Navigator
					initialRouteName={routes.home}
					screenLayout={({ children }) => (
						<SafeAreaView style={{ direction, flex: 1 }}>{children}</SafeAreaView>
					)}
					screenOptions={{ headerShown: false, animation: "fade" }}
				>
					{screens.map((screen, index) => (
						<Stack.Screen key={index} {...screen} />
					))}
				</Stack.Navigator>
				<Navbar />
			</NavigationContainer>
		</QueryClientProvider>
	);
}
