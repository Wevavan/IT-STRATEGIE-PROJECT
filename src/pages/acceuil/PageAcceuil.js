import * as React from 'react';
import { Text, View, Button } from 'react-native';

const Acceuil = ({navigation}) => {
  return (
    <View>
      <View>
        <Button
          title = "Nouvelle Transaction"
          onPress={()=>
            navigation.navigate('nouvelle_transaction')
          }
        />
      </View>
    </View>
  );
}

export default Acceuil