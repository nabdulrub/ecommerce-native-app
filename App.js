import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { foodCategories } from "./src/data/categories";
import SearchBar from "./src/components/SearchBar";
import SearchHistory from "./src/components/SearchHistory";
import Categories from "./src/components/Categories";
import Navigation from "./src/components/Navigation";

export default function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [categories] = useState(foodCategories);

  const [searchHistory, setSearchHistory] = useState([]);
  const [search, setSearch] = useState("");

  const addToSearchHistory = (search) => {
    if (search) {
      setSearchHistory([search, ...searchHistory]);
    }
  };

  const setCurrentSearch = (currentSearch) => {
    setSearch(currentSearch);
  };

  const onSearchSubmit = () => {
    addToSearchHistory(search);
    setSearch("");
  };

  const resetCurrentSearch = () => {
    setSearch("");
  };

  const resetSearchHistory = () => {
    setSearchHistory([]);
  };

  return (
    <SafeAreaView className="relative flex-1">
      <StatusBar style="auto" />
      <SearchBar
        setIsSearching={setIsSearching}
        isSearching={isSearching}
        setCurrentSearch={setCurrentSearch}
        onSearchSubmit={onSearchSubmit}
        search={search}
        resetCurrentSearch={resetCurrentSearch}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-white flex-1 px-6 mb-[70px]">
          <SearchHistory
            resetSearchHistory={resetSearchHistory}
            searchHistory={searchHistory}
            setCurrentSearch={setCurrentSearch}
          />

          <Categories categories={categories} />
        </View>
      </ScrollView>
      <Navigation />
    </SafeAreaView>
  );
}
