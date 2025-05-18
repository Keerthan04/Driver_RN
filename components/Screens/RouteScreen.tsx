import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteList } from "../ui/Route/RouteList";
import { Link } from "expo-router";

const RouteScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="p-4 pb-20">
        <View className="flex-row justify-between items-center mb-4">
          <View>
            <View className="flex-row items-center">
            <Link href={"/(tabs)"}>
              <View className="rounded-lg p-2 mr-3">
                <AntDesign name="back" size={32} color="#111827" />
              </View>
            </Link>
            <View>
              <Text className="text-2xl font-bold text-black">
                Route Overview
              </Text>
            <Text className="text-gray-900">Today, April 22</Text>
            </View>
            </View>
          </View>
          <TouchableOpacity
            className="flex-row items-center bg-[#FFD86B] border border-[#FFD86B] rounded-md px-3 py-1.5"
            onPress={() => console.log("Refresh route")}
          >
            <MaterialCommunityIcons name="refresh" size={18} color="black" />
            <Text className="text-black ml-1">Refresh</Text>
          </TouchableOpacity>
        </View>

        <View className="p-4 rounded-lg mb-4 bg-gray-900">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-base font-bold text-white">
              Today&apos;s Deliveries
            </Text>
            <View className="bg-gray-700 rounded-full px-2.5 py-0.5">
              <Text className="text-[#FFD86B] text-xs font-medium">
                5 Total
              </Text>
            </View>
          </View>
          <RouteList />
        </View>

        <View className="items-center">
          <TouchableOpacity
            className="border border-[#FFD86B] bg-[#FFD86B] rounded-md px-4 py-2"
            onPress={() => console.log("Request route change")}
          >
            <Text className="text-black text-md font-semibold p-2">
              Request Route Change
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RouteScreen;
