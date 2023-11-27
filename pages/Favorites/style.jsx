import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFCEE"
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