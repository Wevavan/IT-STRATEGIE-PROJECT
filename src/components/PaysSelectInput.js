import React from 'react';
import { StyleSheet, View} from 'react-native';
import RNPickerSelect from "react-native-picker-select";

const PaysSelectInput = () => {
  return (
    <View style={styles.Pays_du_desti}>
            <RNPickerSelect
                    style={pickerStyle}

                    placeholder={{
                        label: 'Pays du destinataire',
                    }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: "France", value: "France" },
                        { label: "Togo", value: "Togo" },
                        { label: "Benin", value: "Benin" },
                        { label: "Mali", value: "Mali" },
                        { label: "Gabon", value: "Gabon" },
                        { label: "Tunisie", value: "Tunisie" },
                        { label: "USA", value: "USA" },
                    ]}
            />
        </View>
  )
}

const pickerStyle = {
	inputIOS: {
        position: 'absolute',
		color: 'rgba(236, 239, 255, 0.53)',
        backgroundColor: '#1C2235',
        width: 332,
        height: 65,
        // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
	},
	inputAndroid: {
        position: 'absolute',
		color: 'rgba(236, 239, 255, 0.53)',
        backgroundColor: '#1C2235',
        width: 332,
        height: 65,
        // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
	},
	placeholderColor: 'white',
};

const styles = StyleSheet.create({
    Pays_du_desti: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bdc3c7',
        overflow: 'hidden',
        width: 332,
        height: 65,
        left: 21,
        top: 23,
    }
});

export default PaysSelectInput;