import React from "react";
import { View } from "react-native";
import { AddProduct } from "../Components/AddProduct";
import { ButtonForScan } from "../Components/ButtonForScan";
import { ButtonQuitScan } from "../Components/ButtonQuitScan";

export const OpenScanForProduct = ({ loadComponent, addBarcode }) => {
	console.log("loadComponent: ", loadComponent);
	if (loadComponent) {
		return (
			<View>
				<AddProduct addBarcode={addBarcode} />
			</View>
		);
	}
	return null;
};
