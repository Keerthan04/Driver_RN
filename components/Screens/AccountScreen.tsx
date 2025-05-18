"use client";

import { View, ScrollView, TouchableOpacity } from "react-native";
import { Text, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { PerformanceMetrics } from "../../components/PerformanceMetrics";
import { EarningsInfo } from "../../components/EarningsInfo";
import { ProfileSettings } from "../../components/ProfileSettings";
import { VehicleInfo } from "../../components/VehicleInfo";

const AccountScreen = () => {
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState("performance");

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="p-4 pb-20">
        <View className="flex-row justify-between items-center mb-4">
          <View>
            <Text className="text-2xl font-bold">Account</Text>
            <Text className="text-gray-500">
              Manage your profile and settings
            </Text>
          </View>
          <Button
            mode="text"
            icon="cog"
            onPress={() => console.log("Settings")}
          />
        </View>

        <View className="flex-row items-center p-4 bg-gray-100 rounded-lg mb-4">
          <View className="w-16 h-16 rounded-full bg-blue-100 justify-center items-center">
            <MaterialCommunityIcons name="account" size={32} color="#3b82f6" />
          </View>
          <View className="ml-4">
            <Text className="text-xl font-bold">Alex Johnson</Text>
            <View className="flex-row items-center">
              <MaterialCommunityIcons name="star" size={16} color="#eab308" />
              <Text className="text-gray-500 ml-1">4.9 Rating</Text>
            </View>
          </View>
        </View>

        <View className="mb-4">
          <View className="flex-row bg-gray-200 rounded-lg overflow-hidden">
            <TouchableOpacity
              className={`flex-1 py-3 items-center ${
                activeTab === "performance" ? "bg-white" : ""
              }`}
              onPress={() => setActiveTab("performance")}
            >
              <MaterialCommunityIcons
                name="chart-bar"
                size={20}
                color={activeTab === "performance" ? "#3b82f6" : "#6b7280"}
              />
              <Text
                className={`text-xs mt-1 ${
                  activeTab === "performance"
                    ? "text-primary font-medium"
                    : "text-gray-500"
                }`}
              >
                Performance
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 py-3 items-center ${
                activeTab === "earnings" ? "bg-white" : ""
              }`}
              onPress={() => setActiveTab("earnings")}
            >
              <MaterialCommunityIcons
                name="currency-usd"
                size={20}
                color={activeTab === "earnings" ? "#3b82f6" : "#6b7280"}
              />
              <Text
                className={`text-xs mt-1 ${
                  activeTab === "earnings"
                    ? "text-primary font-medium"
                    : "text-gray-500"
                }`}
              >
                Earnings
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 py-3 items-center ${
                activeTab === "profile" ? "bg-white" : ""
              }`}
              onPress={() => setActiveTab("profile")}
            >
              <MaterialCommunityIcons
                name="account"
                size={20}
                color={activeTab === "profile" ? "#3b82f6" : "#6b7280"}
              />
              <Text
                className={`text-xs mt-1 ${
                  activeTab === "profile"
                    ? "text-primary font-medium"
                    : "text-gray-500"
                }`}
              >
                Profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 py-3 items-center ${
                activeTab === "vehicle" ? "bg-white" : ""
              }`}
              onPress={() => setActiveTab("vehicle")}
            >
              <MaterialCommunityIcons
                name="truck"
                size={20}
                color={activeTab === "vehicle" ? "#3b82f6" : "#6b7280"}
              />
              <Text
                className={`text-xs mt-1 ${
                  activeTab === "vehicle"
                    ? "text-primary font-medium"
                    : "text-gray-500"
                }`}
              >
                Vehicle
              </Text>
            </TouchableOpacity>
          </View>

          {activeTab === "performance" && <PerformanceMetrics />}
          {activeTab === "earnings" && <EarningsInfo />}
          {activeTab === "profile" && <ProfileSettings />}
          {activeTab === "vehicle" && <VehicleInfo />}
        </View>

        <View className="items-center">
          <Button
            mode="outlined"
            icon="logout"
            textColor="#ef4444"
            onPress={() => logout()}
          >
            Sign Out
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;
