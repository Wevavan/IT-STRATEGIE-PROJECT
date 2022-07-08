import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import RNPickerSelect from "react-native-picker-select";

const EspaceInfoSup = () => {
  return (
    <View style={styles.EspaceInfoSup}>
        <Text style={{color: '#545FFF',left: 76,top: 12,height: 25,}}>Informations supplémentaires</Text>

        <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold', fontSize:14, marginBottom:6}}>Motif du transfert</Text>

            <View style={styles.Motif_transf}>
                <RNPickerSelect
                        // style={pickerStyle}

                        placeholder={{
                            label: '',
                        }}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: "a", value: "France" },
                            { label: "b", value: "Togo" },
                            { label: "c", value: "Benin" },
                            { label: "d", value: "Mali" },
                            { label: "e", value: "Gabon" },
                            { label: "f", value: "Tunisie" },
                            { label: "g", value: "USA" },
                        ]}
                />
            </View>

        </View>

        <View style={{marginTop: 6}}>
            <Text style={{fontWeight: 'bold', fontSize:14, marginBottom:6}}>Provenance de l'argent</Text>

            <View style={styles.Motif_transf}>
                <RNPickerSelect
                        // style={pickerStyle}

                        placeholder={{
                            label: '',
                        }}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: "a", value: "France" },
                            { label: "b", value: "Togo" },
                            { label: "c", value: "Benin" },
                            { label: "d", value: "Mali" },
                            { label: "e", value: "Gabon" },
                            { label: "f", value: "Tunisie" },
                            { label: "g", value: "USA" },
                        ]}
                />
            </View>

        </View>

        <View style={styles.Buttonvalider2}>
            <TouchableOpacity style={{ height: 55, backgroundColor: '#545FFF', borderRadius: 5, }}>
                <Text style={{textAlign: 'center', fontSize:22, marginTop:10, color:'#fff'}}>Valider</Text>    
            </TouchableOpacity>
        </View>

    </View>
  )
}

// const pickerStyle = {
// 	inputIOS: {
//         position: 'absolute',
// 		color: 'rgba(236, 239, 255, 0.53)',
//         backgroundColor: '#1C2235',
//         width: 332,
//         height: 65,
//         // fontFamily: 'Inter',
//         fontStyle: 'normal',
//         fontWeight: 400,
//         fontSize: 16,
//         lineHeight: 19,
// 	},
// 	inputAndroid: {
//         position: 'absolute',
// 		color: 'rgba(236, 239, 255, 0.53)',
//         backgroundColor: '#1C2235',
//         width: 332,
//         height: 65,
//         // fontFamily: 'Inter',
//         fontStyle: 'normal',
//         fontWeight: 400,
//         fontSize: 16,
//         lineHeight: 19,
// 	},
// 	placeholderColor: 'white',
// };

const styles = StyleSheet.create({
    EspaceInfoSup:{
        position: 'absolute',
        width: 332,
        height: 254,
        left: 21,
        top: 280,
        backgroundColor: '#ECEFFF',
        borderRadius: 10,
    },
    Motif_transf:{
		borderRadius: 10,
        // borderWidth: 1,
        borderColor: '#bdc3c7',
        overflow: 'hidden',
        color: '#fff',
        backgroundColor: '#F4D9D6',
        width: 332,
        height: 50,
    },
    Buttonvalider2:{
        position: 'absolute',
        width: 332,
        height: 60,
        top: 302,
        borderRadius: 10,
    },
})

export default EspaceInfoSup