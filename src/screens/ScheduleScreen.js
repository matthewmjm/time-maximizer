import React, { useState } from 'react'
import { FlatList } from 'react-native';
import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'Matthew Malecki',
        description: 'Reminder to do something',
        image: require('../assets/matthewmjm.jpg')
    },
    {
        id: 2,
        title: 'Matthew Malecki',
        description: "Reminder to pick up coffee at the store",
        image: require('../assets/matthewmjm.jpg')
    },
    // {
    //     id: 3,
    //     title: 'Cody Malecki',
    //     description: "Don't forget to take me to the park!",
    //     image: require('../assets/cody.jpg')
    // },
    // {
    //     id: 4,
    //     title: 'Rio Malecki',
    //     description: "We need more treats!!!",
    //     image: require('../assets/rio.jpg')
    // },

]

const MessagesScreen = (props) => {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        // Delete message from messages array
        const newMessages = messages.filter((m) => m.id !== message.id);
        setMessages(newMessages);

        // Delete message from the server (which we will do later)
    }
    return (
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("message selected", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        )}
                    /> 
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 1,
                            title: 'Matthew Malecki',
                            description: 'Reminder to reschedule for Teeth Cleaning',
                            image: require('../assets/matthewmjm.jpg')
                        },
                        {
                            id: 2,
                            title: 'Matthew Malecki',
                            description: "Reminder to pick up coffee at the store",
                            image: require('../assets/matthewmjm.jpg')
                        },
                        {
                            id: 3,
                            title: 'Cody Malecki',
                            description: "Don't forget to take me to the park!",
                            image: require('../assets/cody.jpg')
                        },
                        {
                            id: 4,
                            title: 'Rio Malecki',
                            description: "We need more treats!!!",
                            image: require('../assets/rio.jpg')
                        },
                    ])
                }}
            />
        </Screen>
    );
};


export default MessagesScreen;
