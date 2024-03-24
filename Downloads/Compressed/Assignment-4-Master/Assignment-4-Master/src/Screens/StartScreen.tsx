import React from 'react';
import { View , Text, StyleSheet } from 'react-native';

const StartScreen = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {

    
    const BacktoMain = () => {
        props.navigation.navigate('HomeScreen');
    }
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headingStyle}>3nd screen</Text>
            <Text style={styles.textStyle}>Hello World</Text>

            
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
        backgroundColor: 'pink',
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
        
    }});

export default StartScreen;
