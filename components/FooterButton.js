import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function FooterButton({ iconName, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>Adicionar aluno</Text>
            <Icon style={styles.icon} name={iconName} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: "row",
        height: 50,
        backgroundColor: '#1E88E5',
        flexWrap: "nowrap",
        alignContent: "stretch",
        alignItems: "center",
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    title: {
        flex: 1,
        color: 'white',
        fontSize: 28,
        textAlign: "center",
        marginLeft: 28
    },
    icon: {
        fontSize: 28,
        color: 'white'
    }
})