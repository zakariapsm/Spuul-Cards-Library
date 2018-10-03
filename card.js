import React from 'react';
import { StyleSheet, View } from 'react-native';

const basicCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card} >
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: 'black',
        width: 300,
        height: 320,
        padding: 5,
        opacity: 0.5
    }
});

export default basicCard;