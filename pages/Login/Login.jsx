import { useState } from 'react';
import { View, Image, ImageBackground } from 'react-native';
import M_Button from '../../components/M_Button/M_Button';
import M_Input from '../../components/M_Input/M_Input';
import UsuarioService from "../../BACK_END/Service/UsuarioService"

import style from './style';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (value) => {
        setEmail(value);
    };

    const handleChangePassword = (value) => {
        setPassword(value);
    }

    const goToHome = () => {
        navigation.navigate('Home');
    };

    const goToRegister = () => {
        navigation.navigate('Register');
    };

    const loginAction = () => {
        UsuarioService.signIn(
            email,
            password,
            (userCredential) => {
                console.log(userCredential)
                goToHome()
            }
        )
    }


    return (
        <ImageBackground
            source={require('../../assets/images/bgImage.png')}
            style={style.background}
        >
            <View style={style.container}>
                <Image
                    source={require('../../assets/images/completeType.png')}
                    style={style.banner}
                ></Image>
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
                <M_Button
                    title="Entrar"
                    action={loginAction}
                    customStyle={{minWidth: 200}}
                    icon = {{name: 'LogIn', size: 30, color: '#8C4117'}}
                    color="amarelo"
                />
                <M_Button
                    title="Criar conta"
                    action={goToRegister}
                    customStyle={{minWidth: 200}}
                    icon = {{name: 'Plus', size: 30, color: '#17548C'}}
                    color="azul"
                />
            </View>
        </ImageBackground>
    );
};

export default Login
