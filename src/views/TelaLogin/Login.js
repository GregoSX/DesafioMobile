import React, { useState } from 'react';
import { Text, KeyboardAvoidingView, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import Header from '../../components/Header';

export default ( {navigation} ) => {
    const [email, setEmail] = useState('');
    const [emailValidError, setEmailValidError] = useState(0);

    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        
        if (val.length === 0) {
          setEmailValidError(0);
        } else if (reg.test(val) === false) {
          setEmailValidError(1);
        } else if (reg.test(val) === true) {
          setEmailValidError(2);
        }
    };

    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Cards"}]
        })
    }

    function checkEmail() {
        if(emailValidError === 0) {
           return (
                alert('Insira um endereço de e-mail')
           ); 
        } else if (emailValidError === 1) {
            return (
                alert('Insira um endereço de e-mail válido')
           ); 
        } else {
            {entrar()}
        }
    };
    
    return (
        <KeyboardAvoidingView style={styles.containerKeyBoard}>
            <Header />
            <View style={styles.containerView}> 
                <Text style={styles.textTitle}> Login </Text>
                <TextInput 
                    placeholder='E-mail' 
                    placeholderTextColor='#000' 
                    style={styles.input} 
                    value={email} 
                    onChangeText= { value => {
                        setEmail(value);
                        handleValidEmail(value);
                    }}
                />
                <TextInput 
                    placeholder='Senha' 
                    placeholderTextColor='#000' 
                    style={styles.input} 
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={checkEmail}>
                    <Text style={styles.textButon}> Entrar </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );

}