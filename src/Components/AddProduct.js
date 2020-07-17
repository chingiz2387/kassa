import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { ButtonQuitScan } from "../Components/ButtonQuitScan";
import { window } from "../Components/UI/Layout";

export const AddProduct = ({ addBarcode, onPress }) => {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);

	useEffect(() => {
		(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			console.log("Status cam: ", status);
			setHasPermission(status === "granted");
		})();
	}, []);

	const handleBarCodeScanned = ({ type, data }) => {
		setScanned(true);
		console.log(addBarcode(data));
		addBarcode(data);
		Alert(`Bar code with type ${type} and data ${data} has been scanned!`);
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={styles.addProduct}>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={{ height: window.height / 2, width: window.height }}
			/>

			{scanned && (
				<Button
					title={"Нажмите для повторного сканирования"}
					onPress={() => {
						setScanned(false);
					}}
				/>
			)}
			<ButtonQuitScan onPress={onPress} />
		</View>
	);
};

const styles = StyleSheet.create({
	addProduct: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
});
