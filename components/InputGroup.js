import * as React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function InputGroup({ label, placeHolder, value: externalValue, setValue: setExternalValue }) {
    const [value, setValue] = React.useState(externalValue)
    const setValueExtended = text => {
        setValue(text)
        setExternalValue(text)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                autoFocus={true}
                focusable={true}                
                style={styles.input} 
                placeholder={placeHolder} 
                value={value} 
                onChangeText={text => setValueExtended(text)}>
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    label: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5
    },
    input: {
        fontSize: 16,
        color: '#666',
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: '#666',
        borderWidth: 1,
        padding: 10,
    }
})