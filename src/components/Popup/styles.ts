import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0, 0, 0, .6)"
    },

    modalBox: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    
    modalTitle: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20
    },

    modalMessage: {
        fontSize: 18,
        color: '#6A6180'
    },

    modalButton: {
        width: '100%',
        backgroundColor: '#04D361',
        borderRadius: 8,
        padding: 12,
        marginTop: 15,
        alignItems: 'center',
        alignSelf: 'flex-end'
    },

    modalButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 18
    },
})

export default styles