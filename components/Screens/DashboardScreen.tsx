"use client";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState,useEffect } from "react";
import { ScrollView, View, Text, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../context/AuthContext";
import DeliveryQueue from "../ui/DeliveryQueue";
import WeatherAlert from "../ui/WeatherAlert";
import { startBackgroundLocationTracking } from "@/Lib/location/StartTracking";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DashboardScreen = () => {
  const { user } = useAuth();
  const [isAvailable, setIsAvailable] = useState(true);

  // After successful login to store the driverId in AsyncStorage
  useEffect(() => {
    const setDriverId = async () => {
      await AsyncStorage.setItem("driverId", user?.id || ""); // Store driverId in AsyncStorage
      console.log("Driver ID stored successfully");
    };
    setDriverId();
  }, [user]);


  //to start the background location tracking(dint test for now but it should work)
  useEffect(() => {
    startBackgroundLocationTracking();
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }} className="p-4">
        <View className="flex-row justify-between items-center mb-4">
          <View>
            <Text className="text-2xl font-bold text-gray-900">Dashboard</Text>
            <Text className="text-gray-500">
              Welcome back, {user?.name || "Driver"}
            </Text>
          </View>
          <View className="flex-row items-center ml-4">
            <Switch
              value={isAvailable}
              onValueChange={setIsAvailable}
              trackColor={{ false: "#d1d5db", true: "#3b82f6" }}
              thumbColor={isAvailable ? "#2563eb" : "#f3f4f6"}
            />
            <Text className="ml-2 text-gray-700">Available</Text>
          </View>
        </View>

        <View className="bg-gray-900 p-4 rounded-lg mb-4">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-base font-bold text-gray-100">
              Current Delivery Queue
            </Text>
            <View className="bg-gray-100 px-2 py-1 rounded-full">
              <Text className="text-gray-800 text-sm font-semibold">
                5 Packages
              </Text>
            </View>
          </View>
          <DeliveryQueue />
        </View>
        
        <WeatherAlert/>

        <View className="bg-gray-900 p-4  rounded-lg">
          <View className="w-full rounded-lg flex-row items-center justify-center">
            <Text className="text-xl text-white text-center font-bold  p-2 rounded-lg">
              Daily Summary
            </Text>
          </View>

          <View className="p-3 rounded-lg">
            <View className="flex-row gap-2 mb-2">
              <View className="w-1/2 items-center  border border-white justify-center bg-gray-700 rounded-lg p-3">
                <MaterialCommunityIcons
                  name="package-variant"
                  size={24}
                  color="white"
                />
                <Text className="text-lg text-white font-bold mt-1">12</Text>
                <Text className="text-white text-xs">Deliveries</Text>
              </View>
              <View className="w-1/2 items-center  border border-white justify-center bg-gray-700 rounded-lg p-3">
                <MaterialCommunityIcons
                  name="currency-usd"
                  size={24}
                  color="white"
                />
                <Text className="text-lg text-white  font-bold mt-1">$142</Text>
                <Text className="text-white text-xs">Earnings</Text>
              </View>
            </View>

            <View className="flex-row gap-2">
              <View className="w-1/2 items-center  border border-white justify-center bg-gray-700 rounded-lg p-3">
                <MaterialCommunityIcons
                  name="clock-outline"
                  size={24}
                  color="white"
                />
                <Text className="text-lg font-bold  text-white mt-1">5.2</Text>
                <Text className="text-white text-xs">Hours</Text>
              </View>
              <View className="w-1/2 items-center  border border-white justify-center bg-gray-700 rounded-lg p-3">
                <MaterialCommunityIcons
                  name="trending-up"
                  size={24}
                  color="white"
                />
                <Text className="text-lg font-bold  text-white mt-1">98%</Text>
                <Text className="text-white text-xs">On-time</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
