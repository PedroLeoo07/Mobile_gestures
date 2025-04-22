import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Leonardo from "../screens/Leonardo";
import Cintra from "../screens/Cintra";

const Stack = createNativeStackNavigator();

export default function LeonardoNavigator() {
    return (
        <Stack.Navigator initialRouteName="Leonardo" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Leonardo" component={Leonardo} />
            <Stack.Screen name="Cintra" component={Cintra} />
        </Stack.Navigator>
    );
}