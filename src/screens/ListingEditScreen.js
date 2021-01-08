import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { 
    Form, 
    AppFormField, 
    FormPicker as Picker, 
    SubmitButton,
} from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';
import FormImagePicker from "../components/forms/FormImagePicker";
import listingsApi from '../api/listings';
import useLocation from "../hooks/useLocation";
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    minutes: Yup.number().required().min(1).max(10000).label("minutes"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
    {
        backgroundColor: "#fc5c65",
        icon: "work",
        label: "Work",
        value: 1,
    },
    {
        backgroundColor: "#fd9644",
        icon: "car",
        label: "School",
        value: 2,
    },
    {
        backgroundColor: "#fed330",
        icon: "camera",
        label: "Doctor",
        value: 3,
    },
    {
        backgroundColor: "#26de81",
        icon: "cards",
        label: "Games",
        value: 4,
    },
    {
        backgroundColor: "#2bcbba",
        icon: "shoe-heel",
        label: "Clothes Shopping",
        value: 5,
    },
    {
        backgroundColor: "#45aaf2",
        icon: "basketball",
        label: "Sports",
        value: 6,
    },
    {
        backgroundColor: "#4b7bec",
        icon: "headphones",
        label: "Movies & Music",
        value: 7,
    },
    {
        backgroundColor: "#a55eea",
        icon: "book-open-variant",
        label: "Books",
        value: 8,
    },
    {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 9,
    },
];

function ListingEditScreen() {
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0);
        setUploadVisible(true);
        const result = await listingsApi.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
        );
    
        if (!result.ok) {
            setUploadVisible(false);
            return alert("Could not save the listing");
        }
    
        resetForm();
    };

    return (
        <Screen style={styles.container}>
            <UploadScreen 
                onDone={() => setUploadVisible(false)}
                progress={progress} 
                visible={uploadVisible} 
            />
            <Form
                initialValues={{
                    title: "",
                    minutes: "",
                    description: "",
                    category: null,
                    images: [],
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <FormImagePicker name="images" />
                <AppFormField 
                    maxLength={255} 
                    name="title" 
                    placeholder="Title" 
                />
                <AppFormField
                    keyboardType="phone-pad"
                    maxLength={8}
                    name="minutes"
                    placeholder="minutes"
                    width={120}
                />
                <Picker
                    items={categories}
                    name="category"
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Category"
                    width="50%"
                />
                <AppFormField
                    maxLength={255}
                    multiline={true}
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        },
    });

export default ListingEditScreen;