import React, { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import jwtDecode from 'jwt-decode';
// import { AppLoading } from 'expo';
import AppLoading from 'expo-app-loading';

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
import authStorage from './src/auth/storage';

const App = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading 
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  }

  // useEffect(() => {
  //   restoreToken()
  // }, []);

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