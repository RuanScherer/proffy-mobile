import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#F0F0F7',
        padding: 40
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 40
    },

    countersBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    counter: {
        width: 6,
        height: 6,
        borderRadius: 6,
        marginHorizontal: 2,
        backgroundColor: '#C1BCCC'
    },

    selectedCounter: {
        backgroundColor: '#8257E5'
    },

    title: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 32,
        color: '#32264D',
        lineHeight: 42
    },

    subtitle: {
        fontFamily: 'Poppins_400Regular',
        lineHeight: 26,
        fontSize: 16,
        marginTop: 10
    },

    formTitle: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        color: '#32264D',
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
        marginTop: 5,
        alignItems: 'center'
    },

    disabledButton: {
        backgroundColor: '#DCDCE5',
        color: '#9C98A6'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        color: '#FFF'
    }
})

export default styles