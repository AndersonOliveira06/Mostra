import { Alert, Modal, Text, Image, View, StatusBar } from 'react-native';
import style from './style';
import M_Button from '../M_Button/M_Button';
import M_Input from '../M_Input/M_Input';
import { ScrollView } from 'react-native';
import { useState } from 'react';

import * as RootNavigation from '../../RootNavigation.js';

const M_ProfileModal = ({ modalVisible, setModalVisible }) => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangeName = (value) => {
        setName(value);
    };

    const handleChangeLastName = (value) => {
        setLastName(value);
    };

    const handleChangeEmail = (value) => {
        setEmail(value);
    };

    const handleChangePassword = (value) => {
        setPassword(value);
    };

    const handleChangeConfirmPassword = (value) => {
        setConfirmPassword(value);
    };



    goToProfile = () => {
        RootNavigation.navigate('Profile');
        setModalVisible(!modalVisible);
    }

    return (
        <View style={style.centeredView}>
            <StatusBar backgroundColor={"rgba(0,0,0,0)"} barStyle={"dark-content"} translucent={true} />
            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={style.centeredView}>
                    <View style={style.modalView}>
                        <View style={style.modalHeader}>
                            <Text style={style.modalHeaderText}>Editar perfil</Text>
                            <M_Button
                                action={() => setModalVisible(!modalVisible)}
                                icon={{ name: 'X', size: 40, color: '#0C2F2C' }}
                            />
                        </View>
                        <View style={style.modalBody}>
                            <ScrollView
                                style={style.modalBodyScrollView}
                                contentContainerStyle={style.modalBodyScrollViewContent}
                            >
                                <M_Input
                                    placeholder="Digite seu nome"
                                    value={name}
                                    customStyle={style.input}
                                    onChange={handleChangeName}
                                />
                                <M_Input
                                    placeholder="Digite seu sobrenome"
                                    value={lastName}
                                    customStyle={style.input}
                                    onChange={handleChangeLastName}
                                />
                                <M_Input
                                    placeholder="Digite seu e-mail"
                                    type='email-address'
                                    value={email}
                                    customStyle={style.input}
                                    onChange={handleChangeEmail}
                                />
                                <M_Input
                                    placeholder="Digite sua senha"
                                    password={true}
                                    value={password}
                                    customStyle={style.input}
                                    onChange={handleChangePassword}
                                />
                                <M_Input
                                    placeholder="Confirme sua senha"
                                    password={true}
                                    value={confirmPassword}
                                    customStyle={style.input}
                                    onChange={handleChangeConfirmPassword}
                                />
                            </ScrollView>
                        </View>
                        <View style={style.modalFooter}>
                            <M_Button
                                action={goToProfile}
                                title="Salvar"
                                color="azul"
                                customStyle={style.button}
                                icon={{ name: 'Check', size: 30, color: '#17548C' }}
                            />
                            <M_Button
                                action={() => setModalVisible(!modalVisible)}
                                title="Cancelar"
                                color="amarelo"
                                customStyle={style.button}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default M_ProfileModal;  
