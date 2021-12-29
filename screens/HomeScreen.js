import React, {useLayoutEffect, useState, useEffect} from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native";
import { Avatar } from "react-native-elements";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { db } from "../firebase";
import { collection, query, onSnapshot } from "firebase/firestore";

import CustomListItem from "../components/CustomListItem";

const HomeScreen = ({navigation}) => {
    const [chats, setChats] = useState([]);

    useEffect(async () => {
        const q = query(collection(db, "chats"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setChats(querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        });

        return unsubscribe;
    }, [ navigation ])

    const signOutUser = () => {
        signOut(auth).then(() => {
            navigation.replace("Login");
        }).catch((error) => {
        });
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Signal",
            headerStyle: { backgroundColor: "#fff"},
            headerTitleStyle: { color: "black"},
            headerTintColor: "black",
            headerLeft: () => (<View style={{marginLeft: 20}}>
                <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                <Avatar
                 rounded
                 source={{uri: auth?.currentUser?.photoURL}}></Avatar>
                </TouchableOpacity>
            </View>),
            headerRight: () => (
                <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20,
                }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camerao" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("AddChat")}>
                        <AntDesign name="edit" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            )
        });
    }, []);

    const enterChat = (id, chatName) => {
        navigation.navigate("Chat", {
            id,
            chatName,
        })
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {chats.map(({id, data: { chatName }}) => (
                    <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat} />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        height: "100%",
    }
});
