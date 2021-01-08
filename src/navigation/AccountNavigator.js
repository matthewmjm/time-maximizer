import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ViewImageScreen from '../screens/ViewImageScreen';
import ScheduleScreen from '../screens/ScheduleScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="Reminders" component={MessagesScreen} />
        <Stack.Screen name="Schedules" component={ScheduleScreen} />
    </Stack.Navigator>
)

export default AccountNavigator;