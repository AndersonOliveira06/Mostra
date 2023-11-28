import React from "react";
import { Pressable, Text } from "react-native";
import M_Icon from "../M_Icon/M_Icon";

import style from "./style";

const M_Button = ({ action, title, color, icon, customStyle }) => {
    const handlePress = () => {
        console.log("Button pressed");
    };

    const getBackgroundColor = () => {
        switch (color) {
            case 'azul':
                return { colorPressed: '#DAE7E9', colorUnpressed: '#A2F4FF', textColor: '#17548C' }
            case 'amarelo':
                return { colorPressed: '#FFEB89', colorUnpressed: '#FDDE47', textColor: '#8C4117' }
            default:
                return { colorPressed: '#ffffff80', colorUnpressed: 'transparent', textColor: '#000' };
        }
    };

    return (
        <Pressable
            onPress={action}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? getBackgroundColor().colorPressed : getBackgroundColor().colorUnpressed,
                },
                style.button,
                customStyle
            ]}
        >
            {icon && <M_Icon name={icon.name} size={icon.size} color={icon.color} />}
            {title ?
                <Text style={[{ color: getBackgroundColor().textColor }, style.title]}>
                    {title}
                </Text>
                : null
            }
        </Pressable>
    );
};

export default M_Button;

