import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Leonardo";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
            headerShown: true,
            headerTitle: "Página Inicial",
            headerStyle: {
                backgroundColor: "#f4511e",
                height: 100,
            },
            headerTintColor: "white",
            headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 24,
            },
            tabBarShowLabel: true,
            tabBarStyle: {
                backgroundColor: "#f4511e",
                height: 60,
                borderRadius: 50,
                position: "absolute",
                margin: 15,
            },
            tabBarLabelStyle: {
                fontSize: 16,
                fontWeight: "bold",
            },
            tabBarIconStyle: {
                margin: 15,
                marginBottom: 5,
                color: "white",
                fontSize: 24,
            },
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "black",
        }}>
            <Tab.Screen name="Home" component={HomeScreen} 
            options={{
                TabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
            }}/>
        </Tab.Navigator>
    )
}