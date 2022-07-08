import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import RNPickerSelect from "react-native-picker-select";

const EspaceParamTransact = () => {

  return (
    <View style={styles.EspaceParamTransact}>
        {/* Texte "Montant a envoyer" */}
        <View style={styles.Montant_a_envoyer}>
            <Text style={styles.Montant_a_envoyer_text}>Montant à envoyer</Text>            
        </View>

        <View>
            {/* Le "Montant a envoyer" même */}
            <TextInput
                style={[styles.Le_Montant]}
                placeholder='6,348.10'
                keyboardType='numeric'
                // onChangeText={(text)=> this.onChanged(text)}
                // value={this.state.myNumber}
                maxLength={12}  //setting limit of input
            />
        </View>

        <View style={styles.Devise}>
            <Text style={styles.Devise_text}>$</Text>
        </View>
        <View style={styles.Ladevise}>
            <RNPickerSelect
                        style={pickerStyle}

                        placeholder={{
                            label: 'Dollar(USD)',
                        }}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: "Euro(EUR)", value: "Euro(EUR)" },
                            { label: "Dollar(USD)", value: "Dollar(USD)" },
                            { label: "Dinar(BHD)", value: "Dinar(BHD)" },
                            { label: "Franc CFA(XOF)", value: "Franc CFA(XOF)" },
                            { label: "Dollar canadien(CAD)", value: "Dollar canadien(CAD)" },
                            { label: "Cedi(GHS)", value: "Cedi(GHS)" },
                            { label: "Rand(ZAR)", value: "Rand" },
                        ]}
            />
        </View>

        <View style={styles.Singledevise}>
            <Text>629,70 <Text>XOF</Text></Text>
        </View>

        <View style={styles.Buttonvalider1}>
            <TouchableOpacity style={{ height: 40, backgroundColor: '#fff', borderRadius: 5 }}>
                <Text style={{textAlign: 'center', fontSize:16, marginTop:8}}>Valider</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

const pickerStyle = {
	inputIOS: {
		color: '#000',
        backgroundColor: '#F4D9D6',
        width: 179,
        height: 19,
        // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
	},
	inputAndroid: {
		color: '#000',
        backgroundColor: '#F4D9D6',
        width: 179,
        height: 19,
        // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
	},
	placeholderColor: 'white',
};

const styles = StyleSheet.create({
    EspaceParamTransact:{
        position: 'absolute',
        width: 332,
        height: 204,
        left: 21,
        top: 95,
        backgroundColor: '#F4D9D6',
        borderRadius: 10,

    },

    Montant_a_envoyer:{
        position: 'absolute',
        width: 191,
        height: 24,
        left: 19,
        top: 11,
    },
    Montant_a_envoyer_text:{
        // fontFamily: 'Inter',
        fontStyle: 'normal',        
        fontSize: 20,
        lineHeight: 24,
        color: '#1C2235',
        display: 'flex',
    },
    Le_Montant:{
        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: 24,
        left: 19,
        top: 54,
        // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 24,
        color: '#000000',
    },

    Devise:{
        position: 'absolute',
        width: 30,
        height: 30,
        top: 85,
        left: 16,
        fontWeight:'bold',
        fontSize: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 50,
    },
    Devise_text:{
        position: 'absolute',
        left: '36.29%',
        right: '37.23%',
        top: '16.67%',
        bottom: '16.89%',
    },

    Ladevise:{
        position: 'absolute',
        width: 79,
        height: 19,
        left: 54,
        top: 72,
    },
    Singledevise:{
        position: 'absolute',
        width: 87,
        height: 23,
        left: 231,
        top: 90,
        textAlign: 'right',
        float: 'right',

        // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 10,
        lineHeight: 12,
        /* identical to box height */

        color: '#000000',
    },
    Buttonvalider1:{
        /* Valider */
        position: 'absolute',
        width: 100,
        height: 80,
        left: 210,
        top: 130,
        // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 19,
    }
});

export default EspaceParamTransact;