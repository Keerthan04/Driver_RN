// import {FontAwesome} from "@expo/vector-icons/";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import { Tabs } from "expo-router";
import "../globals.css"

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#FFD86B",tabBarStyle: { backgroundColor: "#111827"} }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="active"
        options={{
          title: "Active",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Fontisto size={24} name="checkbox-active" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="route"
        options={{
          title: "Route",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 size={24} name="route" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign size={24} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
