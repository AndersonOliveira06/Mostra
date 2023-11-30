import { Alert, Modal, Text, Image, View } from 'react-native';
import style from './style';
import M_Button from '../M_Button/M_Button';

import * as RootNavigation from '../../RootNavigation.js';

import UsuarioService from '../../BACK_END/Service/UsuarioService';

const M_ProfileModal = ({ modalVisible, setModalVisible, user }) => {

  const goToProfile = () => {
    RootNavigation.navigate('Profile');
    setModalVisible(!modalVisible);
  }

  const signOut = () => {
    UsuarioService.signOut((message) => {
      console.log(message)
      RootNavigation.navigate('Login');
    });
    setModalVisible(!modalVisible);
  }

  return (
    <View style={style.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <View style={style.modalHeader}>
              <View style={style.modalProfile}>
                <Image source={{ uri: user.photoURL }} style={style.modalProfileImage} />
                <Text style={style.modalTitle}>{user.displayName}</Text>
              </View>
              <M_Button
                action={() => setModalVisible(!modalVisible)}
                icon={{ name: 'X', size: 40, color: '#0C2F2C' }}
              />
            </View>
            <View style={style.modalBody}>
              <M_Button
                action={goToProfile}
                customStyle={{ fontWeight: 400 }}
                icon={{ name: 'UserRound', size: 30, color: '#0C2F2C' }}
                title="Configurar perfil"
              />
              <M_Button
                customStyle={{ marginLeft: -4.5, fontWeight: 400 }}
                action={signOut}
                icon={{ name: 'LogOut', size: 40, color: '#0C2F2C' }}
                title="Sair da conta"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default M_ProfileModal;  
