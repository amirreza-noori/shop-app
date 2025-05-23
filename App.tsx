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
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
	const [loaded, error] = useFonts({
		Vazir: require("./assets/fonts/Vazir.ttf"),
		"Vazir-Bold": require("./assets/fonts/Vazir-Bold.ttf"),
	});

	useEffect(() => {
		if (loaded || error) SplashScreen.hideAsync();
	}, [loaded, error]);

	if (!loaded && !error) return null;

	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer direction="rtl">
				<Stack.Navigator
					initialRouteName={routes.aboutUs}
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
