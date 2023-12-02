import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import COLOR from "../../../constants/color";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../redux/slice/homeSlice";
import {
  getDetails,
  resetDetails,
  getDescription,
} from "../../../redux/slice/detailSlice";
import { useSelector, useDispatch } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const HotelDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    dispatch(resetDetails());
    dispatch(getDetails({ id }));
    dispatch(getDescription({ id }));
  }, [id]);

  const { details, description, loading } = useSelector(
    (state) => state.detail
  );

  useEffect(() => {
    console.log("Details:", details);
  }, [details]);

  const IMAGES = details?.propertyGallery?.images;

  useEffect(() => {
    console.log("Images Array:", IMAGES);
    console.log("First Image:", IMAGES?.[0]?.image?.url);
  }, [IMAGES]);

  const IMAGE = IMAGES?.slice(1, 6).map((item) => item.image);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLOR.lightGray },
          headerShadowVisible: false,
          headerTitle: "Hotel Details",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "DMBold",
          },
          headerLeft: () => <Text></Text>,
        }}
      />
      <ScrollView style={{ maxWidth: "90%", paddingHorizontal: 14 }}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <View style={{ gap: 5 }}>
            <View>
              {IMAGES?.[0]?.image?.url && (
                <Image
                  style={{
                    width: "100%",
                    height: 200,
                    borderRadius: 10,
                    alignSelf: "center",
                  }}
                  source={{ uri: IMAGES?.[0]?.image?.url }}
                />
              )}
            </View>
            <View style={styles.detailContainer}>
              <View>
                <Text style={styles.name}>{details?.summary?.name}</Text>
                <Text style={styles.tagline}>{details?.tagline}</Text>
              </View>
              <View>
                <Text style={{ fontFamily: "DMMedium" }}>
                  <MaterialCommunityIcons
                    name="star"
                    size={18}
                    color={COLOR.accent}
                  />
                  {details?.summary?.overview?.propertyRating?.rating}
                </Text>
              </View>
              <View>
                {!description ? (
                  <Text style={{ fontFamily: "DMRegular" }}>
                    Tidak ada deskripsi.
                  </Text>
                ) : (
                  <Text style={{ fontFamily: "DMRegular" }}>{description}</Text>
                )}
              </View>
              <View>
                <FlatList
                  data={IMAGE}
                  renderItem={({ item }) => (
                    <Image
                      source={{ uri: item.url }}
                      style={{
                        width: 200,
                        height: 100,
                        borderRadius: 10,
                        marginRight: 15,
                      }}
                    />
                  )}
                  keyExtractor={(item) => item.url}
                  horizontal
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.btnBooking}
              onPress={() => {
                if (auth.isLoggedIn === true) {
                  return router.push({
                    pathname: `booking/${details?.summary?.name}`,
                    params: details?.summary?.name,
                  });
                }
                router.push("login");
              }}
            >
              <MaterialCommunityIcons
                name="book-clock"
                color="white"
                size={20}
              />
              <Text style={styles.bookingText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    gap: 8,
  },
  name: {
    fontFamily: "DMBold",
    fontSize: 20,
    paddingTop: 10,
  },
  tagline: {
    fontFamily: "DMRegular",
  },
  btnFav: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 15,
  },
  btnBooking: {
    backgroundColor: COLOR.secondary,
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  bookingText: {
    fontFamily: "DMBold",
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
});

export default HotelDetail;
