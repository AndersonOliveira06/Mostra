import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#FFFCEE"
    },
    
    container: { 
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    
    banner: {
        width: "90%",
        height: 100,
        resizeMode: "contain",
    },
});

export default style;