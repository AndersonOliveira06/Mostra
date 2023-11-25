import { View, Text } from 'react-native';
import { Button } from 'react-native';

const Login = ({ navigation }) => {

    const goToHome = () => {
        navigation.navigate('Home');
    };

    return (
        <View>
            <Text>This is Page 01</Text>
            <Button title="Logar" onPress={goToHome} />
        </View>
    );
};

export default Login
