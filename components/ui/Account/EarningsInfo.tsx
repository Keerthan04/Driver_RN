"use client";

import { View, TouchableOpacity } from "react-native";
import { Text, Surface, Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export function EarningsInfo() {
  const [activeTab, setActiveTab] = useState("week");

  return (
    <View className="space-y-4 mt-4">
      <Surface className="p-4 rounded-lg elevation-2">
        <Text className="text-base font-bold mb-3">Earnings Summary</Text>

        <View className="flex-row bg-gray-200 rounded-lg overflow-hidden mb-4">
          <TouchableOpacity
            className={`flex-1 py-2 items-center ${
              activeTab === "week" ? "bg-white" : ""
            }`}
            onPress={() => setActiveTab("week")}
          >
            <Text
              className={
                activeTab === "week"
                  ? "text-primary font-medium"
                  : "text-gray-500"
              }
            >
              Week
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-2 items-center ${
              activeTab === "month" ? "bg-white" : ""
            }`}
            onPress={() => setActiveTab("month")}
          >
            <Text
              className={
                activeTab === "month"
                  ? "text-primary font-medium"
                  : "text-gray-500"
              }
            >
              Month
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-2 items-center ${
              activeTab === "year" ? "bg-white" : ""
            }`}
            onPress={() => setActiveTab("year")}
          >
            <Text
              className={
                activeTab === "year"
                  ? "text-primary font-medium"
                  : "text-gray-500"
              }
            >
              Year
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === "week" && (
          <View>
            <View className="items-center mb-4">
              <Text className="text-gray-500">Total Earnings</Text>
              <Text className="text-3xl font-bold">$842.50</Text>
              <View className="flex-row items-center mt-1">
                <MaterialCommunityIcons
                  name="trending-up"
                  size={12}
                  color="#16a34a"
                />
                <Text className="text-xs text-green-600 ml-1">
                  12% from last week
                </Text>
              </View>
            </View>

            <View className="flex-row flex-wrap -mx-1">
              <View className="w-1/2 p-1">
                <View className="p-3 bg-gray-100 rounded-md">
                  <Text className="text-sm text-gray-500">Deliveries</Text>
                  <Text className="font-bold">68</Text>
                </View>
              </View>
              <View className="w-1/2 p-1">
                <View className="p-3 bg-gray-100 rounded-md">
                  <Text className="text-sm text-gray-500">
                    Avg. Per Delivery
                  </Text>
                  <Text className="font-bold">$12.39</Text>
                </View>
              </View>
              <View className="w-1/2 p-1">
                <View className="p-3 bg-gray-100 rounded-md">
                  <Text className="text-sm text-gray-500">Tips</Text>
                  <Text className="font-bold">$124.50</Text>
                </View>
              </View>
              <View className="w-1/2 p-1">
                <View className="p-3 bg-gray-100 rounded-md">
                  <Text className="text-sm text-gray-500">Hours</Text>
                  <Text className="font-bold">32.5</Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {activeTab === "month" && (
          <View className="items-center mb-4">
            <Text className="text-gray-500">Total Earnings</Text>
            <Text className="text-3xl font-bold">$3,245.75</Text>
            <View className="flex-row items-center mt-1">
              <MaterialCommunityIcons
                name="trending-up"
                size={12}
                color="#16a34a"
              />
              <Text className="text-xs text-green-600 ml-1">
                8% from last month
              </Text>
            </View>
          </View>
        )}

        {activeTab === "year" && (
          <View className="items-center mb-4">
            <Text className="text-gray-500">Total Earnings</Text>
            <Text className="text-3xl font-bold">$38,642.30</Text>
            <View className="flex-row items-center mt-1">
              <MaterialCommunityIcons
                name="trending-up"
                size={12}
                color="#16a34a"
              />
              <Text className="text-xs text-green-600 ml-1">
                15% from last year
              </Text>
            </View>
          </View>
        )}
      </Surface>

      <Surface className="p-4 rounded-lg elevation-2">
        <Text className="text-base font-bold mb-3">Payment History</Text>
        <View className="space-y-3">
          <View className="flex-row justify-between items-center p-3 border-b border-gray-200">
            <View>
              <Text className="font-medium">Weekly Payment</Text>
              <Text className="text-sm text-gray-500">April 15, 2025</Text>
            </View>
            <View className="items-end">
              <Text className="font-bold">$845.32</Text>
              <Button mode="text" compact className="h-6" labelStyle="text-xs">
                <MaterialCommunityIcons
                  name="download"
                  size={12}
                  className="mr-1"
                />
                Receipt
              </Button>
            </View>
          </View>

          <View className="flex-row justify-between items-center p-3 border-b border-gray-200">
            <View>
              <Text className="font-medium">Weekly Payment</Text>
              <Text className="text-sm text-gray-500">April 8, 2025</Text>
            </View>
            <View className="items-end">
              <Text className="font-bold">$792.18</Text>
              <Button mode="text" compact className="h-6" labelStyle="text-xs">
                <MaterialCommunityIcons
                  name="download"
                  size={12}
                  className="mr-1"
                />
                Receipt
              </Button>
            </View>
          </View>

          <View className="flex-row justify-between items-center p-3 border-b border-gray-200">
            <View>
              <Text className="font-medium">Weekly Payment</Text>
              <Text className="text-sm text-gray-500">April 1, 2025</Text>
            </View>
            <View className="items-end">
              <Text className="font-bold">$812.45</Text>
              <Button mode="text" compact className="h-6" labelStyle="text-xs">
                <MaterialCommunityIcons
                  name="download"
                  size={12}
                  className="mr-1"
                />
                Receipt
              </Button>
            </View>
          </View>
        </View>
      </Surface>
    </View>
  );
}
