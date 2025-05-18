import { View } from "react-native";
import { Text, Surface, Button, TextInput } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function ProfileSettings() {
  return (
    <View className="space-y-4 mt-4">
      <Surface className="p-4 rounded-lg elevation-2">
        <Text className="text-base font-bold mb-3">Personal Information</Text>
        <View className="items-center mb-4">
          <View className="w-20 h-20 rounded-full bg-blue-100 justify-center items-center mb-2 relative">
            <MaterialCommunityIcons name="account" size={40} color="#3b82f6" />
            <Button
              mode="contained"
              compact
              icon="camera"
              className="absolute bottom-0 right-0 w-6 h-6 p-0 min-w-0 rounded-full"
            />
          </View>
          <Text className="font-medium">Alex Johnson</Text>
          <Text className="text-xs text-gray-500">Driver ID: DRV-12345</Text>
        </View>

        <View className="space-y-4">
          <View className="flex-row space-x-2">
            <View className="flex-1 space-y-1">
              <Text className="text-xs">First Name</Text>
              <TextInput
                mode="outlined"
                defaultValue="Alex"
                dense
                className="bg-white"
              />
            </View>
            <View className="flex-1 space-y-1">
              <Text className="text-xs">Last Name</Text>
              <TextInput
                mode="outlined"
                defaultValue="Johnson"
                dense
                className="bg-white"
              />
            </View>
          </View>

          <View className="space-y-1">
            <Text className="text-xs">Email</Text>
            <TextInput
              mode="outlined"
              defaultValue="alex.johnson@example.com"
              keyboardType="email-address"
              dense
              className="bg-white"
            />
          </View>

          <View className="space-y-1">
            <Text className="text-xs">Phone Number</Text>
            <TextInput
              mode="outlined"
              defaultValue="(555) 123-4567"
              keyboardType="phone-pad"
              dense
              className="bg-white"
            />
          </View>

          <View className="space-y-1">
            <Text className="text-xs">Address</Text>
            <TextInput
              mode="outlined"
              defaultValue="456 Driver Lane, Cityville, ST 12345"
              dense
              className="bg-white"
            />
          </View>

          <Button mode="contained" className="mt-2">
            Save Changes
          </Button>
        </View>
      </Surface>

      <Surface className="p-4 rounded-lg elevation-2">
        <Text className="text-base font-bold mb-3">Security</Text>
        <View className="space-y-4">
          <View className="space-y-1">
            <Text className="text-xs">Current Password</Text>
            <TextInput
              mode="outlined"
              secureTextEntry
              dense
              className="bg-white"
            />
          </View>

          <View className="space-y-1">
            <Text className="text-xs">New Password</Text>
            <TextInput
              mode="outlined"
              secureTextEntry
              dense
              className="bg-white"
            />
          </View>

          <View className="space-y-1">
            <Text className="text-xs">Confirm New Password</Text>
            <TextInput
              mode="outlined"
              secureTextEntry
              dense
              className="bg-white"
            />
          </View>

          <Button mode="outlined" icon="shield" className="mt-2">
            Change Password
          </Button>
        </View>
      </Surface>
    </View>
  );
}
