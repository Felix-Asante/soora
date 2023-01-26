import Header from "../components/Header";
import { ScrollView, View, StyleSheet } from "react-native";
import WelcomeSection from "../sections/HomeScreen/WelcomeSection";
import NewsLetterSection from "../sections/HomeScreen/NewsLetterSection";
import Footer from "../components/Footer";
import ContactAddressModal from "../components/ui/Modals/ContactAddressModal";
import { useState } from "react";
export default function HomeScreen() {
	const [showModal, setShowModal] = useState(false);

	return (
		<ScrollView>
			<View style={styles.wrapper}>
				<Header toggleModal={() => setShowModal(!showModal)} />
				<WelcomeSection />
				<NewsLetterSection />
				<ContactAddressModal
					visible={showModal}
					onClose={() => setShowModal(false)}
				/>
			</View>
			<Footer />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
});
