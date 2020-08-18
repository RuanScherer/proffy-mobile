import React, { createContext, useState, useEffect, useContext } from "react";
import { View, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Base64 from '../utilities/base64'
import api, { addTokenMiddleware } from "../services/api";

interface AuthContextData {
    signed: boolean,
    user: User | null,
    signIn(email: string, password: string): void,
    signOut(): void
}

interface User {
    id: number,
    name: string,
    email: string,
    avatar: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadStorageData() {
            const storagedUser = await AsyncStorage.getItem('@Proffy:user')
            const storagedToken = await AsyncStorage.getItem('@Proffy:token')

            if (storagedUser && storagedToken) {
                api.defaults.headers.authorization = storagedToken
                addTokenMiddleware(signOut)
                setUser(JSON.parse(storagedUser))
            }
            setLoading(false)
        }

        loadStorageData()
    }, [])

    function signIn(email: string, password: string) {
        if (!email || !password) return false

        api.post('/users/auth', { email, password })
            .then(async response => {
                const { token } = response.data
                let tokenData = token.split(".")[1]
                tokenData = JSON.parse(Base64.atob(tokenData))
                
                const { id, name, email, avatar } = tokenData
                setUser({ id, name, email, avatar })

                api.defaults.headers.authorization = token
                addTokenMiddleware(signOut)

                await AsyncStorage.setItem('@Proffy:user', JSON.stringify({ id, name, email, avatar }))
                await AsyncStorage.setItem('@Proffy:token', token)
            })
            .catch(() => {})
    }

    function signOut() {
        AsyncStorage.clear()
            .then(() => {
                setUser(null)
            })
            .catch(() => {})
    }

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#8257E5" />
            </View>
        )
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}