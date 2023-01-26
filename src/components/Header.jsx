import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Pressable,
} from "react-native";
import { ContactIcon, Logo } from "../../assets/images";
import { theme } from "../theme";

export default function Header({ toggleModal }) {
	return (
		<View style={styles.header}>
			<Image source={Logo} alt="Soora" style={styles.logo} />
			<Pressable style={styles.btn} onPress={toggleModal}>
				<Text style={styles.text}>Contact us</Text>
				<Image source={ContactIcon} alt="arrow" style={styles.arrow} />
			</Pressable>
		</View>
	);
}
const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	logo: {
		resizeMode: "contain",
	},
	btn: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 14,
		paddingVertical: 10,
		width: 140,
		height: 50,
		backgroundColor: theme.colors.dark,
		borderRadius: 6,
	},
	text: {
		color: theme.colors.light,
		fontWeight: "bold",
		marginRight: 8,
		fontSize: 18,
		fontFamily: "Inter-Bold",
	},
	arrow: {
		width: 15,
		height: 15,
	},
});
