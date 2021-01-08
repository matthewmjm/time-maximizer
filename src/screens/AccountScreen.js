import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem, ListItemSeparator } from '../components/lists';
import colors from '../config/colors';
import Icon from '../components/Icon';
import routes from "../navigation/routes";
import Screen from '../components/Screen';

const menuItems = [
    {
        title: "My Schedule",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.tertiary
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.quaternary
        },
        targetScreen: routes.MESSAGES
    },
]

const AccountScreen = ({ navigation }) => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Matthew Malecki"
                    subTitle="mmalecki4@gmail.com"
                    image={require('../assets/matthewmjm.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    name={item.icon.name} 
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    )}
                />
            </View>
            <ListItem 
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor={colors.quinary} />
                }
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light,
    },
})

export default AccountScreen;