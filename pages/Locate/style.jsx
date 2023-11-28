import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFCEE"
    },

    header: {
        flex: 3,
    },

    imageLocate: {
        flex: 1,
        // position: 'relative'
    },
    
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0, 0.4)",
    },
    
    image:{
        flex: 1,
        justifyContent: "flex-end",
        alignContent: "flex-end",
    },

    locateHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: 20,
    },

    locate: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    
    textLocate:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFCEE",
    },
    
    buttonsView: {
        flex: 1,
        // backgroundColor: "red",
        gap: 2,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },

    image: {
        width: "100%",
        height: "100%",
    },

    content: {
        flex: 8,
        padding: "5%",
        paddingBottom: 0,
        gap: 20,
    },

    scrollContent: {
        gap: 30,
    },
    
    aboutContent: {
        flex: 1,
        // paddingVertical: 20,
    },

    aboutText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#0C2F2C",
    },

    imagesLocate: {
        width: 150,
        height: 150,
        borderRadius: 5,
    },

    actionArea:{
        flex: 1.5,
        flexDirection: "row",
        // backgroundColor: "red",
        paddingHorizontal: "5%",
        // backgroundColor: "red",
        justifyContent: "space-between",
        alignItems: "center",
    },

    placeView: {
        flex: 1
    },

    textStreet:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#FF6915",
    },

    textDistrict:{
        fontSize: 14,
        fontWeight: "normal",
        color: "#0C2F2C",
    },

    buttonAction: {
        flex: 1,
        // height: "100%",
        // width: "50%",
        // marginHorizontal: "5%",
        // height: 60,
        // borderRadius: 10,
        // justifyContent: "center",
        // alignItems: "center",
    },

    descriptionText: {
        fontSize: 16,
        fontWeight: "normal",
        color: "#0C2F2C",
        lineHeight: 24,
        paddingTop: 10,
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