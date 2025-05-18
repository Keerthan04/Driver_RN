import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import polyline from "@mapbox/polyline";
import { Delivery } from "@/types";
import Constants from "expo-constants";




const deliveries: Delivery[] = [
  {
    id: "DEL-1234",
    address: "Diana Circle, Udupi, Karnataka",
    time: "10:30 AM",
    priority: "high",
    status: "in-progress",
    deliveryType: "Express",
    specialInstructions: "Leave at the front door",
    size: "medium",
    weight: 2.5,
  },
  {
    id: "DEL-1235",
    address: "Manipal University, Udupi, Karnataka",
    time: "11:15 AM",
    priority: "medium",
    status: "pending",
    deliveryType: "Standard",
    specialInstructions: "Leave at the front door",
    size: "medium",
    weight: 2.5,
  },
  {
    id: "DEL-1236",
    address: "Malpe Beach, Udupi, Karnataka",
    time: "12:00 PM",
    priority: "medium",
    status: "pending",
    deliveryType: "Express",
    specialInstructions: "Leave at the front door",
    size: "medium",
    weight: 2.5,
  },
  {
    id: "DEL-1237",
    address: "Sri Krishna Temple, Car Street, Udupi, Karnataka",
    time: "1:30 PM",
    priority: "low",
    status: "pending",
    deliveryType: "Standard",
    specialInstructions: "Leave at the front door",
    size: "medium",
    weight: 2.5,
  },
  {
    id: "DEL-1238",
    address: "Kodi Beach, Udupi, Karnataka",
    time: "2:45 PM",
    priority: "low",
    status: "pending",
    deliveryType: "Express",
    specialInstructions: "Leave at the front door",
    size: "medium",
    weight: 2.5,
  },
];

export default function DeliveryMap({ deliveryId }: { deliveryId: string }) {
  const [currentLocation] = useState("Udupi City Bus Stand, Udupi, Karnataka");
  const [eta, setEta] = useState("");
  const [region, setRegion] = useState({
    latitude: 13.3409, // Default Udupi latitude
    longitude: 74.7421, // Default Udupi longitude
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [routeCoords, setRouteCoords] = useState<
    { latitude: number; longitude: number }[]
  >([]);
  const [destinationCoordinates, setDestinationCoords] = useState<
    { latitude: number; longitude: number }[]
  >([]);

  // const delivery = deliveries.find((d) => d.id === deliveryId) || deliveries[1];
  const delivery = deliveries[1];
  useEffect(() => {
    const fetchRoute = async () => {
      const origin = encodeURIComponent(currentLocation);
      const destination = encodeURIComponent(delivery.address);
      const originCoords = await getCoordinates(origin);
      const destinationCoords = await getCoordinates(destination);
      if (originCoords && destinationCoords) {
        setRegion({
          latitude: (originCoords.latitude + destinationCoords.latitude) / 2,
          longitude: (originCoords.longitude + destinationCoords.longitude) / 2,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
        setDestinationCoords([destinationCoords]);
      }

      // const ApiKey = process.env.GOOGLE_MAPS_API_KEY as string;
      const ApiKey = Constants?.expoConfig?.extra?.googleMapsApiKey as string;
      console.log(ApiKey);
      const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${ApiKey}&mode=driving`;

      const res = await fetch(url);
      const json = await res.json();
      // console.log(json);

      if (json.routes.length) {
        const points = polyline.decode(json.routes[0].overview_polyline.points);
        // console.log(points);
        const coords = points.map(([lat, lng]) => ({
          latitude: lat,
          longitude: lng,
        }));
        setRouteCoords(coords);
      }
    };

    fetchRoute();
  }, [currentLocation, delivery.address]);

  useEffect(() => {
    // Simulate different ETAs based on delivery priority
    const etaTimes = {
      high: "10 minutes",
      medium: "15 minutes",
      low: "25 minutes",
    };
    setEta(etaTimes[delivery.priority]);

    // In a real app, you would geocode the addresses to get coordinates
    // This is just placeholder logic
  }, [delivery]);

  const getPriorityClasses = (priority: "high" | "medium" | "low") => {
    switch (priority) {
      case "high":
        return "bg-red-100";
      case "medium":
        return "bg-yellow-100";
      case "low":
        return "bg-green-100";
      default:
        return "bg-green-100";
    }
  };

  const getPriorityTextClasses = (priority : "high" | "medium" | "low") => {
    switch (priority) {
      case "high":
        return "text-red-800";
      case "medium":
        return "text-yellow-800";
      case "low":
        return "text-green-800";
      default:
        return "text-green-800";
    }
  };

  return (
    <View className="flex-1 w-full px-2">
      <Card className="overflow-hidden rounded-lg my-2 shadow-lg">
        {/* should have a height of 320px atleast to work so that was the problem 
        IMP : make the recenter button also if can a google maps button to open the navigation there if we can or our own wala also
        */}
        <View style={{ height: 420 }}>
          <MapView
            style={{ flex: 1 }}
            provider={PROVIDER_GOOGLE}
            region={region}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsCompass={true}
            zoomEnabled={true}
            zoomControlEnabled={true}
          >
            <Marker
              coordinate={{
                latitude:
                  destinationCoordinates[0]?.latitude || region.latitude,
                longitude:
                  destinationCoordinates[0]?.longitude || region.longitude,
              }}
              title="Delivery Location"
              description={delivery.address}
            />
            <Polyline
              coordinates={routeCoords}
              strokeWidth={4}
              strokeColor="#2563eb"
            />
            <Marker
              coordinate={{
                latitude: routeCoords[0]?.latitude || region.latitude,
                longitude: routeCoords[0]?.longitude || region.longitude,
              }}
              title="Origin"
              description={currentLocation}
              pinColor="#111827"
            />
          </MapView>
        </View>

        <View className="p-4 bg-white">
          <View className="flex-col justify-between gap-2 mb-4">
            <View className="flex-row items-center">
              <Ionicons name="location" size={20} color="#2563eb" />
              <View className="ml-2">
                <Text className="font-bold text-base">{delivery.address}</Text>
                <Text className="text-xs text-gray-600">
                  Delivery #{delivery.id}
                </Text>
              </View>
            </View>
            <View className="flex-row items-center">
              <Ionicons name="time" size={20} color="#16a34a" />
              <Text className="ml-1 font-medium">ETA: {eta}</Text>
            </View>
          </View>

          <View className="mt-4 flex-row justify-between items-center">
            <View>
              <Text className="text-xs text-gray-600">
                From:{" "}
                <Text className="font-medium text-gray-700">
                  {currentLocation}
                </Text>
              </Text>
              <Text className="text-xs text-gray-600">
                Scheduled for:{" "}
                <Text className="font-medium text-gray-700">
                  {delivery.time}
                </Text>
              </Text>
            </View>
            <View
              className={`px-3 py-1 rounded-full ${getPriorityClasses(
                delivery.priority
              )}`}
            >
              <Text
                className={`text-xs font-medium ${getPriorityTextClasses(
                  delivery.priority
                )}`}
              >
                {delivery.priority.charAt(0).toUpperCase() +
                  delivery.priority.slice(1)}{" "}
                Priority
              </Text>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
}

const getCoordinates = async (address: string) => {
  const apiKey = Constants?.expoConfig?.extra?.googleMapsApiKey; // or from Constants.manifest.extra.googleMapsApiKey if using expo-constants
  const encodedAddress = encodeURIComponent(address);

  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "OK") {
      const location = data.results[0].geometry.location;
      return {
        latitude: location.lat,
        longitude: location.lng,
      };
    } else {
      console.error("Geocoding error:", data.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    return null;
  }
};
