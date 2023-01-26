import {
	View,
	Text,
	Modal,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
	TouchableOpacity,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import React, { useEffect, useState } from "react";
import { CopyIcon } from "../../../../assets/images";
import { theme } from "../../../theme";

export default function ContactAddressModal({ visible, onClose }) {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setCopied(false);
		}, 800);
	}, [copied]);

	const copyToClipboard = async (text) => {
		await Clipboard.setStringAsync(text);
		setCopied(true);
	};
	return (
		<View style={styles.modalWrapper}>
			<Modal
				visible={visible}
				onRequestClose={onClose}
				animationType="slide"
				transparent
			>
				<TouchableWithoutFeedback onPress={onClose}>
					<View style={styles.modalBody}>
						<TouchableOpacity style={styles.modalContent} activeOpacity={1}>
							<Text style={styles.title}>Reach out to us through</Text>
							<View style={styles.actionContainer}>
								<Text style={styles.email}>sooratheapp@gmail.com</Text>
								<TouchableOpacity
									pointerEvents="none"
									onPress={() => copyToClipboard("sooratheapp@gmail.com")}
								>
									<Image source={CopyIcon} alt="copy" />
									<Text>{copied ? "Copied" : "Copy"}</Text>
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	modalWrapper: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
		backgroundColor: "rgba(30, 30, 30, 0.8)",
	},
	actionContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	email: {
		color: theme.colors.primary,
		fontWeight: "bold",
		fontFamily: "Inter-Bold",
		marginRight: 18,
	},
	title: {
		color: "rgba(30, 30, 30, 0.8)",
		marginBottom: 13,
		fontFamily: "Inter-Regular",
	},
	modalBody: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0,0,0,0.15)",
	},
	modalContent: {
		width: 350,
		borderRadius: 8,
		backgroundColor: theme.colors.light,
		padding: 18,
		alignItems: "center",
	},
});
