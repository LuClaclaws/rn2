import { View, Text, Pressable, Image } from "react-native"
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomBTN from "./components/CustomBTN"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import Ionicons from "react-native-vector-icons/Ionicons"

const ImageDetails = () => {

    const [selectedAction ,setSelectedAction] = useState<number>(controllersData[0].id)

    const navigation = useNavigation()
    return (
        <View style={{ marginLeft: 16, marginRight: 16, backgroundColor: '#F7F7F7DA' }}>
            <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 16, marginTop: 16, justifyContent: "space-between", alignItems: 'center' }}>
                <Pressable
                    onPress={() => navigation.goBack()}
                    style={{ borderWidth: 1, borderRadius: 9999, padding: 8, borderColor: 'gray' }}
                >
                    <AntDesign name='arrowleft' style={{ fontSize: 26, color: '#4F33FC' }} />

                </Pressable>

                <Text style={{ color: 'black', fontWeight: 'semibold', fontSize: 20, lineHeight: 28 }}>Results</Text>
                <View />

            </View>

            {/* Image */}
            <View style={{ height: 240, paddingTop: 12, paddingBottom: 12, backgroundColor: "white", width: '100%' }}>
                <Image
                    source={{ uri: 'https://placehold.co/1920x1080/png' }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode='contain'
                />
            </View>

            {/* btn */}
            <CustomBTN onPress={() => console.log('re generate')} title='Re-Generate' />
            {/* prompt */}
            <View style={{ width: '100%', paddingBottom: 16, paddingTop: 16, marginTop: 20, backgroundColor: 'white', borderRadius: 12 }}>
                <Text style={{ color: 'black', paddingLeft: 8, paddingRight: 8, fontWeight: 'semibold', fontSize: 18, lineHeight: 28 }}>
                    Your Latest Prompt
                </Text>
            </View>

            {/* controllers */}
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', rowGap: 20, marginTop: 20, alignItems: 'center'}}>
                {
                    controllersData.map((item, index) => (
                        <Pressable onPress={() => setSelectedAction(item.id)} key={index} 
                           style={{ backgroundColor: item.id === selectedAction ? 'blue' : 'white', paddingBottom: 12, paddingTop: 12, paddingLeft: 40, paddingRight: 40, borderRadius: 12}}
                        >
                            {item.icon}
                        </Pressable>
                    ))
                }
            </View>

            <View style={{display: 'flex', flexDirection: 'column', columnGap: 20, marginTop: 20}}>
                {
                    saveOrRepeat.map((item, index) => (
                        <Pressable 
                          key={item.id}
                          style={{backgroundColor: 'white', width: '100%', marginBottom: 8,  paddingBottom: 12, paddingTop: 12,  borderRadius: 12, display: 'flex', flexDirection: 'row'}}
                        >
                            <Text style={{marginLeft: 12}}>
                                {item.icon}
                            </Text>
                            <Text style={{marginLeft: 12, fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                                {item.name}
                            </Text>

                        </Pressable>
                    ))
                }
            </View>
        </View>
    )
}

export default ImageDetails

const controllersData = [
    {
        id: 1,
        icon: <FontAwesome6 name='bookmark' size={28} color={'#ADADAD'}/>
    },
    {
        id: 2,
        icon: <Ionicons name='trash-outline' size={28} color={'#ADADAD'}/>
    },
    {
        id: 3,
        icon: <Ionicons name='share-outline' size={28} color={'#ADADAD'}/>
    }
]

const saveOrRepeat = [
    {
        id: 1,
        name: "Repeat the Prompt",
        icon: <AntDesign name="reload1" size={28} color={`#ADADAD`} />
    },
    {
        id: 2,
        name: "Download",
        icon: <AntDesign name="download" size={28} color={`#ADADAD`} />
    }

]
