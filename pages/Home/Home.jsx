import { useEffect, useState, useRef } from 'react';
import { View, Text, Pressable, Image, StatusBar, ToastAndroid } from 'react-native';

import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    watchPositionAsync,
    reverseGeocodeAsync,
    Accuracy,
} from 'expo-location';

import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import style from './style';
import M_Button from '../../components/M_Button/M_Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import M_Icon from '../../components/M_Icon/M_Icon';

import AddressLoader from '../../components/loadingComponents/AddressLoader/AddressLoader';
import M_ProfileModal from '../../components/M_ProfileModal/M_ProfileModal';

const Home = ({ navigation }) => {
    const styleMap = [
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        }
    ]

    let markers = [
        { latitude: -5.19845843651499, longitude: -39.2959195081123, title: 'Igreja da Matriz', description: 'Igrejinha só o show da cidade', image: require('../../assets/images/igreja.png') },
        { latitude: -5.198914163000362, longitude: -39.29808209893969, title: 'Antonio', description: 'Conselhos conselheiros aa', image: require('../../assets/images/antonio.png') }
    ]

    const [location, setLocation] = useState(null);
    const [street, setStreet] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const [loadingAddress, setLoadingAddress] = useState(true);

    const [modalVisible, setModalVisible] = useState(false);


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

            setLoadingAddress(false);

            setCountry(address[0].country);
            setDistrict(address[0].district);
            setState(address[0].region);
            setStreet(address[0].street);
            setCity(address[0].subregion);

            setLocation(currentPosition);
        }
    }

    showToast = () => {
        ToastAndroid.showWithGravityAndOffset(
            'A wild toast appeared!',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            105,
            -500,
          );
      
    };

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
            showToast();
        }
    }

    const renderMarkers = () => {
        return markers.map((marker, index) => {
            return (
                <View key={index}>
                    <Marker
                        coordinate={{
                            latitude: marker.latitude,
                            longitude: marker.longitude,
                        }}
                        title={marker.title}
                        description={marker.description}
                    >
                        <Image
                            source={marker.image}
                            style={style.marker}
                            resizeMode='contain'
                        />
                    </Marker>
                </View>
            );
        })
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={"#FFFCEE"} barStyle={'dark-content'} />
            <View style={[style.header, style.elevationBottom]}>
                {loadingAddress ? <AddressLoader /> : null}
                <View>
                    <Text style={style.cityText}>{city}, {state} | {country}</Text>
                    <Text style={style.streetText}>{street}</Text>
                    <Text style={style.districtText}>{district}</Text>
                </View>
                <M_ProfileModal style={{ display: 'none' }} modalVisible={modalVisible} setModalVisible={setModalVisible} />
                <M_Button
                    action={() => setModalVisible(true)}
                    icon={{ name: "UserCog", size: 40, color: '#0C2F2C' }}
                />
            </View>
            <View style={style.mapView}>
                {location &&
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        loadingEnabled={true}
                        customMapStyle={styleMap}
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
                        {renderMarkers()}
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
                    <Image
                        source={require('../../assets/images/Icon.png')}
                        style={{ width: 95, height: 95 }}
                    />
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
                    <M_Icon name="Star" size={45} color='#0C2F2C' />
                    <Text style={style.mainButtonText}>Favoritos</Text>
                </Pressable>
            </View>
        </SafeAreaView >
    );
};

export default Home
