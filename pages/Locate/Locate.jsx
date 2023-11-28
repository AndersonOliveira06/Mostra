import { View, Text, FlatList, Image, ScrollView, StatusBar, ImageBackground } from 'react-native';
import style from './style';
import { useEffect, useState } from 'react';
import M_Button from '../../components/M_Button/M_Button';
import M_ProfileModal from '../../components/M_ProfileModal/M_ProfileModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import M_Icon from '../../components/M_Icon/M_Icon';
import M_CardLocation from '../../components/M_CardLocation/M_CardLocation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as RootNavigation from '../../RootNavigation.js';

const Locate = ({ navigation, route }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { locate } = route.params;
    const insets = useSafeAreaInsets();

    goToHome = () => {
        RootNavigation.navigate('Home');
    }


    return (
        <View style={style.container}>
            <StatusBar backgroundColor={"rgba(0,0,0,0)"} barStyle={"light-content"} translucent={true} />
            <View style={style.header}>
                <View style={style.imageLocate}>
                    <ImageBackground
                        source={locate.image}
                        style={style.image}
                        resizeMode='cover'
                    >
                        <View style={style.overlay}></View>
                        <View style={style.locateHeader}>
                            <View style={style.locate}>
                                <M_Button
                                    action={() => navigation.goBack()}
                                    icon={{ name: "ArrowLeft", size: 30, color: '#FFFCEE' }}
                                />

                                <Text style={style.textLocate}>{locate.name}</Text>
                            </View>
                            <View style={style.buttonsView}>
                                <M_Button
                                    action={() => { }}
                                    customStyle={{ width: 40, height: 40 }}
                                    icon={{ name: "Heart", size: 22, color: '#FFFCEE' }}
                                />
                                <M_Button
                                    action={() => { }}
                                    customStyle={{ width: 40, height: 40 }}
                                    icon={{ name: "CheckSquare2", size: 22, color: '#FFFCEE' }}
                                />
                                <M_Button
                                    action={() => { }}
                                    customStyle={{ width: 40, height: 40 }}
                                    icon={{ name: "Share2", size: 22, color: '#FFFCEE' }}
                                />
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>
            <View style={style.content}>
                <ScrollView
                    // style={style.scrollContent}
                    contentContainerStyle={style.scrollContent}
                >
                    <View style={style.aboutContent}>
                        <Text style={style.aboutText}>Sobre</Text>
                        <Text style={style.descriptionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, deserunt saepe harum, repudiandae molestias impedit illum facilis inventore quam ab veritatis, quo similique nihil minus quasi perferendis deleniti quibusdam. Sit.</Text>
                    </View>
                    <View style={style.aboutContent}>
                        <Text style={style.aboutText}>Curiosidade</Text>
                        <Text style={style.descriptionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, deserunt saepe harum, repudiandae molestias impedit illum facilis inventore quam ab veritatis, quo similique nihil minus quasi perferendis deleniti quibusdam. Sit.</Text>
                    </View>
                    <View style={style.aboutContent}>
                        <Text style={style.aboutText}>Fotos</Text>
                        <FlatList
                            data={locate.images}
                            style={{ flex: 1 }}
                            contentContainerStyle={{ gap: 15, paddingVertical: 15 }}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <Image
                                    source={item}
                                    style={style.imagesLocate}
                                />
                            )}
                        >
                        </FlatList>
                    </View>
                </ScrollView>
            </View>
            <View style={style.actionArea}>
                <View style={style.placeView}>
                    <Text style={style.textStreet}>Rua Salvação Divina</Text>
                    <Text style={style.textDistrict}>Bairro Paraíso</Text>
                </View>
                <M_Button
                    action={goToHome}
                    customStyle={style.buttonAction}
                    color={"azul"}
                    title={"Visitar lugar"}
                    icon={{ name: "ArrowRight", size: 22, color: '#17548C' }}
                />
            </View>
        </View>
    );
};

export default Locate
