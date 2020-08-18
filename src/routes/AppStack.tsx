import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from '../contexts/auth'
import Routes from './index'

function AppStack() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes/>
            </AuthProvider>
        </NavigationContainer>
    )
}

export default AppStack