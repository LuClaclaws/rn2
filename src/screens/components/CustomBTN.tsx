import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

type CustomBtnType = {
    title: string;
    onPress: () => void;
}

const CustomBTN: React.FC<CustomBtnType> = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{backgroundColor: "#4F33FC", width: "95%", padding: 10, borderRadius: '50%', marginTop:20 }}   >
            <Text style={{fontSize: 16, color: 'white', fontWeight: 'semibold', textAlign: 'center'}}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomBTN