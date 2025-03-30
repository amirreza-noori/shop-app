import { Button, Text, TextInput } from "@/components";
import { t } from "i18next";
import { ScrollView, StyleSheet } from "react-native";

export default function ContactUsScreen() {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text size="lg" bold>
				تماس با ما
			</Text>
			<Text>{t("contactUsText")}</Text>
			<TextInput label={t("name")} />
			<TextInput label={t("email")} />
			<TextInput label={t("mobile")} />
			<TextInput label={t("messageText")} multiline numberOfLines={5} />
			<Button title="ارسال" />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
		gap: 10,
	},
});
