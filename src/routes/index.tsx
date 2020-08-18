import React, { useContext } from 'react'
import AuthContext from '../contexts/auth'
import AuthRoutes from './Auth.routes'
import AppRoutes from './App.routes'

const Routes: React.FC = () => {
    const { signed } = useContext(AuthContext)
    
    return signed ? <AppRoutes/> : <AuthRoutes/> 
}

export default Routes