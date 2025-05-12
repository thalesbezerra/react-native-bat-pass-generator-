import React, {useState} from 'react';
import { Button, View, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
  // Para que o valor seja alterado na tela sempre que o botão for clicado 
  // vamos criar um state, é preciso importar no React
    const [pass, setPass] = useState('')

    function handleGenerateButton(){
      let generateToken = generatePass()
      setPass(generateToken)
    }

    //Função do Clipboar peça de lego do expo
    function handleCopyButton(){
      //Recuperando o estado que está ligado a ela (pass)
      Clipboard.setStringAsync(pass)
    }

  return (

    /**<Button
        //Evento do botão, onde vai ser passada uma função
        onPress={()=>{console.log('Ola!')}}
        //O texto que vai aparecer
        title='CLIQUE AQUI'
        //O que vai tá escrito no botão
        accessibilityLabel='Clique em mim'
        color='green'
      /> */
    <>

      <BatTextInput pass={pass}/>

      {/**Tornando um texto preciodavel(botão) usando o componente
       * Pressable, se comporta como uma div
       */}
      <Pressable
        onPress={handleGenerateButton}
        style={styles.button}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={handleCopyButton}
        style={styles.button}
      >
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>     

    </>
  );
}