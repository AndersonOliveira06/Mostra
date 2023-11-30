import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFCEE"
    },

    cardFirstTime: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "rgba(0,0,0, 0.05)",
        justifyContent: "center",
        width: Dimensions.get('window').width - 40,
        justifyContent: "center",
        // paddingHorizontal: 50,
        gap: 20,
        marginHorizontal: 20,
        marginBottom: 30,
        borderRadius: 20,
    },

    firstTimeTitle:{
        fontSize: 40,
        width: '90%',
        fontWeight: "bold",
        textAlign: "center",
        color: "#FF6915",
    },
    firstTimeText: {
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: "center",
        color: "#0C2F2C",
    },

    header: {
        paddingHorizontal: "5%",
        height: "13%",
        flexDirection: "row",
        backgroundColor: "#FFFCEE",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        zIndex: 3,
    },

    mainText:{
        fontSize: 28,
        fontWeight: "bold",
        color: "#FF6915",
    },

    body: {
        flex: 1,
    },

    headerBody: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 15,
        gap: 20,
    },

    textBody: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#0C2F2C",
    },

    elevationBottom: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
    },

    elevationTop: {
        shadowColor: "#000",
        shadowOffset: {
            width: -20,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
    },

    list: {
        flex: 1,
        // paddingHorizontal: "5%",
    }

})

export default style;