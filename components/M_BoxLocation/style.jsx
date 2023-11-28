import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const style = StyleSheet.create({
    cardButton:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get('window').width - 40,
        backgroundColor: "red",
        justifyContent: "center",
        // paddingHorizontal: 50,
        marginHorizontal: 20,
        marginBottom: 30,
        borderRadius: 20,
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
    
    background:{
        flex: 1,
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end",

    },
    
    card: {
        flex: 1,
        // width: "100%",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingHorizontal: 40,
        paddingVertical: 40,
    },
    
    textView: {
        flex: 3,
        flexDirection: "row",
    },
    
    locationName: {
        flex: 1,
        fontSize: 45,
        fontWeight: 'bold',
        color: "#FFFCEE",
    },
    
    buttonsView:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignSelf: "flex-start",
        gap: 5,
        marginTop: -10,
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
})

export default style