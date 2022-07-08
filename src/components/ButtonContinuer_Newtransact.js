import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ButtonContinuer = () => {
    const navigation = useNavigation();

    onPress = () => {
        navigation.navigate('info_perso')
    };


  return (
    <View style={styles.Buttonvalider2}>
        <TouchableOpacity style={{ height: 55, backgroundColor: '#545FFF', borderRadius: 5, }} onPress={() => {onPress()}}>
            <Text style={{textAlign: 'center', fontSize:22, marginTop:10, color:'#fff'}}>Continuer</Text>    
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    Buttonvalider2:{
        position: 'absolute',
        width: 332,
        height: 60,
        top: 302,
        borderRadius: 10,
    },
})

export default ButtonContinuer