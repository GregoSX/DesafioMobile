import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textTitle: {
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 25
    },

    containerKeyBoard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C0C0C0',
        paddingTop: 45
    },

    containerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
        width: '90%'
    },

    input: {
        borderColor: '#1C1C1C',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 9,
        marginBottom: 25,
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 20,
        width: '90%'
    },

    button: {
        backgroundColor: '#778899',
        borderRadius: 9,
        width: '90%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center'
    },

    textButon: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },

    textValidation: {
        fontSize: 18,
        color: '#000'
    }
});

export default styles;