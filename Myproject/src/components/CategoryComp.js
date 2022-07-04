import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

function CategoryComp(props) {
    return (
        <View style={{
            justifyContent: 'center', backgroundColor: '#fff',
            borderRadius: 10,
            marginTop: 10, width: '90%',
            alignSelf: 'center'
        }}>
            <View style={{

                // justifyContent: 'center',
                // alignItems: 'center'

            }}>
                <Image source={props.image} style={{ borderRadius: 10, alignSelf: 'center', resizeMode: 'contain', }} />
                <View style={{ position: 'absolute', backgroundColor: '#fff', top: 10, borderRadius: 20, padding: 10, left: 10, flexDirection: 'row' }}>
                    <Text style={{
                        color: '#FE724C',
                        fontWeight: 'bold'
                    }}>$</Text>
                    <Text style={{
                        color: '#000',
                        fontWeight: 'bold'
                    }}>10.35</Text>
                </View>
                <View style={{ position: 'absolute', backgroundColor: '#fff', bottom: -13, borderRadius: 20, padding: 10, left: 10, flexDirection: 'row' }}>

                    <Text>4.5</Text>
                    <Image source={require('../assets/star.png')} style={{ borderRadius: 10, alignSelf: 'center' }} />
                    <Text>(25+)</Text>

                </View>
            </View>
            <View style={{ padding: 10, backgroundColor: '#fff', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                <Text style={{
                    color: '#000',
                    fontWeight: 'bold'
                }}>Chicken Hawaiiyan</Text>
                <Text style={{
                    color: '#000',
                    fontWeight: '400'
                }}>Chicken, Cheese pineapple</Text>
            </View>
        </View>
    );
}

export default CategoryComp;