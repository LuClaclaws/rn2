import { View, Text, StyleSheet, ScrollView, Pressable} from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'


const HomeScreen = () => {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: "#f7f7f7da", margin: 4, flex: 1, height: '100%'}}
        >
            <View>
                <View style={{margin: 5, display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <FontAwesome6 name='people-group' style={{fontSize: 26, color: '#4F33FC'}}/>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', columnGap: '20px'}}>
                        <View>
                            <FontAwesome6 name='bell' style={{fontSize: 24, color: '#000000'}}/>
                            <View style={{position: 'absolute', zIndex: 30, top: 4, width: 4, height: 4, borderRadius: 9999, backgroundColor: 'red' }} />
                        </View>
                        <Pressable style={{backgroundColor: 'purple', display: 'flex', flexDirection: 'row', padding: 1, justifyContent: 'center', alignItems: 'center',  borderRadius: 99999}}>
                              <FontAwesome6 name='crown' style={{fontSize: 20, color: '#ffffff'}} />
                              <Text style={{color: "white", fontWeight: 'bold'}}>PRO</Text>
                        </Pressable>
                       

                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default HomeScreen