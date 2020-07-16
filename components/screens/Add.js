import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import InputGroup from '../InputGroup'
import FooterButton from '../FooterButton'

export default function Add({ route, navigation }) {
    const student = route.params?.student
    const [name, setName] = React.useState(student?.name ?? '')
    const [age, setAge] = React.useState(student?.age.toString() ?? '')

    const save = () => {
        navigation.navigate('List', { student: { code: student?.code, name, age: Number(age) } })
    }
    
    return (
        <View style={styles.container}>
            <InputGroup label="Nome" placeHolder="Digite o nome..." value={name} setValue={setName} />
            <InputGroup label="Idade" placeHolder="Digite a idade..." value={age} setValue={setAge} />
            <View style={styles.footer}>
                <FooterButton caption="Salvar" iconName="save" onPress={save} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20
    },
    footer: {
        height: 50,
    }
})