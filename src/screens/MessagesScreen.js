import React, { useState } from 'react'
import { FlatList } from 'react-native';
import { ListItem, ListItemDeleteAction, ListItemSeparator } from '../components/lists';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'Matthew Malecki',
        description: 'Message1',
        image: require('../assets/matthewmjm.jpg')
    },
    {
        id: 2,
        title: 'Matthew Malecki',
        description: "Message2",
        image: require('../assets/matthewmjm.jpg')
    },
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
                            id: 2,
                            title: 'Matthew Malecki',
                            description: "I'm interested in this item. When will you be able to post it?",
                            image: require('../assets/matthewmjm.jpg')
                        },
                    ])
                }}
            />
        </Screen>
    );
};


export default MessagesScreen;
