import { Alert, Modal, Text, Image, View } from 'react-native';
import style from './style';
import M_Button from '../M_Button/M_Button';

import * as RootNavigation from '../../RootNavigation.js';

const M_ProfileModal = ({ modalVisible, setModalVisible }) => {

  goToProfile = () => {
    RootNavigation.navigate('Profile');
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
                <Image source={require('../../assets/images/irmao.jpg')} style={style.modalProfileImage} />
                <Text style={style.modalTitle}>Valdemir Queiroz</Text>
              </View>
              <M_Button
                action={() => setModalVisible(!modalVisible)}
                icon={{ name: 'X', size: 40, color: '#0C2F2C' }}
              />
            </View>
            <View style={style.modalBody}>
              <M_Button
                action={goToProfile}
                customStyle={{fontWeight: 400 }}
                icon={{ name: 'UserRound', size: 30, color: '#0C2F2C' }}
                title="Configurar perfil"
              />
              <M_Button
                customStyle={{ marginLeft: -4.5, fontWeight: 400 }}
                action={() => {}}
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
