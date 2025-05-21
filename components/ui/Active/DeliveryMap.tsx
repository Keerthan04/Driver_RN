import { Delivery } from "@/types";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import polyline from "@mapbox/polyline";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import { Linking, Platform, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { Button, Card } from "react-native-paper";
import { deliveries } from "@/Lib/sampleDeliveries";
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
  const [originCoords, setOriginCoords] = useState({
    latitude: 13.3409,
    longitude: 74.7421,
  });
  const [destCoords, setDestCoords] = useState({
    latitude: 13.3409,
    longitude: 74.7421,
  });

  const delivery = deliveries.find((d) => d.id === deliveryId) as Delivery;
  console.log("Delivery ", delivery);
  console.log("Delivery ID ", deliveryId);
  // const delivery = deliveries[1];
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
        setOriginCoords(originCoords);
        setDestCoords(destinationCoords);
      }

      // const ApiKey = process.env.GOOGLE_MAPS_API_KEY as string;
      const ApiKey = Constants?.expoConfig?.extra?.googleMapsApiKey as string;
      // console.log(ApiKey);
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

  const getPriorityTextClasses = (priority: "high" | "medium" | "low") => {
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
  //!IMP -> this emulator direct location taking so shd see
  // Function to open Google Maps navigation
  // This function will be called when the user clicks the "Start Delivery" button
  const openGoogleMapsNavigation = () => {
    // const origin = `${originCoords.latitude},${originCoords.longitude}`;
    // const destination = `${destCoords.latitude},${destCoords.longitude}`;
    // console.log("Origin: ", origin);
    // console.log("Destination: ", destination);
    // // Check if Google Maps is installed (primarily for iOS)
    // Linking.canOpenURL("comgooglemaps://")
    //   .then((hasGoogleMaps) => {
    //     if (Platform.OS === "ios" && hasGoogleMaps) {
    //       // Use Google Maps app on iOS if available
    //       Linking.openURL(
    //         `comgooglemaps://?saddr=${origin}&daddr=${destination}&directionsmode=driving`
    //       );
    //     } else if (Platform.OS === "ios") {
    //       // Fallback to Apple Maps on iOS
    //       Linking.openURL(
    //         `maps://?saddr=${origin}&daddr=${destination}&dirflg=d`
    //       );
    //     } else {
    //       // For Android devices
    //       // Google Maps is the default, no need to check if installed
    //       Linking.openURL(`google.navigation:q=${destination}&mode=d`);
    //     }
    //   })
    //   .catch((err) => {
    //     // If error occurs with deep linking, fall back to web URL
    //     const webUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
    //     Linking.openURL(webUrl);
    //     console.error("Error opening navigation:", err);
    //   });
    // const url =
    //   Platform.OS === "ios"
    //     ? `comgooglemaps://?saddr=${origin}&daddr=${destination}&directionsmode=driving`
    //     : `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving&dir_action=navigate`;

    // Linking.openURL(url).catch((err) =>
    //   console.error("An error occurred", err)
    // );
    const destination = "37.4258,-122.0800"; // Shoreline Amphitheatre
    const url = `google.navigation:q=${destination}&mode=d`;
    Linking.openURL(url);


    Linking.openURL(url).catch((err) =>
      console.error("Failed to launch navigation:", err)
    );
  };
  // const openGoogleMapsNavigation = () => {
  //   // Make sure origin and destination coordinates are explicitly defined
  //   // If your coordinates are stored elsewhere, make sure to use them properly

  //   // Example for Udupi coordinates (you should replace with your actual values)
  //   // Udupi city center coordinates as an example
  //   const originCoords = {
  //     latitude: 13.3408807,
  //     longitude: 74.7421427,
  //   };

  //   // Destination example - Manipal in Udupi district
  //   const destCoords = {
  //     latitude: 13.3554792,
  //     longitude: 74.70444250000001,
  //   };

  //   // Format the coordinates properly for the URLs
  //   const origin = `${originCoords.latitude},${originCoords.longitude}`;
  //   const destination = `${destCoords.latitude},${destCoords.longitude}`;

  //   console.log(`Attempting navigation from ${origin} to ${destination}`);

  //   // When running in emulator, we might want to bypass device location
  //   // and force our specific coordinates
  //   if (Platform.OS === "android") {
  //     // For Android emulator, we can use the google.navigation URI scheme
  //     // or fall back to the web URL which works better in emulator
  //     const navigationUrl = `google.navigation:q=${destCoords.latitude},${destCoords.longitude}`;
  //     const webFallbackUrl = `https://www.google.com/maps/dir/${origin}/${destination}/`;

  //     Linking.canOpenURL(navigationUrl)
  //       .then((supported) => {
  //         if (supported) {
  //           return Linking.openURL(navigationUrl);
  //         } else {
  //           console.log(
  //             "Native navigation not supported in emulator, using web URL"
  //           );
  //           return Linking.openURL(webFallbackUrl);
  //         }
  //       })
  //       .catch((err) => {
  //         console.error("Error opening Maps:", err);
  //         // Fallback option that always works in emulator
  //         Linking.openURL(webFallbackUrl);
  //       });
  //   } else if (Platform.OS === "ios") {
  //     // For iOS emulator
  //     Linking.canOpenURL("comgooglemaps://")
  //       .then((hasGoogleMaps) => {
  //         if (hasGoogleMaps) {
  //           // Google Maps installed
  //           Linking.openURL(
  //             `comgooglemaps://?saddr=${origin}&daddr=${destination}&directionsmode=driving&navigate=yes`
  //           );
  //         } else {
  //           // Apple Maps fallback
  //           Linking.openURL(
  //             `maps://?saddr=${origin}&daddr=${destination}&dirflg=d&t=m`
  //           );
  //         }
  //       })
  //       .catch((err) => {
  //         console.error("Error opening Maps:", err);
  //         // Web fallback that works in emulator
  //         Linking.openURL(
  //           `https://www.google.com/maps/dir/${origin}/${destination}/`
  //         );
  //       });
  //   }
  // };


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
            <View className=" w-full p-2 flex-row justify-between items-center rounded-lg">
              <View className="flex-row items-center">
                <Ionicons name="time" size={20} color="#16a34a" />
                <Text className="ml-1 font-medium">ETA: {eta}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    openGoogleMapsNavigation();
                  }}
                >
                  <Button
                    mode="elevated"
                    className="w-full rounded-lg items-center justify-center p-2 mt-3 mb-3"
                    buttonColor="#FFD86B"
                  >
                    <View className="flex-row items-center justify-center">
                      <AntDesign name="checkcircleo" size={15} color="black" />
                      <Text className="text-black font-semibold text-medium ml-2">
                        Start Delivery
                      </Text>
                    </View>
                  </Button>
                </TouchableOpacity>
              </View>
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
  console.log("Address: ", address);
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
