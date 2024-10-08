import { View, Text, StyleSheet, ScrollView, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
Feather
import CustomBTN from './components/CustomBTN'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../App'


const HomeScreen = () => {

    const [text, setText] = useState("")
    const [textLength, setTextLength] = useState(0)
    const [selectedRatio, setSelectedRatio] = useState(AspectRatioData[0].ratio)


    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'ImageDetails'>>()


    const [size, setSize] = useState({
        width: AspectRatioData[0].width,
        height: AspectRatioData[0].height
    })

    const handleTextChange = (input: string) => {
        if (input.length < 100) {
            setText(input)
            setTextLength(input.length)
        }
    }

    // handle select ratio
    const handleSelectRatio = (aspect: AspectRatioProps) => {
        setSelectedRatio(aspect.ratio)
        setSize({width: aspect.width, height: aspect.height})
    }

    // handleGenerate

    const handleGenerate = async () => {
          // create a request to the backend...
        
    try {
        const response = await fetch('http://10.0.2.2:4000/api/generate', { // replace it with 10.0.2.2
          method: 'POST',
          headers: {
            // it doesn't giving good results because the headers..
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            prompt: text,
            width: size.width,
            height: size.height, 
          }),
        });
        if (!response.ok) {
          console.log('Error fetching DATA', response.status);
        }
        // if it's ok proceed, and set the data to response...
        const data = await response.json();
        console.log('Image generated: ', data);
        navigation.navigate('ImageDetails', {image: data.data, title: text}); // will handle it later....
      } catch (error) {
        console.log('Error fetching data from the backend: ', error);
      }
    }
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: "#f7f7f7da", margin: 4, flex: 1, height: '100%' }}
        >
            <View>
                <View style={{ margin: 5, display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <FontAwesome6 name='people-group' style={{ fontSize: 26, color: '#4F33FC' }} />
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: '20px' }}>
                        <View>
                            <FontAwesome6 name='bell' style={{ fontSize: 24, color: '#000000' }} />
                            <View style={{ position: 'absolute', zIndex: 30, top: 4, width: 4, height: 4, borderRadius: 9999, backgroundColor: 'red' }} />
                        </View>
                        <Pressable style={{ backgroundColor: 'purple', display: 'flex', flexDirection: 'row', padding: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 99999 }}>
                            <FontAwesome6 name='crown' style={{ fontSize: 20, color: '#ffffff' }} />
                            <Text style={{ color: "white", fontWeight: 'bold' }}>PRO</Text>
                        </Pressable>


                    </View>
                </View>
            </View>

            {/* prompt */}

            <View style={{
                height: 300, borderRadius: '24px', backgroundColor: 'white', padding: 16,
                //  filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))'
            }}>

                <Text style={{ color: 'black', fontSize: 20, lineHeight: 32, marginTop: 32, fontWeight: 'semibold' }}>
                    Enter Prompt 1111
                </Text>

                <TextInput
                    placeholder='Type anything...'
                    placeholderTextColor={'#ADADAD'}
                    multiline={true}
                    value={text}
                    onChangeText={handleTextChange}
                    style={{
                        textAlignVertical: 'top', fontSize: 18,
                        lineHeight: 28, fontWeight: 'regular', borderRadius: 8, color: 'black',
                        width: '100%', height: '70%'
                    }}
                />

                  <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                       <AntDesign name="reload1" size={26} color={'#4F33FC'} />
                  <View 
                       style={{display: 'flex', flexDirection: 'row', alignItems: 'center', rowGap: 12}}>
                       <Text style={{fontSize: 12, fontWeight: 'semibold', color: 'gray'}}
                       >{textLength}/100 </Text>
                       <Feather name="x" size={23} color={'#4F33FC'} />
                  </View>
                  </View> 

          
            

            </View>

                  {/* addons */}
                  <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20, justifyContent: 'space-around' }}>
                    {
                        addons.map((item, index) => (

                            <View style={{
                                display: 'flex', flexDirection: 'row', backgroundColor: 'white', alignItems: 'center',
                                columnGap: 12, padding: 16, borderRadius: 16
                                // boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
                            }}
                                key={index}>
                                <View>
                                    {item.icon}
                                </View>

                                <Text style={{ color: 'black', fontSize: 16, lineHeight: 24 }}>
                                    {' '}
                                    {item.title}{' '}
                                </Text>

                            </View>
                        ))
                    }
                </View>

                {/* Aspect Ratio */}
                  <View style={{marginTop: 20, marginBottom: 20, borderRadius: 12, backgroundColor: 'white', paddingTop: 12, paddingBottom: 20, paddingLeft: 16, paddingRight: 16 }}>
                    <Text style={{color: 'black', 	fontSize: 20, lineHeight: 28, marginTop: 12, marginBottom: 12, textTransform: 'capitalize', fontWeight: 'semibold'}}>
                        Aspect Ratio
                    </Text>
                    <View style={{display: 'flex', flexDirection: 'row', 	flexWrap: 'wrap',	columnGap: 20, rowGap: 16 }}>
                        {AspectRatioData.map((item, index) => (
                            <Pressable onPress={() => handleSelectRatio(item)} key={index}
                            style={{ backgroundColor: item.ratio === selectedRatio ? 'blue' : '#E0E0E0', width: '27%', display: 'flex', justifyContent: 'center', 
                            alignItems: 'center', 	borderRadius: 6, padding: 12
                        }}
                            >
                                <Text style={{color: item.ratio === selectedRatio ? 'white' : 'black'}}>{item.ratio}</Text>

                            </Pressable>

                        ))}
                    </View>
                  </View>

                {/* generate btn */}
                <View style={{marginBottom: 20}}>
                    <CustomBTN   
                       onPress={handleGenerate}
                       title='Generate'
                        />

                </View>

        </ScrollView>
    )
}

export default HomeScreen

const addons = [
    {
        title: 'Add Photo',
        icon: <Ionicons
            name='image-outline'
            size={24}
            color='#ADADAD' />
    },
    {
        title: 'Inspiration',
        icon: <Ionicons
            name='lightbulb'
            size={24}
            color='#ADADAD' />
    },
]

type AspectRatioProps = {
    width: number;
    height: number;
    ratio: string;
}

const AspectRatioData: AspectRatioProps[] = [
    {
        width: 256,
        height: 256,
        ratio: '256:256'
    },
    {
        width: 512,
        height: 512,
        ratio: '512:512'
    },
    {
        width: 1024,
        height: 1024,
        ratio: '1024:1024'
    },
    {
        width: 1024,
        height: 1792,
        ratio: '4:7'
    },
    {
        width: 1792,
        height: 1024,
        ratio: '7:4'
    },
]


