import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./src/navigation/navigationTheme";
import AppNavigator from "./src/navigation/AppNavigator";
import AuthNavigator from "./src/navigation/AuthNavigator";
import OfflineNotice from './src/components/OfflineNotice';

import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { Button } from 'react-native'
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import AccountScreen from './src/screens/AccountScreen';
import ListingEditScreen from './src/screens/ListingEditScreen';
import ListingsScreen from './src/screens/ListingsScreen';
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import AuthContext from './src/auth/context';

const App = () => {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }} >
      <OfflineNotice />
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;