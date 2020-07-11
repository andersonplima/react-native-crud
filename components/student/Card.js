import * as React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import CardHeader from './CardHeader'
import CardBody from './CardBody'

export default function Card({ deleteStudent, student }) {
    return (
        <View style={styles.container}>
            <CardHeader title="Aluno" code={student.code} deleteStudent={code => deleteStudent(code)}/>
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