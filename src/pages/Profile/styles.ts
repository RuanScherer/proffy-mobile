import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        width: '100%',
        padding: 40,
        backgroundColor: '#8257E5',
        alignItems: 'center',
        justifyContent: 'center'
    },

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100
    },

    username: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 24,
        color: '#FFF',
        marginTop: 15,
        marginBottom: 40
    },

    scroll: {
        backgroundColor: '#F0F0F7',
        width: '100%',
        flex: 1
    },

    form: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderColor: '#E6E6F0',
        borderWidth: 1,
        marginTop: -40,
        marginBottom: 30,
        marginHorizontal: 10
    },

    formTitle: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 20,
        color: '#32264D',
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderColor: '#E6E6F0',
        marginBottom: 20
    },

    label: {
        color: '#9C98A6',
        fontFamily: 'Poppins_400Regular'
    },

    input: {
        height: 54,
        backgroundColor: '#FAFAFC',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E6E6F0',
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },

    footer: {
        backgroundColor: '#FAFAFC',
        padding: 20,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopWidth: 1,
        borderTopColor: '#E6E6F0'
    },

    button: {
        backgroundColor: '#04D361',
        height: 56,
        flexDirection: 'row',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16
    }
})

export default styles