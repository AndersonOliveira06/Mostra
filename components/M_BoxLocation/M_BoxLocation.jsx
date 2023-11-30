import { View, Text, Image, Pressable, ImageBackground } from 'react-native';
import M_Icon from '../M_Icon/M_Icon';
import M_Button from '../M_Button/M_Button';
import style from './style';


import * as RootNavigation from '../../RootNavigation.js';


const M_BoxLocation = ({ location, isFavorite }) => {

    const goToLocation = () => {
        RootNavigation.navigate('Locate', { locate: location });
    }

    return (
        <Pressable
            onPress={goToLocation}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#fff' : 'transparent',
                },
                style.cardButton,
            ]}
        >
            <ImageBackground
                source={{ uri: location.fotos[0] }}
                imageStyle={{ borderRadius: 20 }}
                resizeMode='cover'
                style={style.background}
            >
                <View style={style.overlay}></View>
                <View style={style.card}>
                    <View style={style.buttonsView}>
                        {location.isFavorite ?

                            <M_Icon
                                name='Star'
                                size={25}
                                color='#FF6915'
                                fill='#FF6915'
                            />
                            : null
                        }
                        <Image
                            source={require('../../assets/images/checkFilled.png')}
                            style={{ width: 25, height: 25 }}
                        />
                    </View>
                    <View style={style.textView}>
                        <Text style={style.locationName}>{location.nome}</Text>
                    </View>
                </View>
            </ImageBackground>
        </Pressable>
    );
}

export default M_BoxLocation