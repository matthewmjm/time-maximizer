import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

const ListingsScreen = ({ navigation }) => {

    const {data: listings, error, loading, request: loadListings} = useApi(listingsApi.getListings);

    // FETCH FOR LISTINGS ON BACKEND SERVER
    // const [ listings, setListings ] = useState([]);
    // const [ error, setError ] = useState(false);
    // const [ loading, setLoading ] = useState(false) 
    useEffect(() => {
        loadListings();
    }, []);
    // const loadListings = async () => {
    //     setLoading(true);
    //     const response = await listingsApi.getListings();
    //     setLoading(false)

    //     if (!response.ok) return setError(true);

    //     setError(false);
    //     setListings(response.data);
    // };



    return (
        <Screen style={styles.screen}>
            {error && <> 
            <AppText style={{ color: 'red' }}>Couldn't Retrieve the Task List</AppText>
            <AppButton title="Retry" onPress={loadListings} />
            </>}
            <ActivityIndicator visible={loading} />
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={`$ ${item.price}`}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
                )}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    }
})

export default ListingsScreen;
