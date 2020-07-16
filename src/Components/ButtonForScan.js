import React from "react";
import { View, Button } from "react-native";

export const ButtonForScan = ({ onPress }) => {
	return (
		<View>
			<Button title="Сканировть" onPress={onPress} />
		</View>
	);
};
