import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Navbar } from "./src/Components/Navbar";
import { MainScreen } from "./src/Screens/MainScreen";

export default function App() {
	const [barcode, setBarcode] = useState([]);

	const addBarcode = (scanCode) => {
		console.log("addBarcode", scanCode);
		setBarcode((prev) => [
			...prev,
			{
				id: Date.now().toString(),
				scanCode,
			},
		]);
	};

	return (
		<View>
			<Navbar title="Kassa" />
			<View style={styles.container}>
				<MainScreen addBarcode={addBarcode} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 50,
	},
});
