import React, { useContext } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem, ListItemSeparator } from '../components/lists';
import colors from '../config/colors';
import Icon from '../components/Icon';
import routes from "../navigation/routes";
import Screen from '../components/Screen';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';
import useAuth from "../auth/useAuth";

const menuItems = [
    {
        title: "My Schedule",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.tertiary
        },
        targetScreen: routes.SCHEDULE
    },
    {
        title: "My Reminders",
        icon: {
            name: "email",
            backgroundColor: colors.quaternary
        },
        targetScreen: routes.MESSAGES
    },
]

const AccountScreen = ({ navigation }) => {
    // const { user, setUser } = useContext(AuthContext);
    // const { user, setUser } = useAuth();
    const { user, logOut } = useAuth();

    // const handleLogout = () => {
    //     setUser(null);
    //     authStorage.removeToken();
    // }; 

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require('../assets/matthewmjm.jpg')}
                    // image={user.image}
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
                onPress={logOut}
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