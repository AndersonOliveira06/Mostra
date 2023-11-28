import { useState } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import M_Button from '../../components/M_Button/M_Button';
import M_Input from '../../components/M_Input/M_Input';

import style from './style';

const Register = ({ navigation }) => {
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

    const goToBack = () => {
        navigation.goBack()
    };

    const goToHome = () => {
        navigation.navigate('Home');
    }

    return (
        <ImageBackground
            source={require('../../assets/images/bgImage.png')}
            style={style.background}
        >
            <View style={style.container}>
                <View style={style.header}>
                    <M_Button
                        action={goToBack}
                        icon={{name: "ArrowLeft", size: 40, color: "#000"}}
                    />
                </View>
                <Image
                    source={require('../../assets/images/completeType.png')}
                    style={style.banner}
                ></Image>
                <M_Input
                    placeholder="Digite seu nome"
                    onChange={handleChangeName}
                />
                <M_Input
                    placeholder="Digite seu sobrenome"
                    onChange={handleChangeLastName}
                />
                <M_Input
                    placeholder="Digite seu e-mail"
                    type='email-address'
                    onChange={handleChangeEmail}
                />
                <M_Input
                    placeholder="Digite sua senha"
                    password={true}
                    onChange={handleChangePassword}
                />
                <M_Input
                    placeholder="Confirme sua senha"
                    password={true}
                    onChange={handleChangeConfirmPassword}
                />
                <M_Button
                    title="Cadastrar"
                    action={goToHome}
                    color="azul"
                />
            </View>
        </ImageBackground>
    );
};

export default Register;