import React, { createContext, useState } from "react";
import Base64 from '../utilities/base64'
import api from "../services/api";

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

    function signIn(email: string, password: string) {
        if (!email || !password) return false

        api.post('/users/auth', { email, password })
            .then(response => {
                let tokenData = response.data.token.split(".")[1]
                tokenData = JSON.parse(Base64.atob(tokenData))
                
                const { id, name, email, avatar } = tokenData
                setUser({ id, name, email, avatar })
            })
            .catch(() => {})
    }

    function signOut() {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext