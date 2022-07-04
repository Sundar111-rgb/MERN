import React from 'react';
import CartComp from '../components/CartComp';
import CategoryComp from '../components/CategoryComp';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

function Category({ navigation }, props) {

    const hhh = [
        { id: 1, name: 'Sundar' },
        { id: 2, name: 'Sundar' },
        { id: 3, name: 'Sundar' },
        { id: 4, name: 'Sundar' }
    ]



    return (
        <View style={{ backgroundColor: '#DADADA', flex: 1, paddingTop: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>


                <View style={{ justifyContent: 'flex-start', padding: 10, marginTop: 30 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}><View>
                        <Text style={{ fontSize: 50, fontWeight: 'bold' }}>Fast</Text>
                    </View></TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#FE724C' }}>Food</Text>

                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 20 }}>80 type of pizza</Text>

                    </View>
                </View>
                <View style={{ justifyContent: 'flex-end' }}>
                    <Image source={require('../assets/Pizza.png')} style={{ borderRadius: 10, alignSelf: 'center' }} />

                </View>
            </View>
            <ScrollView>

                {
                    hhh.map(item => {
                        return <CategoryComp image={require('../assets/Parent1.png')} />

                    })
                }
            </ScrollView>
        </View>
    );
}

export default Category;