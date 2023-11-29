import { View, Text, Image } from 'react-native';
import { useState } from 'react';
import style from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import M_Button from '../../components/M_Button/M_Button';
import M_ProfileModal from '../../components/M_EditProfileModal/M_EditProfileModal';
// import MaskedView from '@react-native-masked-view/masked-view';

const Profile = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const user = {
        nome: "Valdemir Queiroz",
        email: "valdemasgloria@jc.com",
        image: require("../../assets/images/irmao.jpg"),
    }

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
                            action={() => {setModalVisible(true)}}
                            customStyle={style.editButton}
                            icon={{ name: "PenSquare", size: 30, color: 'white' }}
                        />
                    </View>
                    <View style={style.formPhotoView}>
                        <Image source={user.image} style={style.formPhoto} />
                    </View>
                </View>
                <View style={style.data}>
                    <View style={style.dataProfile}>
                        <Text style={style.name}>{user.nome}</Text>
                        <Text style={style.email}>{user.email}</Text>
                    </View>
                    <View style={style.dataLocations}>
                        <View style={style.dataLocation}>
                            <Text style={style.label}>ESTRELAS ALCANÇADAS</Text>
                            <Text style={style.value}>9 stars</Text>
                        </View>
                        <View style={style.dataLocation}>
                            <Text style={style.label}>ESTRELAS FAVORITAS</Text>
                            <Text style={style.value}>9 stars</Text>
                        </View>
                        <View style={style.dataLocation}>
                            <Text style={style.label}>DISTÂNCIA PERCORRIDA</Text>
                            <Text style={style.value}>100 Km</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Profile
