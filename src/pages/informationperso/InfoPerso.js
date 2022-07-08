import React from 'react';
import { View, StyleSheet } from 'react-native';
import EspaceInfoPerso from '../../components/EspaceInfoPerso';
import EspaceInfoSup from '../../components/EspaceInfoSup';

const InfoPerso = () => {
  return (
    <View style={styles.InfoPerso}>
        <EspaceInfoPerso/>
        <EspaceInfoSup/>
    </View>
  )
}

const styles = StyleSheet.create({
  InfoPerso:{
      backgroundColor: '#ECEFFF',
      flex: 1,
      height: '100%',
  }
})

export default InfoPerso