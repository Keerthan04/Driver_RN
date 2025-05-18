"use client";

import { View } from "react-native";
import { Text, Button, Menu } from "react-native-paper";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type RouteStop = {
  id: string;
  address: string;
  time: string;
  status: "completed" | "in-progress" | "pending";
  isActive: boolean;
};

const routeStops: RouteStop[] = [
  {
    id: "DEL-1233",
    address: "987 Elm St",
    time: "9:15 AM",
    status: "completed",
    isActive: false,
  },
  {
    id: "DEL-1234",
    address: "123 Main St, Apt 4B",
    time: "10:30 AM",
    status: "in-progress",
    isActive: true,
  },
  {
    id: "DEL-1235",
    address: "456 Oak Ave",
    time: "11:15 AM",
    status: "pending",
    isActive: false,
  },
  {
    id: "DEL-1236",
    address: "789 Pine Blvd, Suite 3",
    time: "12:00 PM",
    status: "pending",
    isActive: false,
  },
  {
    id: "DEL-1237",
    address: "321 Cedar Ln",
    time: "1:30 PM",
    status: "pending",
    isActive: false,
  },
];

const statusClasses = {
  completed: "bg-green-100 text-green-800",
  "in-progress": "bg-blue-100 text-blue-800",
  pending: "bg-gray-100 text-gray-800",
};

export function RouteList() {
  const navigation = useNavigation<any>();
  const [menuVisible, setMenuVisible] = useState<string | null>(null);

  return (
    <View className="space-y-3">
      {routeStops.map((stop) => (
        <View
          key={stop.id}
          className={`p-3 rounded-lg border ${
            stop.isActive ? "border-primary bg-blue-50" : "border-gray-200"
          }`}
        >
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center flex-1">
              <View
                className={`w-10 h-10 rounded-full ${
                  stop.isActive ? "bg-blue-100" : "bg-gray-100"
                } justify-center items-center mr-3`}
              >
                {stop.status === "completed" ? (
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={20}
                    color={stop.isActive ? "#3b82f6" : "#6b7280"}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={20}
                    color={stop.isActive ? "#3b82f6" : "#6b7280"}
                  />
                )}
              </View>
              <View>
                <Text className="font-medium">{stop.address}</Text>
                <View className="flex-row items-center mt-1">
                  <MaterialCommunityIcons
                    name="clock-outline"
                    size={12}
                    color="#6b7280"
                  />
                  <Text className="text-xs text-gray-500 ml-1">
                    {stop.time}
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex-row items-center space-x-2">
              <View
                className={`px-2 py-1 rounded-full ${
                  statusClasses[stop.status]
                }`}
              >
                <Text className="text-xs font-medium">
                  {stop.status === "completed"
                    ? "Completed"
                    : stop.status === "in-progress"
                    ? "In Progress"
                    : "Pending"}
                </Text>
              </View>
              <Menu
                visible={menuVisible === stop.id}
                onDismiss={() => setMenuVisible(null)}
                anchor={
                  <Button
                    mode="text"
                    onPress={() => setMenuVisible(stop.id)}
                    icon="dots-vertical"
                    compact
                    className="w-8 h-8 m-0 p-0"
                  />
                }
              >
                <Menu.Item
                  onPress={() => {
                    setMenuVisible(null);
                    navigation.navigate("DeliveryDetail", { id: stop.id });
                  }}
                  title="View Details"
                />
                <Menu.Item
                  onPress={() => setMenuVisible(null)}
                  title="Skip Delivery"
                />
                <Menu.Item
                  onPress={() => setMenuVisible(null)}
                  title="Report Issue"
                />
              </Menu>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
