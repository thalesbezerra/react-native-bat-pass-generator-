import React from "react";
import {Text, View} from "react-native"
import { StatusBar } from 'expo-status-bar';
//Importando a stilização
import styles from '../Home/Style'
import { BatLogo } from "../../components/BatLogo/BatLogo";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";


export default function Home(){
    return(
        //Fragment
        <View style={styles.appContainer}>

            <View style={styles.logoConteiner}>
                <BatLogo/>
            </View>

            <View style={styles.inputConteiner}>
                {/*<BatTextInput/>*/}
                <BatButton/>
            </View>

            <StatusBar style='auto' />
        </View>
    )
}

