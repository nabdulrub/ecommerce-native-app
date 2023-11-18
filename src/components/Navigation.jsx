import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Navigation = () => {
  return (
    <View className="bg-white absolute bottom-4 w-full px-10 pb-2 pt-4 flex flex-row justify-between items-center border-t-[1px] border-gray-300">
      <View className="flex flex-col items-center justify-center gap-2">
        <AntDesign name="home" size={24} color="black" />
        <Text>Home</Text>
      </View>
      <View className="flex flex-col items-center justify-center gap-2">
        <AntDesign name="search1" size={24} color="black" />
        <Text>Browse</Text>
      </View>
      <View className="flex flex-col items-center justify-center gap-2">
        <AntDesign name="shoppingcart" size={24} color="black" />
        <Text>Cart</Text>
      </View>
      <View className="flex flex-col items-center justify-center gap-2">
        <AntDesign name="user" size={24} color="black" />
        <Text>Profile</Text>
      </View>
    </View>
  );
};

export default Navigation;
