import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import LeonardoNavigator from "./LeonardoNavigator";
import OliveiraNavigator from "./OliveiraNavigator";


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerTitle: "memes",
        headerStyle: {
          backgroundColor: "black",
          height: 100,
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontSize: 30,
        },
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: 50,
          height: 100,
          position: "absolute",
          margin: 15,
        },
        tabBarLabelStyle: {
          fontSize: 20,
        },
        tabBarIconStyle: {
          marginTop: 15,
          marginBottom: 5,
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={LeonardoNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="rocket" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Once ..."
        component={OliveiraNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="dice" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}