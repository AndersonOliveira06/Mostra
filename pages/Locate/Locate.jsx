import { View, Text, FlatList, Image, ScrollView, StatusBar, ImageBackground, Pressable } from 'react-native';
import style from './style';
import { useEffect, useState } from 'react';
import M_Button from '../../components/M_Button/M_Button';
import M_ProfileModal from '../../components/M_ProfileModal/M_ProfileModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import M_Icon from '../../components/M_Icon/M_Icon';
import M_CardLocation from '../../components/M_CardLocation/M_CardLocation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as RootNavigation from '../../RootNavigation.js';

import FavoriteService from '../../BACK_END/Service/FavoriteService.js';
import VisitedService from '../../BACK_END/Service/VisitedService.js';

const Locate = ({ navigation, route }) => {
    const { locate } = route.params;

    const [activeHeart, setActiveHeart] = useState(false);
    const [activeCheck, setActiveCheck] = useState(false);

    useEffect(() => {
        const fetchLugaresFavoritos = async () => {
            try {
                await FavoriteService.getLugaresFavoritosByUser((lugaresFavoritos) => {
                    if (lugaresFavoritos.includes(locate.id)) {
                        setActiveHeart(true)
                    }
                });
            } catch (error) {
                console.error('Erro ao buscar lugares favoritos:', error);
            }
        };

        fetchLugaresFavoritos();
    }, []);

    useEffect(() => {
        const fetchLugaresVisitados = async () => {
          try {
            await VisitedService.getLugaresVisitadosByUser((lugaresVisitados) => {
                if(lugaresVisitados.includes(locate.id)){
                    setActiveCheck(true)
                }
            });
          } catch (error) {
            console.error('Erro ao buscar lugares Visitados:', error);
          }
        };
    
        fetchLugaresVisitados();
      }, []); 

    const goToHome = () => {
        RootNavigation.navigate('Home');
    }

    const favoritePlace = () => {
        if (activeHeart) {
            FavoriteService.deleteLugaresFavoritosByUser(locate.id, (message) => {
                console.log(message)
            })
        } else {
            FavoriteService.addFavoritePlace(locate.id, (message) => {
                console.log(message)
            })
        }

        setActiveHeart(!activeHeart)
    }

    const visitePlace = () => {
        if (activeCheck) {
            VisitedService.deleteLugaresVisitadosByUser(locate.id, (message) => {
                console.log(message)
            })
        } else {
            VisitedService.addVisitedPlace(locate.id, (message) => {
                console.log(message)
            })
        }
        setActiveCheck(!activeCheck)
    }

    return (
        <View style={style.container}>
            <StatusBar backgroundColor={"rgba(0,0,0,0)"} barStyle={"light-content"} translucent={true} />
            <View style={style.header}>
                <View style={style.imageLocate}>
                    <ImageBackground
                        source={{ uri: locate.fotos[0] }}
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

                                <Text style={style.textLocate}>{locate.nome}</Text>
                            </View>
                            <View style={style.buttonsView}>
                                <M_Button
                                    action={favoritePlace}
                                    customStyle={{ width: 40, height: 40 }}
                                    icon={{ name: "Star", size: 22, color: '#FF6915', fill: activeHeart ? '#FF6915' : 'transparent' }}
                                />
                                <Pressable
                                    onPress={visitePlace}
                                    style={({ pressed }) => [
                                        {
                                            backgroundColor: pressed ? '#ffffff80' : 'transparent',
                                        },
                                        style.button,
                                        { width: 40, height: 40 }
                                    ]}
                                >
                                    <Image
                                        source={activeCheck ? require('../../assets/images/checkFilled.png') : require('../../assets/images/checkOutline.png')}
                                        style={{ width: 20, height: 20 }}
                                    />
                                </Pressable>
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
                        <Text style={style.descriptionText}>{locate.descricao}</Text>
                    </View>
                    <View style={style.aboutContent}>
                        <Text style={style.aboutText}>Curiosidade</Text>
                        <Text style={style.descriptionText}>{locate.curiosidades}</Text>
                    </View>
                    <View style={style.aboutContent}>
                        <Text style={style.aboutText}>Fotos</Text>
                        <FlatList
                            data={locate.fotos}
                            style={{ flex: 1 }}
                            contentContainerStyle={{ gap: 15, paddingVertical: 15 }}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <Image
                                    source={{ uri: item }}
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
                    <Text style={style.textStreet}>{locate.localizacao.endereco.split('-')[0]}</Text>
                    <Text style={style.textDistrict}>{locate.localizacao.endereco.split('-')[1]}</Text>
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
