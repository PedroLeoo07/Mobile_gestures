import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sofia from "../screens/Sofia";
import Oliveira from "../screens/Oliveira";

const Stack = createNativeStackNavigator();

export default function SofiaNavigator() {
    return (
        <Stack.Navigator initialRouteName="Sofia" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Sofia" component={Sofia} />
            <Stack.Screen name="Oliveira" component={Oliveira} />
        </Stack.Navigator>
    );
}