import * as React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './screens/Welcome'
import List from './screens/List'
import Add from './screens/Add'

const Stack = createStackNavigator()

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="List" component={List} options={{ title: "Alunos" }} />
                <Stack.Screen name="Add" component={Add} options={{ title: "Cadastrar Aluno" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}