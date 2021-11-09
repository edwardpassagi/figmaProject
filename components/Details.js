import React from 'react';
import {View, Text, StyleSheet, ImageBackgroundBase, ImageBackground, Dimensions, TouchableOpacity, Alert} from 'react-native'
import colors from '../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';

import {
    useFonts,
    Lato_400Regular,
    Lato_700Bold
  } from '@expo-google-fonts/lato';

import AppLoading from 'expo-app-loading';

const height = Dimensions.get("window").height;
const Details = ({route, navigation}) => {
    const {item} = route.params;
    let [fontsLoaded] = useFonts({
        Lato_400Regular,
        Lato_700Bold,
    });

    const createBookedAlert = () => {
        Alert.alert(
            "You've booked a trip",
            "A confirmation email will be sent shortly."
        );
    }
    
    if (!fontsLoaded) {
        return <AppLoading/>
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                source={item.imageBig}
                style={styles.backgroundImage}
            > 
                {/* Back Button */}
                <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={32} color={colors.white}/>
                </TouchableOpacity>
                
                <View style={styles.titlesWrapper}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.locationWrapper}>
                        <Entypo name="location-pin" size={24} color={colors.white} />
                        <Text style={styles.locationText}>{item.location}</Text>
                    </View>
                </View>   
            </ImageBackground>

            {/* Description Segment */}
            <View style={styles.descriptionWrapper}>
                {/* Like icon */}
                <View style={styles.heartWrapper}>
                    <Entypo name="heart" size={32} color={colors.orange}/>
                </View>
                {/* Title and description */}
                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                </View>

                {/* Informations */}
                <View style={styles.infoWrapper}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>PRICE</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>${item.price}</Text>
                            <Text style={styles.infoSubText}>/person</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>RATING</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>${item.rating}</Text>
                            <Text style={styles.infoSubText}>/5</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>DURATION</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>${item.duration}</Text>
                            <Text style={styles.infoSubText}> hours</Text>
                        </View>
                    </View>
                </View>

                {/* Book now button */}
                <TouchableOpacity style={styles.buttonWrapper} onPress={createBookedAlert}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    backgroundImage: {
        height: height * 0.6,
        justifyContent: 'space-between',
    },
    descriptionWrapper: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: -20,
        borderRadius: 25,
    },
    backIcon: {
        marginHorizontal: 20,
        marginTop: 60,
    },
    titlesWrapper: {
        marginHorizontal: 20,
        marginBottom: 40,
    },
    itemTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 32,
        color: colors.white,
    },
    locationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    locationText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 16,
        color: colors.white,
    },
    heartWrapper: {
        position: 'absolute',
        right: 40,
        top: -30,
        width: 64,
        height: 64,
        backgroundColor: colors.white,
        borderRadius: 64,
        alignItems: 'center',
        justifyContent: 'center',

        // Drop shadow props
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    descriptionTextWrapper: {
        marginTop: 30,
        marginHorizontal: 20,
    },
    descriptionTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 24,
        color: colors.black,
    },
    descriptionText: {
        marginTop: 20,
        fontFamily: 'Lato_400Regular',
        fontSize: 15,
        color: colors.gray,
        height: 75,
    },
    infoWrapper: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: 'space-between',
    },
    infoItem: {},
    infoTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 14,
        color: colors.darkGray,
    },
    infoTextWrapper: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    infoText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 24,
        color: colors.orange,
    },
    infoSubText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 14,
        marginBottom: 2,
        color: colors.gray,
    },
    buttonWrapper: {
        marginHorizontal:20,
        marginTop: 30,
        backgroundColor: colors.orange,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 18,
        color: colors.white,
    },
})

export default Details;