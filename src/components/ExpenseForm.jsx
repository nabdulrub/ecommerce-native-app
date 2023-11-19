import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "./Button";

const ExpenseForm = ({ setModalVisible }) => {
  return (
    <View className="bg-gray-300 flex-1 p-6 relative">
      <Text className="mt-10 font-bold text-2xl">Add Expense</Text>
      <View className="absolute bottom-10 w-full right-8 flex flex-row items-center justify-between gap-x-5">
        <Button variant="danger" onPress={() => setModalVisible(false)}>
          Close
        </Button>
        <Button onPress={() => setModalVisible(false)}>Save</Button>
      </View>
    </View>
  );
};

export default ExpenseForm;
