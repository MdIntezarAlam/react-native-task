import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.footerBox}>
                <Text style={styles.footerText}>Service</Text>
                <Text style={styles.footerText}>Company</Text>
                <Text style={styles.footerText}>Community</Text>
                <Text style={styles.footerText}>Developer</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: "#000",
    },
    footerBox: {
        backgroundColor: "#000",
        flexDirection: 'row',
        padding: '20px',
    },

    footerText: {
        color: "#fff",
        fontSize: '18px',
        margin: '10px',
        backgroundColor: '#000',
        color: "orange",
    }
})

export default Footer;
