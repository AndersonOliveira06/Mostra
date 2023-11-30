import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFCEE"
    },

    headerBody: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 15,
        gap: 20,
    },

    body: {
        flex: 1,
        marginTop: -35,
    },
    
    textBody: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#0C2F2C",
    },
    
    photo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    editButtonView: {
        position: "absolute",
        top: 20,
        right: 60,
        zIndex: 1,
    },

    editButton: {
        width: 60,
        height: 60,
        borderRadius: 25,
        backgroundColor: "#FF6915",
    },
    
    formPhotoView: {
        width: 300,
        height: 350,
        borderTopStartRadius: 150,
        borderTopEndRadius: 150,
        overflow: 'hidden',
    },

    formPhoto: {
        width: "100%",
        height: "100%",
    },

    data:{
        flex: 1,
        // borderLeftColor: "#FF6915",
        // borderLeftWidth: 30,
        // borderRightColor: "#FF6915",
        // borderRightWidth: 30,
        gap: 25,
        marginTop: -15,
    },

    dataProfile:{
        alignItems: "center",
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        paddingBottom: 25,
        marginHorizontal: 55,
        borderBottomWidth: 1,
        gap: 2,
    },

    name: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#FF6915",
    },

    email: {
        fontSize: 18,
        color: "#0C2F2C",
    },

    dataLocations:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 25,
    },

    dataLocation:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    label: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#FF6915",
    },

    value: {
        fontSize: 28,
        color: "#0C2F2C",
    },



})

export default style;