import React, { createContext, useContext, useState } from 'react'

interface ErrorContextData {
    visible: boolean,
    showError(visible: boolean): void
}

const ErrorContext = createContext<ErrorContextData>({} as ErrorContextData)

export const ErrorProvider: React.FC = ({ children }) => {
    const [visible, setVisible] = useState(false)

    function showError(isVisible: boolean) {
        setVisible(isVisible)
    }
    
    return (
        <ErrorContext.Provider value={{ visible, showError }}>
            {children}
        </ErrorContext.Provider>
    )
}

export function useError() {
    const context = useContext(ErrorContext)
    return context
}