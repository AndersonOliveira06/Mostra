import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#FFFCEE"
    },
    
    container: { 
        flex: 1,
        alignItems: "center",
        marginTop: 60,
        gap: 10,
    },

    header: {
        alignSelf: "flex-start",
        marginLeft: 15,
    },
    
    banner: {
        width: "90%",
        height: 100,
        resizeMode: "contain",
    },
});

export default style;