"use client";

import { View, ScrollView } from "react-native";
import { Text, Surface, Button, Badge } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteList } from "../../components/RouteList";

const RouteScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="p-4 pb-20">
        <View className="flex-row justify-between items-center mb-4">
          <View>
            <Text className="text-2xl font-bold">Route Overview</Text>
            <Text className="text-gray-500">Today, April 22</Text>
          </View>
          <Button
            mode="outlined"
            size="small"
            icon="refresh"
            onPress={() => console.log("Refresh route")}
          >
            Refresh
          </Button>
        </View>

        <Surface className="p-4 rounded-lg mb-4 elevation-2">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-base font-bold">Today's Deliveries</Text>
            <Badge className="bg-gray-100 text-gray-800">15 Total</Badge>
          </View>
          <RouteList />
        </Surface>

        <View className="flex items-center">
          <Button
            mode="outlined"
            onPress={() => console.log("Request route change")}
          >
            Request Route Change
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RouteScreen;
