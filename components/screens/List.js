import * as React from 'react'
import { View, FlatList, StatusBar, StyleSheet, SafeAreaView } from 'react-native'
import Card from '../student/Card'
import FooterButton from '../FooterButton'

const students = [
    { code: 1, name: 'Anderson', age: 36 },
    { code: 2, name: 'Patrícia', age: 41 },
    { code: 3, name: 'João', age: 1 },
    { code: 4, name: 'Lucas', age: 2 },
    { code: 5, name: 'Mama', age: 50 },
]

export default function List({ route, navigation }) {
    const [data, setData] = React.useState(students)

    React.useEffect(() => {
        if (route?.params?.student)
            changeData(route.params.student)
    }, [route?.params?.student])

    const deleteStudent = (code) => {
        setData(data.filter(d => d.code != code))
    }

    const changeData = (student) => {
        const studentIndex = data.findIndex(s => s.code == student.code)
        if (studentIndex == -1)
            pushStudent(student)
        else
            editStudentInplace(studentIndex, student)
    }

    const pushStudent = (student) => {
        const code = data.slice(-1).code + 1
        const studentToAdd = { ...student, code }
        setData([...data, studentToAdd])
    }

    const editStudentInplace = (studentIndex, student) => {
        const data2 = [...data]
        data2[studentIndex] = student
        setData(data2)
    }

    const editStudent = (student) => {
        navigation.navigate('Add', { student })
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.list}>
                <FlatList data={data} keyExtractor={item => item.code.toString()} renderItem={({ item }) => (
                    <Card student={item} deleteStudent={deleteStudent} editStudent={editStudent} />
                )} />
            </View>
            <View style={styles.footer}>
                <FooterButton caption="Cadastrar Aluno" iconName="plus-square" onPress={() => navigation.navigate('Add')} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    list: {
        flex: .9,
    },
    footer: {
        flex: .1,
    }
})
