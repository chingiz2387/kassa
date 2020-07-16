import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export const AddProduct = ({ addBarcode }) => {
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
				barCodeTypes={[
					BarCodeScanner.Constants.BarCodeType.ean13,
					BarCodeScanner.Constants.BarCodeType.ean8,
					BarCodeScanner.Constants.BarCodeType.qr,
				]}
				style={[StyleSheet.absoluteFillObject, styles.container]}
			/>

			{scanned && (
				<Button
					title={"Нажмите для повторного сканирования"}
					onPress={() => {
						setScanned(false);
					}}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	addProduct: {
		...StyleSheet.absoluteFillObject,
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-end",
	},
});
