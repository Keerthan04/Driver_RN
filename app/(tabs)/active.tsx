import CustomerInfo from "@/components/ui/Active/CustomerInfo";
import DeliveryInfo from "@/components/ui/Active/DeliveryInfo";
import DeliveryMap from "@/components/ui/Active/DeliveryMap";
import { Delivery } from "@/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import { Text, View,ScrollView } from "react-native";
import { Button } from "react-native-paper";
const sampleDelivery: Delivery = {
  id: "DEL-1234",
  address: "123 Main St, Apt 4B",
  time: "10:30 AM",
  priority: "high",
  status: "in-progress",
  weight: 2.5,
  size: "medium",
  deliveryType: "Express",
  specialInstructions: "Leave at the front door",
};
const sampleCustomer = {
  id: "CUST-5678",
  name: "John Doe",
  address: "123 Main St, Apt 4B",
  phoneNumber: "123-456-7890",
  email: "d6EYB@example.com",
  deliveryInstructions: "Please ring the bell",
};
export default function Active() {
  return (
    <ScrollView className="flex-1 gap-2 p-2">
      <View className="flex-row items-center p-4 rounded-lg">
        <Link href={"/(tabs)"}>
          <View className="rounded-lg p-2 mr-3">
            <AntDesign name="back" size={32} color="#111827" />
          </View>
        </Link>
        <View>
          <Text className="text-gray-900 font-bold text-2xl">
            Active Delivery
          </Text>
          <Text className="text-md text-gray-700">
            Delivery ID: {sampleDelivery.id}
          </Text>
        </View>
      </View>
      <DeliveryMap deliveryId={sampleDelivery.id} />
      <DeliveryInfo delivery={sampleDelivery} />
      <CustomerInfo customer={sampleCustomer} />
      <Button
        mode="elevated"
        className="w-full rounded-lg items-center justify-center p-4 mt-3 mb-3"
        buttonColor="#FFD86B"
      >
        <View className="flex-row items-center justify-center pl-3 w-full">
          <AntDesign name="checkcircleo" size={24} color="black" />
          <Text className="text-black font-semibold text-md ml-2">
            Complete Delivery
          </Text>
        </View>
      </Button>
    </ScrollView>
  );
}
