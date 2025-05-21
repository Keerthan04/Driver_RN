import CustomerInfo from "@/components/ui/Active/CustomerInfo";
import DeliveryInfo from "@/components/ui/Active/DeliveryInfo";
import DeliveryMap from "@/components/ui/Active/DeliveryMap";
import { deliveries } from "@/Lib/sampleDeliveries";
// import { Delivery } from "@/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, useLocalSearchParams } from "expo-router";
import { Text, View, ScrollView } from "react-native";
// import MapView, { Marker } from "react-native-maps";
import { Button } from "react-native-paper";
const sampleCustomer = {
  id: "CUST-5678",
  name: "John Doe",
  address: "123 Main St, Apt 4B",
  phoneNumber: "123-456-7890",
  email: "d6EYB@example.com",
  deliveryInstructions: "Please ring the bell",
};
export default function Active() {
  const {id} = useLocalSearchParams();
  console.log("Delivery ID in id page:", id);
  const delivery = deliveries.find((delivery) => delivery.id === id);
  console.log("Delivery:", delivery);
  if (!delivery) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-gray-900 font-bold text-2xl">Delivery Not Found</Text>
      </View>
    );
  }
  return (
    <ScrollView className="flex-1 gap-2 p-2">
      <View className="flex-row items-center p-4 rounded-lg">
        <Link href={"/(tabs)/active"}>
          <View className="rounded-lg p-2 mr-3">
            <AntDesign name="back" size={32} color="#111827" />
          </View>
        </Link>
        <View>
          <Text className="text-gray-900 font-bold text-2xl">
            Active Delivery
          </Text>
          <Text className="text-md text-gray-700">
            Delivery ID: {delivery.id}
          </Text>
        </View>
      </View>
      <DeliveryMap deliveryId={delivery.id} />
      <DeliveryInfo delivery={delivery} />
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
