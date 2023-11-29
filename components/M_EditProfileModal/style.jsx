import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //   backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        // flex: 1,
        margin: 30,
        backgroundColor: 'white',
        width: '80%',
        height: '70%',
        borderRadius: 20,
        overflow: 'hidden',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    modalHeader: {
        flex: 1,
        paddingHorizontal: 35,
        paddingVertical: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 20,
    },

    modalHeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0C2F2C',
    },

    modalBody: {
        flex: 3,
        width: '100%',
        flexShrink: 0,
    },

    modalBodyScrollView:{
        flex: 1,
        paddingHorizontal: 35,
    },
    
    modalBodyScrollViewContent: {
        justifyContent: 'space-around',
        gap: 15,
    },

    input: {
        width: '100%',
        // marginVertical: 100,
    },

    modalFooter:{
        flex: 1,
        width: '100%',
        paddingHorizontal: 35,
        paddingVertical: 20,
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    button:{
        flex: 1,
        height: 60,
        width: "100%",
        alignItems: "center",
    }

});

export default style;