import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Navigation = ({ navigation }) => {
  const screens = [
    { title: "Home", screen: "Home", icon: "home" },
    { title: "Browse", screen: "Browse", icon: "search1" },
    { title: "Cart", screen: "Cart", icon: "shoppingcart" },
    { title: "Profile", screen: "Profile", icon: "user" },
  ];

  return (
    <View className="bg-white absolute bottom-0 w-full px-10 pt-4 flex flex-row justify-between items-center border-t-[1px] border-gray-300">
      {screens.map((screen, index) => (
        <TouchableOpacity
          className="flex flex-col items-center justify-center gap-2"
          onPress={() => navigation.navigate(screen.screen)}
        >
          <AntDesign name={screen.icon} size={24} color="black" />
          <Text>{screen.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Navigation;
