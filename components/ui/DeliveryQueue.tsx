import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { deliveries } from "@/Lib/sampleDeliveries";
import { useRouter } from "expo-router";


const priorityColors = {
  high: { bg: "#fee2e2", text: "#b91c1c" },
  medium: { bg: "#fef3c7", text: "#92400e" },
  low: { bg: "#dcfce7", text: "#166534" },
};



const DeliveryQueue = () => {
  const router = useRouter();
  const handleNavigation = (id: string) => {
    router.push({
      pathname: "/(tabs)/active/[id]",
      params: { id: id },
    });
  };
  return (
    <View style={styles.container}>
      {deliveries.map((delivery) => (
        <TouchableOpacity
          key={delivery.id}
          style={styles.deliveryItem}
          onPress={() => handleNavigation(delivery.id)}
        >
          <View style={styles.deliveryContent}>
            <View style={styles.iconContainer}>
              <Feather
                name="package"
                size={20}
                color="white"
              />
            </View>
            <View style={styles.deliveryInfo}>
              <Text style={styles.address}>{delivery.address}</Text>
              <View style={styles.timeContainer}>
                <MaterialCommunityIcons
                  name="clock-outline"
                  size={12}
                  color="white"
                />
                <Text style={styles.time}>{delivery.time}</Text>
              </View>
            </View>
          </View>
          <View style={styles.rightContent}>
            <View
              style={[
                styles.priorityBadge,
                { backgroundColor: priorityColors[delivery.priority].bg },
              ]}
            >
              {delivery.priority === "high" && (
                <MaterialCommunityIcons
                  name="alert-circle-outline"
                  size={12}
                  color={priorityColors[delivery.priority].text}
                />
              )}
              <Text
                style={[
                  styles.priorityText,
                  { color: priorityColors[delivery.priority].text },
                ]}
              >
                {delivery.priority.charAt(0).toUpperCase() +
                  delivery.priority.slice(1)}
              </Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              color="white"
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  deliveryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 8,
    backgroundColor: "#374151",
    
  },
  deliveryContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#374151",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  deliveryInfo: {
    flex: 1,
  },
  address: {
    fontWeight: "500",
    color: "#f3f4f6",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  time: {
    fontSize: 12,
    color: "#f3f4f6",
    marginLeft: 4,
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  priorityBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  priorityText: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export default DeliveryQueue;
