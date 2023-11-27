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

    mainText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#FF6915",
    },

    body: {
        flex: 1,
    },

    imageLocate: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0, 0.3)",
        borderRadius: 20,
    },

    image:{
        flex: 1,
        backgroundColor: "#FFFCEE",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },

    buttonsView: {
        // flex: 1,
        flexDirection: "row",
        gap: 5,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },

    image: {
        width: "100%",
        height: "100%",
    },

    content: {
        flex: 3,
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