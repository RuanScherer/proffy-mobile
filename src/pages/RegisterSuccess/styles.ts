import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        padding: 40
    },

    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        height: 100,
        width: 100,
        marginBottom: 20
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        textAlign: 'center'
    },

    subtitle: {
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10
    },

    button: {
        width: '100%',
        backgroundColor: '#04D361',
        borderRadius: 8,
        padding: 18,
        marginTop: 20,
        alignItems: 'center'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        color: '#FFF'
    }
})

export default styles