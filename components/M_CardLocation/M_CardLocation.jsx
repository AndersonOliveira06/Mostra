import { View, Text, Image, Pressable } from 'react-native';
import M_Icon from '../M_Icon/M_Icon';
import M_Button from '../M_Button/M_Button';
import style from './style';

import * as RootNavigation from '../../RootNavigation.js';


const M_CardLocation = ({ location }) => {
    
    const goToLocation = () => {
      RootNavigation.navigate('Locate', {locate: location});
    }

    return (
        <View style={style.card}>
            <View style={style.locationGroup}>
                <View style={style.imageView}>
                    <Image source={{uri: location.fotos[0]}} style={style.image} resizeMode='cover' />
                </View>
                <View style={style.textView}>
                    <Text style={style.locationName}>{location.nome}</Text>
                </View>
            </View>
            <View>
                <Pressable
                    onPress={goToLocation}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#DAE7E9' : '#A2F4FF',
                        },
                        style.button,
                    ]}
                >
                    <M_Icon name="ArrowRight" size={25} color="#17548C" />
                    {/* <Text style={style.title}>
                        Ver mais
                    </Text> */}
                </Pressable>
            </View>
        </View>
    );
}

export default M_CardLocation