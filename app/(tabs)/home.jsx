import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import SearchInput from "../components/Home/SearchInput/SearchInput";
import COLOR from "../../constants/color";
import TopIndonesia from "../components/Home/TopIndonesia/TopIndonesia";
import PopularIndonesia from "../components/Home/PopularIndonesia/PopularIndonesia";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { resetDetails } from "../../redux/slice/detailSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    gap: 20,
  },

  listContainer: {
    flex: 1,
    borderRadius: 20,
    marginVertical: 8,
  },
});

const Home = () => {
  const dispatch = useDispatch();
  const {isLoggedIn,fullName} = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    dispatch(resetDetails());
  }, []);

  return isLoggedIn ? (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.lightGray }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLOR.lightGray },
            headerShadowVisible: false,
            headerTitle: "TravelNest",
            headerTitleStyle: {
              fontFamily: "DMBold",
            },
            headerTitleAlign:"center",
          }}
        />
        <View style={{ backgroundColor: COLOR.lightGray }}>
        <Text style={{ 
          fontFamily: "DMBold", 
          color: "black",
          fontSize:20,
          paddingLeft:15 }}>
        Welcome, {fullName}.
      </Text>
          <SearchInput />
          <View style={styles.container}>
            <TopIndonesia />
            <PopularIndonesia />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  ) : (
    <ScrollView>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.lightGray }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLOR.lightGray },
            headerShadowVisible: false,
            headerTitle: "TravelNest",
            headerTitleStyle: {
              fontFamily: "DMBold",
            },
            headerTitleAlign:"center",
          }}
        />
        <View style={{ backgroundColor: COLOR.lightGray }}>
        <Text style={{ 
          fontFamily: "DMBold", 
          color: "black",
          fontSize:20,
          paddingLeft:15 }}>
        Welcome.
      </Text>
          <SearchInput />
          <View style={styles.container}>
            <TopIndonesia />
            <PopularIndonesia />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
};

export default Home;
