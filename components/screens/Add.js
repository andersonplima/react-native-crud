import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import InputGroup from '../InputGroup'
import FooterButton from '../FooterButton'

export default function Add({route, navigation}) {
    const [name, setName] = React.useState('')
    const [age, setAge] = React.useState('')
    const save = () => {
        route.params.onPress(name, age)
        navigation.navigate('List')
    } 
    return (
        <View style={styles.container}>
            <InputGroup label="Nome" placeHolder="Digite o nome..." setExternalValue={setName} />
            <InputGroup label="Idade" placeHolder="Digite a idade..." setExternalValue={setAge} />
            <FooterButton iconName="save" onPress={save}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20
    }
})