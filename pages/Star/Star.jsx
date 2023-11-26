import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { styles } from './style'
import StarService from '../../BACK_END/Service/StarService'

const Star = () => {
    const [stars, setStars] = useState([]);

    useEffect(
        () => {
            StarService.getStars(
                (starsData) => {
                    setStars(starsData)
                }
            )
        },
        []
    )

    return (
        <View>
            <Text>Lista de Estrelas:</Text>
            <FlatList
                data={stars}
                renderItem={
                    ({ item }) => (
                        <View style={styles.starContainer}>
                            <Text>{item.nome}</Text>
                            <Text>{item.descricao}</Text>
                            <View style={styles.imageContainer}>
                                {
                                    item.fotos.map(
                                        (fotoUrl, fotoIndex) => (
                                            <Image
                                                key={fotoIndex}
                                                source={{ uri: fotoUrl }}
                                                style={styles.image}
                                            />
                                        )
                                    )
                                }
                            </View>
                            <Text>Endereço: {item.localizacao.endereco}</Text>
                            <Text>Latitude: {item.localizacao.latitude}</Text>
                            <Text>Longitude: {item.localizacao.longitude}</Text>
                        </View>
                    )
                }
                keyExtractor={
                    (index) => {
                        return index.id
                    }
                }
            />
        </View>
    )
}

export default Star