import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

//Como props está recebendo um any, pois não atribuimos nenhum tipo
// vamos criar uma interface então e atribuir um tipo
interface BatTextInputProps{
  pass: string
}

export function BatTextInput(props: BatTextInputProps) {
  return (
    //Quando é só um componente, podemos remover o View ou o fragment
    //<View>
    //<>
        <TextInput
            style={styles.inputer}
            placeholder='pass'
            value={props.pass}
        />
    //</>
    //</View>
  );
}