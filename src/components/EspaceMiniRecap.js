import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import ButtonContinuer from './ButtonContinuer_Newtransact';

const EspaceMiniRecap = () => {
  return (
    <View style={styles.EspaceMiniTransact}>
        <View>
            <Text style={{width:90, color:'#fff', height:19, left:21, top:23, fontSize:16, lineHeight:19,}}>A Envoyer</Text>
            <Text style={{width:90, color:'#fff', height:19, left:221, top:5, fontSize:13, lineHeight:19, fontWeight:'bold'}}>$6,348.10</Text>
        </View>

        <View>
            <Text style={{width:110, color:'#fff', height:19, left:21, top:23, fontSize:16, lineHeight:19,}}>Frais Envois</Text>
            <Text style={{width:90, color:'#fff', height:19, left:221, top:5, fontSize:11, lineHeight:19, fontWeight:'bold'}}>$50.10</Text>
            <Text style={styles.Ligne}></Text>
        </View>

        <View>
            <Text style={{width:110, color:'#fff', height:19, left:21, top:53, fontSize:17, lineHeight:19,}}>TOTAL</Text>
            <Text style={{width:100, color:'#fff', height:39, left:216, top:25, fontSize:11, lineHeight:19, fontWeight:'bold', backgroundColor:'#F4D9D6', color:'#000', textAlign:'center', paddingVertical:10, borderRadius:5}}>$50.10</Text>
        </View>

        <ButtonContinuer/>
    </View>
  )
}





const styles = StyleSheet.create({
    EspaceMiniTransact:{
        position: 'absolute',
        width: 332,
        height: 204,
        left: 21,
        top: 302,
        backgroundColor: '#1C2235',
        borderRadius: 10,
    },
    Ligne:{
        width:300,
        borderBottomWidth:1,
        borderBottomColor:'#fff',
        paddingBottom:10,
        left:15
    }
})

export default EspaceMiniRecap