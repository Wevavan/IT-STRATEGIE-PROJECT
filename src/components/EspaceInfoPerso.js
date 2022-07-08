import * as React from 'react';
import { StyleSheet, View, Text, TextInput, onChangeText, text} from 'react-native';
import RNPickerSelect from "react-native-picker-select";

const EspaceInfoPerso = () => {
  return (
    <View style={styles.EspaceInfoPerso}>
        <Text style={{color: '#545FFF',left: 76,top: 12,height: 25,}}>Informations personnelles</Text>

        <TextInput
            style={styles.TextInput}
            onChangeText={onChangeText}
            value={text}
            placeholder="Nom du bénéficiaire"
            placeholderTextColor='#ECEFFF'
        />

        <TextInput
            style={styles.TextInput2}
            onChangeText={onChangeText}
            value={text}
            placeholder="Prénom du bénéficiaire"
            placeholderTextColor='#ECEFFF'
        />

        <Text style={{color: '#1C2235',left: 10,top: 140,height: 25,fontSize: 14,}}>Saisir le numéro de téléphone</Text>

        <View style={styles.Num_indice}>
            <RNPickerSelect 
                    style={pickerStyle2}

                    placeholder={{
                        label: '+228',
                    }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: "+33", value: "France" },
                        { label: "+228", value: "Togo" },
                        { label: "+229", value: "Benin" },
                        { label: "+233", value: "Mali" },
                        { label: "+277", value: "Gabon" },
                        { label: "+223", value: "Tunisie" },
                        { label: "+01", value: "USA" },
                    ]}
            />
        </View>
        <TextInput
            style={styles.TextInput3}
            onChangeText={onChangeText}
            value={text}
            keyboardType='numeric'
            maxLength={9} 
        />

    </View>
  )
}

const pickerStyle2 = {
	inputIOS: {
		color: '#fff',
	},
	inputAndroid: {
		color: '#fff',
	},
};

const styles = StyleSheet.create({
    EspaceInfoPerso:{
        position: 'absolute',
        width: 332,
        height: 254,
        left: 21,
        top: 23,
        backgroundColor: '#F4D9D6',
        borderRadius: 10,
    },
    TextInput:{
        position: 'absolute',
        width: 312,
        height: 50,
        left: 10,
        top: 48,
        backgroundColor: '#1C2235',
        color: '#fff',
        borderRadius: 10,
        paddingLeft: 20,
    },
    TextInput2:{
        position: 'absolute',
        width: 312,
        height: 50,
        left: 10,
        top: 110,
        backgroundColor: '#1C2235',
        color: '#fff',
        borderRadius: 10,
        paddingLeft: 20,
    },
    Num_indice:{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bdc3c7',
        overflow: 'hidden',

        color: '#fff',
        backgroundColor: '#1C2235',
        width: 107,
        height: 50,
        left: 11,
        top: 138,
    },
    TextInput3:{
        position: 'absolute',
        width: 200,
        height: 50,
        left: 120,
        top: 188,
        backgroundColor: '#1C2235',
        color: '#fff',
        borderRadius: 10,
        paddingLeft: 20,
    }
})

export default EspaceInfoPerso