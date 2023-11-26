import { useEffect, useState, useRef } from 'react';
import { View, Text, Pressable } from 'react-native';

import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    watchPositionAsync,
    reverseGeocodeAsync,
    Accuracy,
} from 'expo-location';

import MapView, { Marker } from 'react-native-maps';
import style from './style';
import M_Button from '../../components/M_Button/M_Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import M_Icon from '../../components/M_Icon/M_Icon';

const Home = ({navigation}) => {
    const [location, setLocation] = useState(null);
    const [street, setStreet] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');


    const mapRef = useRef(null);

    useEffect(() => {
        requestLocationPermission();
    }, []);

    useEffect(() => {
        watchPositionAsync(
            {
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000, // tava 1000
                distanceInterval: 1 //tava 1
            },
            (location) => {
                setLocation(location);
                if (mapRef.current) {
                    mapRef.current.animateCamera({
                        pitch: 30,
                        center: location.coords
                    })
                }
            });
    }, []);

    async function requestLocationPermission() {
        const { granted } = await requestForegroundPermissionsAsync();
        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            const address = await reverseGeocodeAsync(currentPosition.coords);

            setCountry(address[0].country);
            setDistrict(address[0].district);
            setState(address[0].region);
            setStreet(address[0].street);
            setCity(address[0].subregion);

            setLocation(currentPosition);
        }
    }

    goToLocations = () => {
        navigation.navigate('Locations');
    }

    goToFavorites = () => {
        navigation.navigate('Favorites');
    }

    centerMap = () => {
        if (mapRef.current) {
            mapRef.current.animateCamera({
                center: location.coords
            })
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <View style={[style.header, style.elevationBottom]}>
                <View>
                    <Text style={style.cityText}>{city}, {state} | {country}</Text>
                    <Text style={style.streetText}>{street}</Text>
                    <Text style={style.districtText}>{district}</Text>
                </View>
                <M_Button icon={{ name: "UserCog", size: 40, color: '#0C2F2C' }} />
            </View>
            <View>
                {location &&
                    <MapView
                        ref={mapRef}
                        style={style.map}
                        initialRegion={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                            latitudeDelta: 0.001,
                            longitudeDelta: 0.001,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                            }}
                            title="Você está aqui"
                            description="Você está aqui"
                        />
                    </MapView>
                }
            </View>
            <View style={[style.footer, style.elevationTop]}>
                <Pressable
                    onPress={goToLocations}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#EDE8D6' : 'transparent',
                        },
                        style.mainButton,
                    ]}
                >
                    <M_Icon name="Map" size={45} color='#0C2F2C' />
                    <Text style={style.mainButtonText}>Lugares</Text>
                </Pressable>
                <Pressable
                    onPress={centerMap}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#EDE8D6' : 'transparent',
                        },
                        style.mainButton,
                    ]}
                >
                    <M_Icon name="MapPin" size={85} color="#FF6915" /> 
                </Pressable>
                <Pressable
                    onPress={goToFavorites}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#EDE8D6' : 'transparent',
                        },
                        style.mainButton,
                    ]}
                >
                    <M_Icon name="Star" size={45} color='#0C2F2C'/>
                    <Text style={style.mainButtonText}>Favoritos</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Home
