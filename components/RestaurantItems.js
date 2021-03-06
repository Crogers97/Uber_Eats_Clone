import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export const localRestaurants = [
    {
        name: "Beachside Bar",
        image_url:
            "https://mycyprusinsider.com/wp-content/uploads/2018/07/Elya-beach.jpg",
        categories: ["Cafe", "Bar"],
        price: "££",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Benihana",
        image_url:
            "https://www.benihanainternational.com/wp-content/uploads/2019/04/Benihana-Piccadilly-4-1-1024x684.jpg",
        categories: ["Cafe", "Bar"],
        price: "££",
        reviews: 1244,
        rating: 3.7,
    },
    {
        name: "India's Grill",
        image_url:
            "https://resizer.otstatic.com/v2/photos/wide-huge/1/24166380.jpg",
        categories: ["Indian", "Bar"],
        price: "££",
        reviews: 700,
        rating: 4.9,
    },
]



export default function RestaurantItems(props) {
    return (
        <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
            {props.restaurantData.map((restaurant, index) => (
                <View key = {index} style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}>
                    <RestaurantImage image={restaurant.image_url}/>
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
                </View>
            ))}
        </TouchableOpacity>
    )
}

const RestaurantImage = (props) => (
    <>
        <Image
            source={{
                uri: props.image
            }}
            style={{ width: "100%", height: 180 }}

        />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name="heart-outline" size={25} color='#fff' />
        </TouchableOpacity>
    </>
);


const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.name}</Text>
        <Text style={{ fontSize: 13, color: 'gray' }}>30-45 min</Text>
        <View style={{
            backgroundColor: 'white',
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
        }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
)