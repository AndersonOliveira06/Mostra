import { View, Text, FlatList } from 'react-native';
import style from './style';
import { useEffect, useState } from 'react';
import M_Button from '../../components/M_Button/M_Button';
import M_ProfileModal from '../../components/M_ProfileModal/M_ProfileModal';
import { SafeAreaView } from 'react-native-safe-area-context';
import M_Icon from '../../components/M_Icon/M_Icon';
import M_CardLocation from '../../components/M_CardLocation/M_CardLocation';

import StarService from '../../BACK_END/Service/StarService';

const Locations = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [locations, setLocations] = useState([]);

    // Utilize a constante 'locations' no seu código onde for necessário.
    useEffect(() => {
        StarService.getStars((stars) => {
            setLocations(stars)
        })
    }, [])
    return (
        <SafeAreaView style={style.container}>
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
                <View style={style.headerBody}>
                    <M_Button
                        action={() => navigation.goBack()}
                        icon={{ name: "ArrowLeft", size: 30, color: '#0C2F2C' }}
                    />

                    <Text style={style.textBody}>Locais</Text>
                </View>
                <View style={style.list}>
                    <FlatList
                        data={locations}
                        renderItem={({ item }) => <M_CardLocation location={item} />}
                    ></FlatList>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Locations