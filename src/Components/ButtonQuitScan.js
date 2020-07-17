import React from "react";
import { View, Button } from "react-native";

export const ButtonQuitScan = ({ onPress }) => {
	return (
		<View>
			<Button title="Выйти" onPress={onPress} />
		</View>
	);
};
