import * as React from 'react'
import { View, StyleSheet, Alert, Platform } from 'react-native'
import InputGroup from '../InputGroup'
import FooterButton from '../FooterButton'

export default function Add({ route, navigation }) {
    const student = route.params?.student
    const [name, setName] = React.useState(student?.name ?? '')
    const [age, setAge] = React.useState(student?.age.toString() ?? '')

    const save = () => {
        if (validate())
            navigation.navigate('List', { student: { code: student?.code, name, age: Number(age) } })
    }

    const validate = () => {
        let messages = [];
        if (!name)
            messages.push('O nome é obrigatório!')

        if (!age)
            messages.push('A idade é obrigatória!')

        if (messages) {
            if (Platform.OS === "web")
                window.alert(messages.join('\r\n'))
            else
                Alert.alert('Erros de validação', messages.join('\r\n'))

            return false;
        }

        return true;
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <InputGroup label="Nome" placeHolder="Digite o nome..." value={name} setValue={setName} />
                <InputGroup label="Idade" placeHolder="Digite a idade..." value={age} setValue={setAge} />
            </View>
            <View style={styles.footer}>
                <FooterButton caption="Salvar" iconName="save" onPress={save} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form: {
        flex: .9,
        paddingHorizontal: 20,
        justifyContent: "center"
    },
    footer: {
        flex: .1,
    }
})