import { View, Text, FlatList, Image, StatusBar, ImageBackground } from 'react-native';
import style from './style';
import { useEffect, useState } from 'react';
import M_Button from '../../components/M_Button/M_Button';
import M_ProfileModal from '../../components/M_ProfileModal/M_ProfileModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import M_Icon from '../../components/M_Icon/M_Icon';
import M_CardLocation from '../../components/M_CardLocation/M_CardLocation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Locate = ({ navigation, route }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { locate } = route.params;
    const insets = useSafeAreaInsets();

    return (
        <View style={style.container}>
            <StatusBar backgroundColor={"rgba(0,0,0,0)"} barStyle={"light-content"} translucent={true} />
            {/* <View style={[style.header, style.elevationBottom]}>
                <View>
                    <Text style={style.mainText}>Visite um (ou mais) {'\n'}lugares hoje!</Text>

                </View>
                <M_ProfileModal style={{ display: 'none' }} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                <M_Button
                    action={() => setModalVisible(true)}
                    icon={{ name: "UserCog", size: 40, color: '#0C2F2C' }}
                />
            </View> */}
            <View style={style.body}>
                <View style={style.imageLocate}>
                    <ImageBackground
                        source={locate.image}
                        style={style.image}
                        resizeMode='cover'
                    >
                        <View style={style.overlay}></View>
                        <View style={[style.buttonsView, { paddingTop: insets.top, paddingRight: insets.top }]}>
                            <M_Button
                                action={() => { }}
                                customStyle={{ width: 50, height: 50 }}
                                icon={{ name: "Heart", size: 25, color: '#FFFCEE' }}
                            />
                            <M_Button
                                action={() => { }}
                                customStyle={{ width: 50, height: 50 }}
                                icon={{ name: "CheckSquare2", size: 25, color: '#FFFCEE' }}
                            />
                            <M_Button
                                action={() => { }}
                                customStyle={{ width: 50, height: 50 }}
                                icon={{ name: "Share2", size: 25, color: '#FFFCEE' }}
                            />
                        </View>
                    </ImageBackground>
                </View>
                <View style={style.content}>
                    <View style={style.headerBody}>
                        <M_Button
                            action={() => navigation.goBack()}
                            icon={{ name: "ArrowLeft", size: 30, color: '#0C2F2C' }}
                        />

                        <Text style={style.textBody}>{locate.name}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Locate
