"use client";

import { View, TouchableOpacity } from "react-native";
import { Text, Surface, Button, TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export function VehicleInfo() {
  const [vehicleType, setVehicleType] = useState("sedan");

  return (
    <View className="space-y-4 mt-4">
      <Surface className="p-4 rounded-lg elevation-2">
        <Text className="text-base font-bold mb-3">Vehicle Details</Text>
        <View className="space-y-4">
          <View className="space-y-1">
            <Text className="text-xs">Vehicle Type</Text>
            <View className="flex-row bg-gray-200 rounded-lg overflow-hidden">
              {[
                { value: "sedan", label: "Sedan" },
                { value: "suv", label: "SUV" },
                { value: "van", label: "Van" },
                { value: "truck", label: "Truck" },
              ].map((type) => (
                <TouchableOpacity
                  key={type.value}
                  className={`flex-1 py-2 items-center ${
                    vehicleType === type.value ? "bg-white" : ""
                  }`}
                  onPress={() => setVehicleType(type.value)}
                >
                  <Text
                    className={
                      vehicleType === type.value
                        ? "text-primary font-medium"
                        : "text-gray-500"
                    }
                  >
                    {type.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View className="flex-row space-x-2">
            <View className="flex-1 space-y-1">
              <Text className="text-xs">Make</Text>
              <TextInput
                mode="outlined"
                defaultValue="Toyota"
                dense
                className="bg-white"
              />
            </View>
            <View className="flex-1 space-y-1">
              <Text className="text-xs">Model</Text>
              <TextInput
                mode="outlined"
                defaultValue="Camry"
                dense
                className="bg-white"
              />
            </View>
          </View>

          <View className="flex-row space-x-2">
            <View className="flex-1 space-y-1">
              <Text className="text-xs">Year</Text>
              <TextInput
                mode="outlined"
                defaultValue="2022"
                keyboardType="number-pad"
                dense
                className="bg-white"
              />
            </View>
            <View className="flex-1 space-y-1">
              <Text className="text-xs">Color</Text>
              <TextInput
                mode="outlined"
                defaultValue="Silver"
                dense
                className="bg-white"
              />
            </View>
          </View>

          <View className="space-y-1">
            <Text className="text-xs">License Plate</Text>
            <TextInput
              mode="outlined"
              defaultValue="ABC-1234"
              dense
              className="bg-white"
            />
          </View>
        </View>
      </Surface>

      <Surface className="p-4 rounded-lg elevation-2">
        <Text className="text-base font-bold mb-3">Documents</Text>
        <View className="space-y-3">
          <View className="flex-row justify-between items-center p-3 bg-gray-100 rounded-md">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="file-document-outline"
                size={20}
                color="#3b82f6"
                className="mr-3"
              />
              <View>
                <Text className="font-medium">Driver's License</Text>
                <Text className="text-xs text-gray-500">
                  Expires: 06/15/2027
                </Text>
              </View>
            </View>
            <Button mode="outlined" compact>
              Update
            </Button>
          </View>

          <View className="flex-row justify-between items-center p-3 bg-gray-100 rounded-md">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="file-document-outline"
                size={20}
                color="#3b82f6"
                className="mr-3"
              />
              <View>
                <Text className="font-medium">Vehicle Insurance</Text>
                <Text className="text-xs text-gray-500">
                  Expires: 09/30/2025
                </Text>
              </View>
            </View>
            <Button mode="outlined" compact>
              Update
            </Button>
          </View>

          <View className="flex-row justify-between items-center p-3 bg-gray-100 rounded-md">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="file-document-outline"
                size={20}
                color="#3b82f6"
                className="mr-3"
              />
              <View>
                <Text className="font-medium">Vehicle Registration</Text>
                <Text className="text-xs text-gray-500">
                  Expires: 11/15/2025
                </Text>
              </View>
            </View>
            <Button mode="outlined" compact>
              Update
            </Button>
          </View>
        </View>
      </Surface>

      <Surface className="p-4 rounded-lg elevation-2">
        <Text className="text-base font-bold mb-3">Maintenance</Text>
        <View className="p-3 bg-yellow-100 border border-yellow-200 rounded-md flex-row items-start space-x-3 mb-4">
          <MaterialCommunityIcons
            name="alert-circle-outline"
            size={20}
            color="#854d0e"
          />
          <View>
            <Text className="font-medium text-yellow-800">
              Maintenance Reminder
            </Text>
            <Text className="text-sm text-yellow-800">
              Oil change recommended in 500 miles or 2 weeks.
            </Text>
          </View>
        </View>

        <View className="space-y-3">
          <View className="flex-row justify-between items-center p-3 border-b border-gray-200">
            <View>
              <Text className="font-medium">Oil Change</Text>
              <Text className="text-sm text-gray-500">
                Last: March 10, 2025
              </Text>
            </View>
            <Button mode="outlined" compact>
              Log
            </Button>
          </View>

          <View className="flex-row justify-between items-center p-3 border-b border-gray-200">
            <View>
              <Text className="font-medium">Tire Rotation</Text>
              <Text className="text-sm text-gray-500">
                Last: February 22, 2025
              </Text>
            </View>
            <Button mode="outlined" compact>
              Log
            </Button>
          </View>

          <View className="flex-row justify-between items-center p-3 border-b border-gray-200">
            <View>
              <Text className="font-medium">Brake Inspection</Text>
              <Text className="text-sm text-gray-500">
                Last: January 15, 2025
              </Text>
            </View>
            <Button mode="outlined" compact>
              Log
            </Button>
          </View>
        </View>
      </Surface>
    </View>
  );
}
