import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      width: '80%',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },

    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        paddingBottom: 15,
        gap: 20,
    },

    modalProfile: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },

    modalProfileImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },

    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0C2F2C',
    },

    modalBody: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    itemBody: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingVertical: 10,
    },

  });

  export default style;