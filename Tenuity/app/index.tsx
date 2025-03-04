// Tenuity/app/index.tsx (or App.tsx if you're not using file-based routing)
import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import "../global.css";

// Imports needed to connect to database
import {database, ref, set} from '../firebaseConfig';

// Simple test function to write into the database
const testWrite = async() => {
	try {
		// Adding dummy data to database
		await set(ref(database, 'Landlords/' + 'test_user'), {
			name: 'test_user',
			email: 'dudeinlongbeach@gmail.com',
			phone: '123456789'
		});
		console.log("Successfully wrote to the database");
	} catch(err){
		console.log("Error writing data:", err);
	}
}


export default function App() {
  const [isLandlord, setIsLandlord] = useState(true);

  return (
    <View className="flex-1 bg-white items-center justify-center px-4">
      {/* Logo & Title */}
      <View className="items-center mb-8">
        <Image
          source={require("../assets/images/logo.png")}
          className="w-[170px] h-[170px] mb-1"
          resizeMode="contain"
        />
      </View>

      {/* Form Container */}
      <View className="w-full max-w-sm border-2 border-blue-300 rounded-lg p-4">
        {/* Email Field */}
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          className="border border-blue-300 rounded p-3 mb-3"
        />
        {/* Password Field */}
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="border border-blue-300 rounded p-3 mb-4"
        />

        {/* Sign In Button */}
        <Link href="/dashboard" asChild>
          <TouchableOpacity 
            className="bg-blue-500 w-full py-3 rounded items-center mb-4"
            onPress={testWrite}
          >
            <Text className="text-white font-bold">Sign In</Text>
          </TouchableOpacity>
        </Link>

        {/* Forgot Password & Create Account */}
        <TouchableOpacity className="mb-2">
          <Link href="/forgot-password">
            <Text className="text-blue-500 text-center">Forgot password?</Text>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity className="mb-4">
          <Link href="/create-account">
            <Text className="text-blue-500 text-center">Create Account</Text>
          </Link>
        </TouchableOpacity>

        {/* Landlord/Tenant Toggle */}
        <View className="flex-row justify-center">
          <TouchableOpacity
            onPress={() => setIsLandlord(true)}
            className={`px-4 py-2 rounded-l ${
              isLandlord ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <Text
              className={`font-bold ${
                isLandlord ? "text-white" : "text-black"
              }`}
            >
              LL
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsLandlord(false)}
            className={`px-4 py-2 rounded-r ${
              !isLandlord ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <Text
              className={`font-bold ${
                !isLandlord ? "text-white" : "text-black"
              }`}
            >
              TE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
