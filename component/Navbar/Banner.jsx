import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const img = { uri: "https://reactjs.org/logo-og.png" };

const Banner = () => {
    return (
        <View>
            <ImageBackground source={img} style={styles.backgroundImg}>
                <Text style={styles.textStyle}>Welcome To React Native</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    bannerContainer: {
        backgroundColor: "#fff",
        marginBottom: '10px'
    },
    backgroundImg: {
        minHeight: '20vh',
        opacity: 0.9,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',

    },
    textStyle: {
        color: "white",
        fontSize: '27px',
        padding: '10px',
        alignItems: 'center',
        textAlign: 'center',
    }

})

export default Banner;
