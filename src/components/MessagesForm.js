import React from "react";
import { Alert, Keyboard } from "react-native";
import { Notifications } from "expo";
import * as Yup from "yup";

import { Form, AppFormField, SubmitButton } from "./forms";
import messagesApi from "../api/messages";

function MessagesForm({ listing }) {
    const handleSubmit = async ({ message }, { resetForm }) => {
        Keyboard.dismiss();

        const result = await messagesApi.send(message, listing.id);

        if (!result.ok) {
            console.log("Error", result);
                return Alert.alert("Error", "Could not send the message.");
        }

    resetForm();

        Notifications.presentLocalNotificationAsync({
        title: "Awesome!",
        body: "Your message was sent.",
        });
    };

    return (
        <Form
        initialValues={{ message: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        >
        <AppFormField
            maxLength={255}
            multiline
            name="message"
            numberOfLines={3}
            placeholder="Message..."
        />
        <SubmitButton title="Send Message" />
        </Form>
        );
}

const validationSchema = Yup.object().shape({
    message: Yup.string().required().min(1).label("Message"),
});

export default MessagesForm