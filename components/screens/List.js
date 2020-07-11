import * as React from 'react'
import { FlatList, StatusBar, StyleSheet, SafeAreaView } from 'react-native'
import Card from '../student/Card'
import FooterButton from '../FooterButton'

const students = [
    { code: 1, name: 'Anderson', age: 36 },
    { code: 2, name: 'Patrícia', age: 41 },
    { code: 3, name: 'João', age: 1 },
    { code: 4, name: 'Lucas', age: 2 },
    { code: 5, name: 'Mama', age: 50 },
]

export default function List({ navigation }) {
    const [data, setData] = React.useState(students)
    const deleteStudent = (code) => {
        setData(data.filter(d => d.code != code))
    }
    const addStudent = (name, age) => {
        const code = data[data.length - 1].code + 1
        const student = { code, name, age }
        setData([...data, student])
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data} keyExtractor={item => item.code} renderItem={({ item }) => (
                <Card student={item} deleteStudent={code => deleteStudent(code)} />
            )} />
            <FooterButton iconName="plus-square" onPress={() => navigation.navigate('Add', { onPress: addStudent })} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0
    },
})
