import { Delivery } from "@/types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { Badge, Card } from "react-native-paper";

export default function DeliveryInfo({ delivery }: { delivery: Delivery }) {
  return (
    <Card className="p-4 rounded-lg w-full mt-2">
      <View className="bg-gray-900 p-4 rounded-lg">
        <Text className="text-white text-xl mb-2">Package Details</Text>

        <View className="flex flex-row items-center mb-4">
          <View className=" rounded-lg p-2 mr-3">
            <MaterialCommunityIcons
              name="package-variant"
              size={24}
              color="#FFF"
            />
          </View>
          <View className="flex-1">
            <Text className="text-white text-lg">
              {delivery.deliveryType} Package
            </Text>
            <Text className="text-gray-400">Tracking: {delivery.id}</Text>
          </View>
          {/* <View className="h-full m-2 p-4"> Still to do properly
            <Badge className="bg-amber-500 text-black py-1 px-3 rounded-lg">
              {delivery.priority}
            </Badge>
          </View> */}
        </View>

        <View className="flex flex-row mb-4">
          <View className="bg-gray-800 p-3 rounded-lg flex-1 mr-2">
            <View className="flex flex-row items-center mb-1">
              <MaterialCommunityIcons name="weight" size={24} color="gray" />
              <Text className="text-gray-400 ml-2">Weight</Text>
            </View>
            <Text className="text-white">{delivery.weight}</Text>
          </View>
          <View className="bg-gray-800 p-3 rounded-lg flex-1 ml-2">
            <View className="flex flex-row items-center mb-1">
              <MaterialCommunityIcons
                name="cube-outline"
                size={24}
                color="gray"
              />
              <Text className="text-gray-400 ml-2">Size</Text>
            </View>
            <Text className="text-white">{delivery.size}</Text>
          </View>
        </View>

        <View className="bg-gray-800 p-3 rounded-lg">
          <Text className="text-gray-400 mb-1">Special Handling</Text>
          <Text className="text-white">{delivery.specialInstructions}</Text>
        </View>
      </View>
    </Card>
  );
}
