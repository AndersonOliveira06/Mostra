import { TextInput } from 'react-native';

import style from './style';

const M_Input = ({ placeholder, type, onChange, password}) => {
    const handleChange = (value) => {
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={type}
            secureTextEntry={password}
            onChangeText={handleChange}
            style={style.input}
        />
    );
};

export default M_Input;
