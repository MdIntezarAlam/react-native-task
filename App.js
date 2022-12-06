import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Footer, Home, Navbar } from './component/Navbar';

const App = () => {
    return (
        <View style={styles.container}>
            <Navbar />
            <Home />
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        backgroundColor:"#000"
    }
})

export default App;
