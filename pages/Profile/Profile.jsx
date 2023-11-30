import { View, Text, Image } from 'react-native';
import { useState, useEffect } from 'react';
import style from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import M_Button from '../../components/M_Button/M_Button';
import M_ProfileModal from '../../components/M_EditProfileModal/M_EditProfileModal';

import UsuarioService from '../../BACK_END/Service/UsuarioService';

import FavoriteService from '../../BACK_END/Service/FavoriteService';
import VisitedService from '../../BACK_END/Service/VisitedService';

const Profile = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [user, setUser] = useState({});
    const [favoriteds, setFavoriteds] = useState(0);
    const [visiteds, setVisiteds] = useState(0);

    useEffect(() => {
        const fetchLugaresFavoritos = async () => {
            try {
                await FavoriteService.getLugaresFavoritosByUser((lugaresFavoritos) => {
                    setFavoriteds(lugaresFavoritos.length)
                });
            } catch (error) {
                console.error('Erro ao buscar lugares favoritos:', error);
            }
        };

        fetchLugaresFavoritos();
    })

    useEffect(() => {
        const fetchLugaresVisitados = async () => {
            try {
                await VisitedService.getLugaresVisitadosByUser((lugaresVisitados) => {
                    setVisiteds(lugaresVisitados.length)
                });
            } catch (error) {
                console.error('Erro ao buscar lugares visitados', error);
            }
        };

        fetchLugaresVisitados();
    }, [])

    useEffect(() => {
        setUser(UsuarioService.getAccountInfo())
    }, [])

    const image = require("../../assets/images/base.png");

    goBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={style.headerBody}>
                <M_Button
                    action={() => navigation.goBack()}
                    icon={{ name: "ArrowLeft", size: 30, color: '#0C2F2C' }}
                />

                <Text style={style.textBody}>Perfil</Text>
            </View>
            <View style={style.body}>
                <View style={style.photo}>
                    <View style={style.editButtonView}>
                        <M_ProfileModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
                        <M_Button
                            action={() => { setModalVisible(true) }}
                            customStyle={style.editButton}
                            icon={{ name: "PenSquare", size: 30, color: 'white' }}
                        />
                    </View>
                    <View style={style.formPhotoView}>
                        <Image source={{ uri: user.photoURL }} style={style.formPhoto} />
                    </View>
                </View>
                <View style={style.data}>
                    <View style={style.dataProfile}>
                        <Text style={style.name}>{user.displayName}</Text>
                        <Text style={style.email}>{user.email}</Text>
                    </View>
                    <View style={style.dataLocations}>
                        <View style={style.dataLocation}>
                            <Text style={style.label}>ESTRELAS ALCANÇADAS</Text>
                            <Text style={style.value}>{visiteds} stars</Text>
                        </View>
                        <View style={style.dataLocation}>
                            <Text style={style.label}>ESTRELAS FAVORITAS</Text>
                            <Text style={style.value}>{favoriteds} stars</Text>
                        </View>
                        <View style={style.dataLocation}>
                            <Text style={style.label}>DISTÂNCIA PERCORRIDA</Text>
                            <Text style={[style.value, {fontSize: 12, marginVertical: 5}]}>Feature em desenvolvimento</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Profile
