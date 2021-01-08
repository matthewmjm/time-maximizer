import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AppText from '../AppText';
import colors from '../../config/colors';

const ListItem = ({ title, subTitle, image, IconComponent, onPress, renderRightActions }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={colors.light} 
                onPress={onPress}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        { subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium}/>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
};

const styles = StyleSheet.create({ 
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: '500',
    },
    subTitle: {
        color: colors.medium,
    },
})

export default ListItem;
