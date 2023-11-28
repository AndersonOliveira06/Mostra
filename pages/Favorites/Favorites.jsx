import { View, Text, FlatList } from 'react-native';
import style from './style';
import { useEffect, useState } from 'react';
import M_Button from '../../components/M_Button/M_Button';
import M_ProfileModal from '../../components/M_ProfileModal/M_ProfileModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import M_Icon from '../../components/M_Icon/M_Icon';
import M_CardLocation from '../../components/M_CardLocation/M_CardLocation';
import M_BoxLocation from '../../components/M_BoxLocation/M_BoxLocation';

const Favorites = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const favorites = [
        {
            name: "Casa do Pastor Valdemir",
            image: require('../../assets/images/irmao.jpg'),
            images: [require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg')]
        },
        {
            name: "Casa do Pastor Valdemir",
            image: require('../../assets/images/irmao.jpg'),
            images: [require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg')]
        },
        {
            name: "Casa do Pastor Valdemir",
            image: require('../../assets/images/irmao.jpg'),
            images: [require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg')]
        },
        {
            name: "Casa do Pastor Valdemir",
            image: require('../../assets/images/irmao.jpg'),
            images: [require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg')]
        },
        {
            name: "Casa do Pastor Valdemir",
            image: require('../../assets/images/irmao.jpg'),
            images: [require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg')]
        },
        {
            name: "Casa do Pastor Valdemir",
            image: require('../../assets/images/irmao.jpg'),
            images: [require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg')]
        },
        {
            name: "Casa do Pastor Valdemir",
            image: require('../../assets/images/irmao.jpg'),
            images: [require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg')]
        },
        {
            name: "Casa do Pastor Valdemir",
            image: require('../../assets/images/irmao.jpg'),
            images: [require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg'), require('../../assets/images/irmao.jpg')]
        },
    ];

    return (
        <SafeAreaView style={style.container}>
            {/* <View style={[style.header, style.elevationBottom]}>
                <View>
                    <Text style={style.mainText}>Seus lugares favoritos{'\n'}em um só lugar</Text>

                </View>
                <M_ProfileModal style={{ display: 'none' }} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                <M_Button
                    action={() => setModalVisible(true)}
                    icon={{ name: "UserCog", size: 40, color: '#0C2F2C' }}
                />
            </View> */}
            <View style={style.body}>
                <View style={style.headerBody}>
                    <M_Button
                        action={() => navigation.goBack()}
                        icon={{ name: "ArrowLeft", size: 30, color: '#0C2F2C' }}
                    />

                    <Text style={style.textBody}>Galeria de lugares</Text>
                </View>
                <View style={style.list}>
                    <FlatList
                        horizontal={true}
                        data={favorites}
                        renderItem={({ item }) => <M_BoxLocation location={item}/>}
                    ></FlatList>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Favorites
