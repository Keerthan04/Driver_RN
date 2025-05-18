import { View, Text, TouchableOpacity, ScrollView } from "react-native";
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
  completed: "bg-green-700 text-green-200",
  "in-progress": "bg-blue-700 text-blue-200",
  pending: "bg-gray-700 text-gray-200",
};

export function RouteList() {
  const navigation = useNavigation<any>();
  const [menuVisible, setMenuVisible] = useState<string | null>(null);

  const openMenu = (id: string) => {
    setMenuVisible(menuVisible === id ? null : id);
  };

  return (
    //shd do as scrollview
    <ScrollView className="space-y-4">
      {routeStops.map((stop) => (
        <View
          key={stop.id}
          className={`p-3 rounded-lg mb-2 border ${
            stop.isActive ? "border-[#FFD86B] bg-gray-700" : "border-gray-700 bg-gray-700"
          }`}
        >
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center flex-1">
              <View
                className={`w-10 h-10 rounded-full ${
                  stop.isActive ? "bg-gray-600" : "bg-gray-800"
                } justify-center items-center mr-3`}
              >
                {stop.status === "completed" ? (
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={20}
                    color={stop.isActive ? "#FFD86B" : "white"}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={20}
                    color={stop.isActive ? "#FFD86B" : "white"}
                  />
                )}
              </View>
              <View>
                <Text className="font-medium text-white">{stop.address}</Text>
                <View className="flex-row items-center mt-1">
                  <MaterialCommunityIcons
                    name="clock-outline"
                    size={12}
                    color="white"
                  />
                  <Text className="text-xs text-gray-300 ml-1">
                    {stop.time}
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex-row items-center space-x-2">
              <View
                className={`px-2 py-1 rounded-full bg-gray-800
                }`}
              >
                <Text className="text-xs font-medium text-white">
                  {stop.status === "completed"
                    ? "Completed"
                    : stop.status === "in-progress"
                    ? "In Progress"
                    : "Pending"}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => openMenu(stop.id)}
                className="w-8 h-8 justify-center items-center"
              >
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={20}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
          
          {menuVisible === stop.id && (
            <View className="mt-2 bg-gray-800 rounded-md overflow-hidden">
              <TouchableOpacity
                onPress={() => {
                  setMenuVisible(null);
                  navigation.navigate("DeliveryDetail", { id: stop.id });
                }}
                className="px-4 py-2 border-b border-gray-700"
              >
                <Text className="text-white">View Details</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setMenuVisible(null)}
                className="px-4 py-2 border-b border-gray-700"
              >
                <Text className="text-white">Skip Delivery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setMenuVisible(null)}
                className="px-4 py-2"
              >
                <Text className="text-white">Report Issue</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}