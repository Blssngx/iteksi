import { View, Text, StyleSheet, TextInput } from 'react-native';
import { MonoText } from './StyledText';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const InputText = (props) => {
    return (
        <View style={styles.button}>
            <View>
                <MonoText style={styles.inputTextHeader}>{props.title}</MonoText>
                <TextInput
                    placeholder={props.placeholder}
                    style={styles.inputBox}
                ></TextInput>
            </View>

            {/* <Ionicons
                name='chevron-forward'
                size={30} 
                /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    inputTextHeader: {
        color: 'black',
        fontSize: 12,
    },
    inputBox: {
        fontSize: 17,
        fontWeight: '600',
    },
    button: {
        backgroundColor: '',
        height: 55,
        width: '97%',
        borderRadius: 10,
        marginLeft: 7,
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 5,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'

    },
});

export default InputText;