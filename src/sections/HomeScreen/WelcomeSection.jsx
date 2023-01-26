import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import {
	AppleStoreImage,
	GooglePlayImage,
	LandingImage2,
} from "../../../assets/images";
import { theme } from "../../theme";

export default function WelcomeSection() {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.comingSoon}>Coming Soon</Text>
			<View style={styles.line} />
			<View>
				<Text style={styles.largeText}>Bringing</Text>
				<Text style={styles.largeText}>Muslims Together</Text>
			</View>
			<View style={styles.icons}>
				<TouchableOpacity style={styles.iconButton}>
					<Image
						source={GooglePlayImage}
						alt="GooglePlayStore"
						style={styles.storesLogo}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.iconButton}>
					<Image
						source={AppleStoreImage}
						alt="AppStore"
						style={styles.storesLogo}
					/>
				</TouchableOpacity>
			</View>
			<Image
				source={LandingImage2}
				alt="illustration"
				style={styles.illustration}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		alignItems: "center",
		paddingTop: 70,
		position: "relative",
	},
	illustration: {
		width: "100%",
		resizeMode: "contain",
		marginTop: -135,
	},
	icons: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 5,
		paddingHorizontal: 15,
	},
	iconButton: {
		width: "50%",
	},
	storesLogo: {
		width: "90%",
		height: 80,
		resizeMode: "contain",
	},
	largeText: {
		fontSize: 36,
		fontWeight: "800",
		textAlign: "center",
		color: theme.colors.dark,
		marginBottom: 3,
		fontFamily: "Inter-Bold",
	},
	comingSoon: {
		marginBottom: 12,
		fontSize: 13,
		fontWeight: "400",
		fontFamily: "Inter-Regular",
	},
	line: {
		position: "absolute",
		top: "10.3%",
		left: "30%",
		height: 1.5,
		width: 23,
		backgroundColor: theme.colors.dark,
	},
});
