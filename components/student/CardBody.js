import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import InfoItem from './InfoItem'

export default function CardBody({ student }) {
    return (
        <View style={styles.container}>
            <InfoItem name="Matrícula" value={student.code} />
            <InfoItem name="Nome" value={student.name} />
            <InfoItem name="Idade" value={student.age} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})



