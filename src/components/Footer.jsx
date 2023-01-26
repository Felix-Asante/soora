import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { theme } from "../theme";
import {
	FacebookImage,
	Twitter,
	Tiktok,
	Youtube,
	Instagram,
} from "../../assets/images";
export default function Footer() {
	return (
		<View style={styles.footer}>
			<View style={styles.socialMediaLinks}>
				<TouchableOpacity style={styles.socialMediaLink}>
					<Image
						source={FacebookImage}
						alt="facebook"
						style={styles.socialMediaIcon}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.socialMediaLink}>
					<Image
						source={Twitter}
						alt="facebook"
						style={styles.socialMediaIcon}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.socialMediaLink}>
					<Image
						source={Instagram}
						alt="facebook"
						style={styles.socialMediaIcon}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.socialMediaLink}>
					<Image
						source={Tiktok}
						alt="facebook"
						style={styles.socialMediaIcon}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.socialMediaLink}>
					<Image
						source={Youtube}
						alt="facebook"
						style={styles.socialMediaIcon}
					/>
				</TouchableOpacity>
			</View>
			<Text style={styles.copyright}>
				Copyright &copy; {new Date().getFullYear()} Soora. All rights reserved
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	footer: {
		marginTop: "-54%",
	},
	socialMediaLinks: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		paddingBottom: 13,
		borderBottomWidth: 1,
		borderBottomColor: theme.colors.dark,
	},
	socialMediaLink: {
		alignItems: "center",
		justifyContent: "center",
		width: 40,
		height: 40,
		borderWidth: 1,
		borderColor: theme.colors.dark,
		borderRadius: 100,
	},
	socialMediaIcon: {
		width: 24,
		height: 24,
	},
	copyright: {
		textAlign: "center",
		paddingVertical: 14,
	},
});
