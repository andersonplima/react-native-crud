import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function InfoItem({ name, value }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.value}>
                {value}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
        marginTop: 2,
        marginBottom: 2
    },
    name: {
        fontSize: 14,
        color: '#bbb'
    },
    value: {
        fontSize: 16,
        color: '#000'
    }
})