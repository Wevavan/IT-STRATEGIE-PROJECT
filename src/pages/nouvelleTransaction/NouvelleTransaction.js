import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles_nouvelletransaction';
import PaysSelectInput from '../../components/PaysSelectInput';
import EspaceParamTransact from '../../components/EspaceParamTransact';
import EspaceMiniRecap from '../../components/EspaceMiniRecap';

const NouvelleTransaction = () => {
  return (
    <View style={styles.Vue_Transaction_1}>
        <PaysSelectInput/>
        <EspaceParamTransact/>
        <EspaceMiniRecap/>
    </View>
  )
}


export default NouvelleTransaction