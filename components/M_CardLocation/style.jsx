import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        flex: 1,
        borderBottomColor: "#E5E5E5",
        borderBottomWidth: 1,
        paddingBottom: 20,
        marginVertical: 10,
    },
    locationGroup: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },

    imageView: {
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
    },

    image: {
        flex: 1,
        width: 65,
        height: 65,
        borderRadius: 20,
    },

    textView: {
        width: "50%",
        flexDirection: "row",
    },
    
    locationName: {
        flex: 1,
        fontSize: 18,
        fontWeight: '400',
        color: "#0C2F2C",
    },

    button: {
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    title: {
        fontSize: 20,
        fontWeight: '400',
        color: "#17548C",
    }
})

export default style