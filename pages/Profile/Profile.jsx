import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import UsuarioService from '../../BACK_END/Service/UsuarioService'

const Profile = () => {
    const [accountInfo, setAccountInfo] = useState(null);

    useEffect(
        () => {
            const accountInfo = UsuarioService.getAccountInfo()
            setAccountInfo(accountInfo)
        },
        []
    )

    return (
        <View>
            {accountInfo ? (
                <View>
                    <Image source={{ uri: accountInfo.photoURL }} style={{ width: 50, height: 50 }} />
                    <Text>{accountInfo.displayName}</Text>
                    <Text>{accountInfo.email}</Text>
                    <Text>{accountInfo.uid}</Text>
                </View>
            ) : (
                <Text>Carregando informações da conta...</Text>
            )}
        </View>
    )
}

export default Profile
