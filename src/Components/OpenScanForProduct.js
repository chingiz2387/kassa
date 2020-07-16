import React from "react";
import { View } from "react-native";
import { AddProduct } from "../Components/AddProduct";
import { ButtonForScan } from "../Components/ButtonForScan";

export const OpenScanForProduct = ({ onPressScan, addBarcode, onPress }) => {
	if (onPressScan) {
		return (
			<View>
				<AddProduct addBarcode={addBarcode} />
			</View>
		);
	} else {
		return (
			<View>
				<ButtonForScan onPress={onPress} />
			</View>
		);
	}
};
