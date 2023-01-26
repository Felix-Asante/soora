import {
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
	TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LandingImage1 } from "../../../assets/images";
import { theme } from "../../theme";

export default function NewsLetterSection() {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		// @desc: clear message
		setTimeout(() => {
			setMessage("");
		}, 1000);
	}, [message]);

	// @desc: handle email submit
	const notifyButtonHandler = () => {
		const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
		if (emailRegx.test(email)) {
			setMessage("Your email address has been received.");
			setEmail("");
		} else {
			setMessage("Please provide a valid email");
		}
	};
	return (
		<View style={styles.wrapper}>
			<Text style={styles.comingSoon}>Coming Soon</Text>
			<View style={styles.line} />
			<View>
				<Text style={styles.largeText}>Get Notified</Text>
				<Text style={styles.largeText}>When We Launched</Text>
			</View>

			<View style={styles.formControl}>
				<TextInput
					style={styles.emailInput}
					onChangeText={setEmail}
					value={email}
				/>
				<TouchableOpacity
					style={styles.notifyButton}
					onPress={notifyButtonHandler}
				>
					<Text style={styles.notifyText}>Notify me</Text>
				</TouchableOpacity>
			</View>

			{message && <Text style={styles.message}>{message}</Text>}
			<Text style={styles.notice}>
				Don&apos;t worry, we won&apos;t spam you :)
			</Text>

			<Image
				source={LandingImage1}
				alt="illustration"
				style={styles.illustration}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		alignItems: "center",
		marginTop: -110,
	},
	illustration: {
		width: "100%",
		resizeMode: "contain",
		top: "-12%",
		zIndex: -2,
	},
	formControl: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderColor: theme.colors.dark,
		borderRadius: 100,
		borderWidth: 1.5,
		height: 55,
		width: "100%",
		paddingHorizontal: 6,
		paddingLeft: 8,
		marginVertical: 15,
	},
	emailInput: {
		width: "61%",
		height: 40,
		marginTop: 25,
		marginBottom: 20,
	},
	notifyButton: {
		paddingHorizontal: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.colors.dark,
		borderRadius: 100,
		width: 110,
		height: 45,
	},
	notifyText: {
		color: theme.colors.light,
		fontSize: 17,
		fontWeight: "bold",
	},

	largeText: {
		fontSize: 35,
		fontWeight: "800",
		textAlign: "center",
		color: theme.colors.dark,
		marginBottom: 3,
		fontFamily: "Inter-Bold",
	},

	message: {
		color: theme.colors.primary,
		fontWeight: "600",
		textAlign: "center",
		fontSize: 13,
	},
	notice: {
		textAlign: "center",
		marginVertical: 4,
		fontSize: 13,
	},
	comingSoon: {
		marginBottom: 9,
		fontSize: 13,
		fontWeight: "400",
		textAlign: "center",
		fontFamily: "Inter-Regular",
	},
	line: {
		position: "absolute",
		top: "0.8%",
		left: "30%",
		height: 1.5,
		width: 23,
		backgroundColor: theme.colors.dark,
	},
});
