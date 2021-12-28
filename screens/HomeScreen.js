import React, {useLayoutEffect} from "react";
import { StyleSheet, ScrollView, View, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native";
import { Avatar } from "react-native-elements";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

import CustomListItem from "../components/CustomListItem";

const HomeScreen = ({navigation}) => {

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

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen

const styles = StyleSheet.create({});
