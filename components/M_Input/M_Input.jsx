import { TextInput } from 'react-native';

import style from './style';

const M_Input = ({ placeholder, type, onChange, password, value, customStyle}) => {
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
            defaultValue={value}
            onChangeText={handleChange}
            style={[style.input, customStyle]}
        />
    );
};

export default M_Input;
