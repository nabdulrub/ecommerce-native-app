import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { ScrollView, Text, View } from "react-native";
import SearchHistory from "../components/SearchHistory";
import Categories from "../components/Categories";
import { foodCategories } from "../data/categories";
import { getToday } from "../utils/utils";
import TodayActions from "../components/TodayActions";

const TodayScreen = ({ navigation }) => {
  const currentDate = getToday();

  return (
    <ScrollView className="flex-1 bg-white px-6 pt-4">
      <View>
        <Text className="text-3xl font-medium mb-1">Today</Text>
        <View className="flex flex-row items-center gap-1">
          <View className="bg-red-900 rounded-3xl px-2 py-0.5">
            <Text className="text-base text-white">{currentDate.weekday}</Text>
          </View>
          <View className="bg-black rounded-3xl px-2 py-0.5">
            <Text className="text-base text-white">{currentDate.date}</Text>
          </View>
        </View>
      </View>
      <TodayActions />
    </ScrollView>
  );
};

export default TodayScreen;
