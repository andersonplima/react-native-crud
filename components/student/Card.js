import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import CardHeader from './CardHeader'
import CardBody from './CardBody'

export default function Card({ student, deleteStudent, editStudent }) {
    return (
        <View style={styles.container}>
            <CardHeader title="Aluno" student={student} deleteStudent={deleteStudent} editStudent={editStudent} />
            <CardBody student={student}></CardBody>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 10,        
        borderColor: '#777',
        borderWidth: 1
    },
})