import React from 'react';
import { View, StyleSheet } from 'react-native';
import Banner from './Banner';
import Middlepage from './Middlepage';

const Home = () => {
    return (
        <View style={styles.homeContainer}>
            <Banner />
            <Middlepage />
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: "#fff",
    }
})

export default Home;
