import { View } from "react-native";
import { Text, Surface } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function PerformanceMetrics() {
  return (
    <View className="space-y-4 mt-4">
      <Surface className="p-4 rounded-lg elevation-2">
        <Text className="text-base font-bold mb-3">Performance Overview</Text>
        <View className="space-y-4">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="star"
                size={16}
                color="#eab308"
                className="mr-2"
              />
              <Text>Customer Rating</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="font-bold">4.9</Text>
              <Text className="text-gray-500 text-xs ml-1">/5</Text>
            </View>
          </View>

          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="clock-outline"
                size={16}
                color="#3b82f6"
                className="mr-2"
              />
              <Text>On-Time Rate</Text>
            </View>
            <Text className="font-bold">98%</Text>
          </View>

          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="package-variant"
                size={16}
                color="#3b82f6"
                className="mr-2"
              />
              <Text>Successful Deliveries</Text>
            </View>
            <Text className="font-bold">99.5%</Text>
          </View>

          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="thumb-up"
                size={16}
                color="#3b82f6"
                className="mr-2"
              />
              <Text>Customer Compliments</Text>
            </View>
            <Text className="font-bold">32</Text>
          </View>
        </View>
      </Surface>

      <Surface className="p-4 rounded-lg elevation-2">
        <Text className="text-base font-bold mb-3">Weekly Performance</Text>
        <View className="h-48 bg-gray-100 rounded-md flex items-center justify-center">
          <View className="items-center">
            <MaterialCommunityIcons
              name="chart-bar"
              size={32}
              color="#9ca3af"
              className="mb-2"
            />
            <Text className="text-gray-500">Performance Chart</Text>
            <Text className="text-gray-500 text-xs">
              Deliveries and ratings over time
            </Text>
          </View>
        </View>
      </Surface>

      <Surface className="p-4 rounded-lg elevation-2">
        <Text className="text-base font-bold mb-3">Recent Feedback</Text>
        <View className="space-y-3">
          <View className="p-3 bg-gray-100 rounded-md">
            <View className="flex-row justify-between items-center mb-1">
              <View className="flex-row">
                {[1, 2, 3, 4, 5].map((star) => (
                  <MaterialCommunityIcons
                    key={star}
                    name="star"
                    size={16}
                    color="#eab308"
                    className="mr-1"
                  />
                ))}
              </View>
              <Text className="text-xs text-gray-500">Yesterday</Text>
            </View>
            <Text className="text-sm">
              "Very professional and friendly. Package was delivered safely and
              on time."
            </Text>
          </View>

          <View className="p-3 bg-gray-100 rounded-md">
            <View className="flex-row justify-between items-center mb-1">
              <View className="flex-row">
                {[1, 2, 3, 4, 5].map((star) => (
                  <MaterialCommunityIcons
                    key={star}
                    name="star"
                    size={16}
                    color="#eab308"
                    className="mr-1"
                  />
                ))}
              </View>
              <Text className="text-xs text-gray-500">2 days ago</Text>
            </View>
            <Text className="text-sm">
              "Driver went above and beyond to ensure my package was delivered
              safely."
            </Text>
          </View>
        </View>
      </Surface>
    </View>
  );
}
