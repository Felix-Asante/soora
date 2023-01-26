import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { theme } from "./src/theme";
import { useFonts } from "expo-font";
export default function App() {
	const [fontsLoaded] = useFonts(theme.fonts);

	if (!fontsLoaded) return null;
	return (
		<SafeAreaView style={styles.safeArea}>
			<StatusBar style="auto" />
			<HomeScreen />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		background: "rgba(255, 0, 0, 0.1)",
		filter: "blur(344.294px)",
	},
});
