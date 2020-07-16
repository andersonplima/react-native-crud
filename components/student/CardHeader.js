import * as React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function CardHeader({ student, deleteStudent, editStudent, title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={styles.button} onPress={() => editStudent(student)}>
                <Icon style={styles.icon} name="edit" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => deleteStudent(student.code)}>                
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
        alignContent: "space-between",
        alignItems: "center",
        padding: 10
    },
    title: {
        flex: 1,
        color: 'white',
        fontSize: 28,
        textAlign: "center",
        marginLeft: 66
    },
    button: {
        paddingHorizontal: 5
    },
    icon: {
        fontSize: 28,
        color: 'white'
    }
})