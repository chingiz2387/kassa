import React from "react";
import { View, Button, StyleSheet } from "react-native";

export const ButtonQuitScan = ({ onPress }) => {
	return (
		<View style={styles.ButtonQuitScan}>
			<Button title="Выйти" onPress={onPress} />
		</View>
	);
};

const styles = StyleSheet.create({
	ButtonQuitScan: {
		marginBottom: 10,
	},
});
