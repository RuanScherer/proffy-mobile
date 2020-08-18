import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from '../contexts/auth'
import { ErrorProvider } from "../contexts/error";
import Routes from './index'

function AppStack() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <ErrorProvider>
                    <Routes/>
                </ErrorProvider>
            </AuthProvider>
        </NavigationContainer>
    )
}

export default AppStack