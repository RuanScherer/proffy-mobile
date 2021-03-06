import React, { useState } from 'react'
import { Modal, View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { useError } from '../../contexts/error'

interface PopupProps {
    title: string,
    message: string,
    callback?(): void
}

const Popup: React.FC<PopupProps> = ({ title, message, callback }) => {
    const { visible, showError } = useError()

    function dismiss() {
        showError(false)
        if (callback) {
            callback()
        }
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}>
            <View style={styles.modal}>
                <View style={styles.modalBox}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <Text style={styles.modalMessage}>{message}</Text>
                    <TouchableOpacity 
                        style={styles.modalButton}
                        activeOpacity={0.5}
                        onPress={dismiss}>
                        <Text style={styles.modalButtonText}>Entendi</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default Popup