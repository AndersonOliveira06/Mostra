import { View, Text, Image, Pressable, ImageBackground } from 'react-native';
import M_Icon from '../M_Icon/M_Icon';
import M_Button from '../M_Button/M_Button';
import style from './style';

import * as RootNavigation from '../../RootNavigation.js';


const M_BoxLocation = ({ location }) => {

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
                source={location.image}
                imageStyle={{ borderRadius: 20 }}
                resizeMode='cover'
                style={style.background}
            >
                <View style={style.overlay}></View>
                <View style={style.card}>
                    <View style={style.textView}>
                        <Text style={style.locationName}>{location.name}</Text>
                    </View>
                    <View style={style.buttonsView}>
                        <M_Button
                            action={() => { }}
                            customStyle={{width: 50, height: 50}}
                            icon={{ name: "Heart", size: 25, color: '#FFFCEE' }}
                        />
                        {/* <M_Button
                            action={() => { }}
                            customStyle={{width: 50, height: 50}}
                            icon={{ name: "CheckSquare2", size: 25, color: '#FFFCEE' }}
                        /> */}
                        <M_Button
                            action={() => { }}
                            customStyle={{width: 50, height: 50}}
                            icon={{ name: "Share2", size: 25, color: '#FFFCEE' }}
                        />
                    </View>
                </View>
            </ImageBackground>
        </Pressable>
    );
}

export default M_BoxLocation