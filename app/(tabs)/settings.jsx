import React from "react";
import { View, SafeAreaView, Image, ScrollView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import COLOR from "../../constants/color";
import ICON from "../../constants/icon";
import { StyleSheet, TouchableOpacity } from "react-native";
import FormEdit from "../components/Settings/FormEdit";
import { useSelector } from "react-redux";

const Settings = () => {
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.auth);

  return isLoggedIn ? (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLOR.lightGray },
            headerShadowVisible: false,
            headerTitle: "Settings",
            headerTitleStyle: {
              fontFamily: "DMBold",
            },
          }}
        />
        <View style={styles.icon}>
          <Image source={ICON.person} />
        </View>
        <View style={styles.formContainer}>
          <FormEdit />
        </View>
      </SafeAreaView>
    </ScrollView>
  ) : (
    <ScrollView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLOR.lightGray },
          // headerShadowVisible: false,
          headerTitle: "",
          headerTitleStyle: {
            fontFamily: "DMBold",
          },
        }}
      />
      <View
        style={{
          alignItems: "center",
          height: 600,
          justifyContent: "center",
          gap: 10,
        }}>
        <Text style={{ fontFamily: "DMMedium", fontSize: 20 }}>
        Not Logged in?
        </Text>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            router.replace("login");
          }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "DMBold",
              fontSize: 25,
              color:"white"
            }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.lightGray,
    gap: 20,
  },

  icon: {
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  formContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    flex: 1,
  },

  btnLogin: {
    backgroundColor: COLOR.secondary,
    padding: 10,
    width: 200,
    borderRadius: 20,
  },
});

export default Settings;
