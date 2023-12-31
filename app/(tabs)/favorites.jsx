import React from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import COLOR from "../../constants/color";
import { useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { removeFromFavorites } from "../../redux/slice/homeSlice";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    gap: 20,
    alignItems: "center",
  },
  btnLogin: {
    backgroundColor: COLOR.secondary,
    padding: 10,
    width: 200,
    borderRadius: 20,
  },
});

const Favorites = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const home = useSelector((state) => state.home);

  return isLoggedIn ? (
    <ScrollView style={{ flex: 1 }}>
      <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLOR.lightGray },
            headerShadowVisible: false,
            headerTitle: "Favorites",
            headerTitleStyle: {
              fontFamily: "DMBold",
            }
          }}
        />
      <View style={styles.container}>
        {home.favorites.length < 1 ? (
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontFamily: "DMBold", fontSize: 20, textAlign:"center" }}>
              No Favorites yet.
            </Text>
          </View>
        ) : (
          home.favorites.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                router.push({
                  pathname: `details/${item.id}`,
                  params: item.id,
                });
              }}>
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  borderWidth: 0.3,
                  borderColor: "grey",
                  width: 300,
                }}
                key={index}>
                <View style={{ borderRadius: 20 }}>
                  <Image
                    source={{ uri: item.propertyImage.image.url }}
                    style={{ width: "auto", height: 100, borderRadius: 10 }}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: 10,
                  }}>
                  <View style={{ flex: 2 }}>
                    <Text style={{ fontFamily: "DMBold", fontSize: 16 }}>
                      {item.name}
                    </Text>
                    <Text style={{ fontFamily: "DMRegular", fontSize: 16 }}>
                      Rating {item.reviews.score}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      alignItems: "flex-end",
                      justifyContent: "space-around",
                    }}>
                    <Text style={{ fontFamily: "DMRegular", fontSize: 16 }}>
                      {item.price.lead.formatted}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(removeFromFavorites(item.id));
                        console.log("ini hapus", item.id);
                      }}>
                      <MaterialCommunityIcons
                        name="heart"
                        color="red"
                        size={20}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </View>
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

export default Favorites;
