import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function CardHeader({ code, deleteStudent, title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={() => deleteStudent(code)}>
                <Icon style={styles.icon} name="trash-alt" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: "row",
        height: 50,
        backgroundColor: '#1E88E5',
        flexWrap: "nowrap",
        alignContent: "stretch",
        alignItems: "center",
        padding: 10
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