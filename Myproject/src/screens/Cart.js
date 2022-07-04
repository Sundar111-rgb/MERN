import React from 'react';
import CartComp from '../components/CartComp';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-web';

function Cart(props) {

    const hhh = [1, 2]

    const renderItem = () => {
        return <CartComp />
    }
    return (
        <View>
            {
                hhh.map(item => {
                    return <CartComp />
                })
            }

            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', borderColor: '#F1F2F3', borderBottomWidth: 1 }}>
                <View style={{ justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 25, fontWeight: '500' }}>Subtotal</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: 25, fontWeight: '400' }}>$27.30</Text>
                    <Text style={{ fontSize: 17, fontWeight: '500', alignSelf: 'center', color: '#9796A1' }}>{' '}USD</Text>
                </View>
            </View>


            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', borderColor: '#F1F2F3', borderBottomWidth: 1 }}>
                <View style={{ justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 25, fontWeight: '500' }}>Tax and Fees</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: 25, fontWeight: '400' }}>$27.30</Text>
                    <Text style={{ fontSize: 17, fontWeight: '500', alignSelf: 'center', color: '#9796A1' }}>{' '}USD</Text>
                </View>
            </View>

            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', borderColor: '#F1F2F3', borderBottomWidth: 1 }}>
                <View style={{ justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 25, fontWeight: '500' }}>Delivery</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: 25, fontWeight: '400' }}>$27.30</Text>
                    <Text style={{ fontSize: 17, fontWeight: '500', alignSelf: 'center', color: '#9796A1' }}>{' '}USD</Text>
                </View>
            </View>

            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', borderColor: '#F1F2F3', borderBottomWidth: 1 }}>
                <View style={{ justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 25, fontWeight: '500' }}>Total</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: 25, fontWeight: '400', alignSelf: 'center' }}>$27.30</Text>
                    <Text style={{ fontSize: 17, fontWeight: '500', alignSelf: 'center', color: '#9796A1' }}>{' '}USD</Text>
                </View>
            </View>

            <View style={{ alignSelf: 'center', justifyContent: 'center', backgroundColor: '#FE724C', padding: 16, width: '80%', marginTop: 90, borderRadius: 30 }}>
                <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#FFFFFF', fontFamily: 'Sofia Pro' }}>CHECKOUT</Text>
            </View>
        </View>
    );
}

export default Cart;