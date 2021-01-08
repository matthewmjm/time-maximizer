import React from "react";
import { View, StyleSheet } from "react-native";
import {Image} from "react-native-expo-image-cache";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import AppText from "../components/AppText";

import listings from "../api/listings";


// function ListingDetailsScreen({ listing }) {
//     return (
//         <View>
//             <Image 
//                 style={styles.image} 
//                 // source={require("../assets/jacket.jpg")} 
//                 preview={{ uri: listing.images[0].thumbnailUrl }}
//                 tint="light"
//                 uri={listing.images[0].url}
//             />
//             <View style={styles.detailsContainer}>
//                 <AppText style={styles.title}>{listings.title}</AppText>
//                 <AppText style={styles.price}>{listings.price}</AppText>
//                 <View style={styles.userContainer}>
//                 <ListItem
//                     image={require("../assets/matthewmjm.jpg")}
//                     title="Matthew Malecki"
//                     subTitle="5 Listings"
//                 />
//                 </View>
//             </View>
//         </View>
//     );
// }

function ListingDetailsScreen({ route }) {
    const listing = route.params;
    // console.log(listing.images[0].url)
    
    return (
        <View>
            <Image
                style={styles.image}
                // source={require("../assets/jacket.jpg")} 
                // preview={{ uri: listing.images[0].thumbnailUrl }}
                // tint="light"
                uri={listing.images[0].url}
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
            <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/matthewmjm.jpg")}
                        title="Matthew Malecki"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: colors.tertiary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 40,
    },
});

export default ListingDetailsScreen;