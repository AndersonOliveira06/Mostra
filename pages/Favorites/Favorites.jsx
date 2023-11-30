import { View, Text, FlatList } from 'react-native';
import style from './style';
import { useEffect, useState } from 'react';
import M_Button from '../../components/M_Button/M_Button';
import M_ProfileModal from '../../components/M_ProfileModal/M_ProfileModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import M_Icon from '../../components/M_Icon/M_Icon';
import M_CardLocation from '../../components/M_CardLocation/M_CardLocation';
import M_BoxLocation from '../../components/M_BoxLocation/M_BoxLocation';
import FavoriteService from '../../BACK_END/Service/FavoriteService';
import VisitedService from '../../BACK_END/Service/VisitedService';
import BoxLoader from '../../components/loadingComponents/BoxLoader/BoxLoader';

const Favorites = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [visiteds, setVisiteds] = useState([]);
    const [loadVisiteds, setLoadVisiteds] = useState(true);
    const [firstTime, setFirstTime] = useState(false);

    useEffect(() => {
        const fetchLugaresVisitados = async () => {
            try {
                await VisitedService.getLugaresVisitadosByUser(async (idLugaresVisitados) => {
                    if (idLugaresVisitados.length === 0) {
                        setFirstTime(true)
                    }
                    await FavoriteService.getLugaresFavoritosByUser(async (idLugaresFavoritados) => {
                        await FavoriteService.getLugaresFavoritosById(idLugaresFavoritados, async (lugaresFavoritados) => {
                            await VisitedService.getLugaresVisitadosById(idLugaresVisitados, async (lugaresVisitados) => {
                                let lugaresVisitadosFavoritados = lugaresVisitados.map(lugarVisitado => {
                                    let isFavorite = false

                                    for (lugar of lugaresFavoritados) {
                                        if (lugar.id === lugarVisitado.id) {
                                            isFavorite = true
                                        }
                                    }
                                    return { ...lugarVisitado, isFavorite };
                                });

                                setVisiteds(lugaresVisitadosFavoritados)
                                setLoadVisiteds(false)
                            });
                        })
                    })
                });
            } catch (error) {
                console.error('Erro ao buscar lugares visitados:', error);
            }
        };

        fetchLugaresVisitados();
    }, [])



    return (
        <SafeAreaView style={style.container}>
            <View style={style.body}>
                <View style={style.headerBody}>
                    <M_Button
                        action={() => navigation.goBack()}
                        icon={{ name: "ArrowLeft", size: 30, color: '#0C2F2C' }}
                    />

                    <Text style={style.textBody}>Carimbo de viagens</Text>
                </View>
                <View style={style.list}>
                    {
                        firstTime ?
                            <View style={style.cardFirstTime}>
                                <Text style={style.firstTimeTitle}>Hmm... Parece que você ainda não visitou nada</Text>
                                <Text style={style.firstTimeText}>Vá em Locais, no menu, e visite algo agora!</Text>
                            </View>
                            :
                            loadVisiteds ?
                                <BoxLoader />
                                :
                                <FlatList
                                    horizontal={true}
                                    data={visiteds}
                                    renderItem={({ item }) => <M_BoxLocation location={item} />}
                                ></FlatList>
                    }
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Favorites
