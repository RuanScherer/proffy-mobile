import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    banner: {
        height: '40%',
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bannerBackground: {
        flex: 1,
        justifyContent: 'center'
    },

    logo: {
        resizeMode: 'contain'
    },

    slogan: {
        color: '#D4C2FF',
        fontSize: 16,
        marginTop: 10,
        width: 180
    },

    loginForm: {
        height: '60%',
        padding: 20,
        backgroundColor: '#F0F0F7',
        justifyContent: 'center',
        alignItems: 'center'
    },

    spaced: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24
    },

    linkText: {
        color: '#8257E5'
    },

    input: {
        height: 65,
        width: '100%',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        borderColor: '#E6E6F0',
        borderWidth: 0.5,
        paddingHorizontal: 16
    },

    firstInput: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginTop: 15
    },

    lastInput: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        marginBottom: 15
    },

    button: {
        width: '100%',
        backgroundColor: '#04D361',
        borderRadius: 8,
        padding: 18,
        marginTop: 20,
        alignItems: 'center'
    },

    disabledButton: {
        backgroundColor: '#DCDCE5',
        color: '#9C98A6'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 18
    },

    text: {
        color: '#9C98A6'
    }
})

export default styles