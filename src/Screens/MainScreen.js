import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { ButtonForScan } from "../Components/ButtonForScan";
import { OpenScanForProduct } from "../Components/OpenScanForProduct";

export const MainScreen = ({ addBarcode }) => {
	const [loadComponent, setloadComponent] = useState(false);

	const handleLoadComponent = () => {
		setloadComponent(true);
	};

	const handleDoNotComponent = () => {
		setloadComponent(false);
	};

	let component;

	if (loadComponent) {
		component = <ButtonForScan onPress={handleLoadComponent} />;
	} else {
		component = null;
	}

	return (
		<View>
			<OpenScanForProduct
				onPressScan={loadComponent}
				addBarcode={addBarcode}
				onPress={handleLoadComponent}
			/>
			{component}
		</View>
	);
};

const styles = StyleSheet.create({});
