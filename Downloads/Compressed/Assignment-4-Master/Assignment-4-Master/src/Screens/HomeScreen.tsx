import React from 'react';
import { View , Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { AppContextProvider, useAppContext } from '../../Global/Context';

const HomeScreen = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {

    const goToDetails = () => {
        props.navigation.navigate('DetailsScreen');
    }

 
    const state = useAppContext();
   

    return (
        
        <View style={styles.viewStyle}>
            <Image
                style={styles.ImageStyele}
                source={require('../assets/apple.png')} />
                
            <Image style={styles.ImageStyele}
                source={require('../assets/KO.png')} />
                
            <TouchableOpacity onPress={() => goToDetails()}>
                <Text>Go to Details</Text>
            </TouchableOpacity>
            
           
            
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        color: 'light green',
        fontSize: 20,
        backgroundColor: 'lightgreen',
    },
    textStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems: 'center',
        },
    headingStyle:{
        fontSize: 40,
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,

        
    },

    ImageStyele:{
        width: 200,
        height: 100,
        borderRadius: 10,
        display: 'flex',
        paddingHorizontal: 1,
        paddingVertical: 1,
        marginTop: 10,
        marginBottom: 10,
    }
});

export default HomeScreen;
