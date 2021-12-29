import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import {db} from "../firebase";
import { onSnapshot, collection} from "firebase/firestore";

const CustomListItem = ({ id, chatName, enterChat }) => {
    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        const path = `chats/${id}/message`;
        const collectionRef = collection(db, ...path.split("/"));
        const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
            setChatMessages(snapshot.docs.map(doc => doc.data()))
        });

        return unsubscribe;
    });
    return (
        <ListItem key={id} onPress={() => enterChat(id, chatName)} bottomDivider>
            <Avatar
                rounded
                source={{
                    uri: chatMessages?.[0]?.photoURL,
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800"}}>
                    {chatName}
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};


export default CustomListItem;


const styles = StyleSheet.create({});
