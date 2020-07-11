import * as React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function Welcome({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.title}>CRUD</Text>
                <Text style={styles.subtitle}>Seja bem-vindo(a)</Text>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('List') }>
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
    },
    top: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    bottom: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },
    subtitle: {
        fontSize: 18,
        color: 'red',
    },
    button: {
        backgroundColor: '#777',
        padding: 10,
    },
    buttonText: {
        color: 'white',
    },
})

