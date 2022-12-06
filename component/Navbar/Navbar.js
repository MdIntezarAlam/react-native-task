import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-web'
import { footer } from '../../utils/constant'

const Navbar = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                {footer.map((data) => (
                    <View style={styles.textBox}>
                        <Text style={styles.textStyle}>{data.Home}</Text>
                        <Text style={styles.textStyle}>{data.Company}</Text>
                        <Text style={styles.textStyle}>{data.Service}</Text>
                        <Text style={styles.textStyle}>{data.Community}</Text>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        color: "#fff",
        backgroundColor: "#000",
        paddingTop: 0,
        marginTop: 0,
        flexDirection: "row",
    },
    textBox: {
        color: "#fff",
        padding: '20px'
    },
    textStyle: {
        color: "#fff",
    },
})



export default Navbar