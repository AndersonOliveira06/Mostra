import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
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
    },

    cityText: {
        fontSize: 14,
        letterSpacing: 2,
        fontWeight: "100"
    },

    streetText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FF6915",
    },

    districtText: {
        fontSize: 18,
        color: "#0C2F2C",
    },

    map: {
        width: "100%",
        height: "75%",
        flexGrow: 1,
    },

    footer: {
        height: "12%",
        flexDirection: "row",
        justifyContent: "center",
        gap: 40,
        alignItems: "center",
        backgroundColor: "#FFFCEE",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },

    mainButton: {
        width: 80,
        height: 80,
        position: "relative",
        top: -50,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },

    mainButtonText: {
        fontSize: 14,
        backgroundColor: "#EDE8D6",
        paddingHorizontal: 10,
        borderRadius: 15,
        paddingVertical: 2,
        position: "absolute",
        fontWeight: "bold",
        bottom: -30,
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

})

export default style;