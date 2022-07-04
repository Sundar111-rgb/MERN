import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';

function CartComp(props) {


    return (
        <View
            style={{
                flexDirection: 'row',
                borderColor: 'red',
                // borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 30,
                height: 30
            }}
        >
            <View style={{
                resizeMode: 'contain',
            }}>
                <Image source={require('../assets/Cokkies.png')} style={{ borderRadius: 10 }} />
            </View>
            <View style={{ paddingLeft: 15 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Red n hot pizza</Text>
                <Text style={{ fontSize: 16, marginVertical: 5 }}>Spicy Chicken Beef</Text>
                <Text style={{
                    color: '#FE724C',
                    fontFamily: 'Sofia Pro',
                    // fontstyle: 'normal',
                    fontWeight: 'bold',
                    fontsize: 16,
                    lineheight: 16,

                }}>$15.30</Text>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop: 0 }}>
                <View style={{ alignItems: 'flex-end', }}>
                    <Image source={require('../assets/delete.png')} style={{ margin: 10, marginTop: 30 }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 30, alignItems: 'center' }}>
                    <Image source={require('../assets/CircleMinus.png')} style={{
                        // resizeMode: 'contain',
                        width: 40,
                        height: 60,
                        marginTop: 25
                    }} />
                    <Text style={{ width: 30, height: 60, textAlign: 'center', alignSelf: 'center', textAlignVertical: 'center' }}>02</Text>
                    <Image source={require('../assets/CirclePlus.png')} style={{
                        resizeMode: 'contain',
                        width: 40,
                        height: 40, marginTop: 10

                    }} />
                </View>
            </View>

        </View>
    );
}

export default CartComp;