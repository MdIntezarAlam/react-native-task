import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { middleData } from '../../utils/constant';

const Middlepage = () => {
    const [data, setData] = useState(middleData)
    // console.log(data)
    return (
        <ScrollView>
            <View style={styles.middleContainer}>
                {
                    data.map((text) => (
                        <View>
                            <Text style={styles.textStyle}>{text.page}</Text>
                            <Text style={styles.smallText}>{text.smalTexts}</Text>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    middleContainer: {
        padding: '10px',
    },
    textStyle: {
        fontSize: 24,
        color: '#000',
        fontWeight: 600,
    },
    smallText: {
        fontSize: 15,
        fontWeight: 400,
        color: "#000",
        margin: '10px'
    }
})

export default Middlepage;
