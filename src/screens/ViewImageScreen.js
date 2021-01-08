import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ViewImageScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons 
                    name="close" 
                    color={colors.quinary} 
                    size={35} 
                />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons 
                    name="trash-can-outline" 
                    color={colors.quinary}  
                    size={35} 
                />
            </View>
            <Image 
                source={require('../assets/chair.jpg')} 
                style={styles.image} 
                resizeMode='contain' 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default ViewImageScreen;
