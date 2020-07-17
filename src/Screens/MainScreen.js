import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { ButtonForScan } from "../Components/ButtonForScan";
import { ButtonQuitScan } from "../Components/ButtonQuitScan";
import { OpenScanForProduct } from "../Components/OpenScanForProduct";
import { AddProduct } from "../Components/AddProduct";

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
		component = (
			<AddProduct onPress={handleDoNotComponent} addBarcode={addBarcode} />
		);
		// component = <ButtonQuitScan onPress={handleDoNotComponent} />;
	} else {
		component = <ButtonForScan onPress={handleLoadComponent} />;
	}

	return (
		<View>
			<OpenScanForProduct
				loadComponent={loadComponent}
				addBarcode={addBarcode}
			/>
			{component}
		</View>
	);
};

const styles = StyleSheet.create({});
