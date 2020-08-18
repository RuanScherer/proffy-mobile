import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login'
import Register from '../pages/Register'
import RegisterSuccess from '../pages/RegisterSuccess'

const { Navigator, Screen } = createStackNavigator()

const AuthRoutes: React.FC = () => (
    <Navigator screenOptions={{ headerShown: false }}>
        <Screen
            name="Login"
            component={Login}
        />
        <Screen
            name="Register"
            component={Register}
        />
        <Screen
            name="RegisterSuccess"
            component={RegisterSuccess}
        />
    </Navigator>
)

export default AuthRoutes