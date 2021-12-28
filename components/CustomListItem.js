import React from "react";
import { StyleSheet, View, Text} from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri: "https://ibb.co/1Qkxkkq",
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800"}}>
                    Youtube Chat
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    This is a test SubtitleThis is a test SubtitleThis is a test Subtitle
                    This is a test SubtitleThis is a test Subtitle
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};


export default CustomListItem;


const styles = StyleSheet.create({});
