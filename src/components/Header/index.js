import React from "react";
import { Image, View } from 'react-native';
import styles from './styles';
import logo from '../../assets/logo.png';

export default () =>  {
    return (
        <View styles={styles.container}> 
            <Image source={logo} style={styles.image}/>
        </View>
    );
}
