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
import ICON from "../../constants/icon";
import COLOR from "../../constants/color";
import { useSelector, useDispatch } from "react-redux";
import { clearBooking } from "../../redux/slice/bookingSlice";

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: COLOR.secondary,
    padding: 10,
    width: 200,
    borderRadius: 20,
  },

  container: {
    flex: 1,
    gap: 10,
  },

  profileContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 26,
    gap: 20,
    margin: 16,
  },
  profileInfo: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  profileHistory: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  listHistory: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 16,
    gap: 20,
    marginStart: 16,
    marginEnd: 16,
  },
  historyContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

const Profile = () => {
  const router = useRouter();
  const { isLoggedIn, fullName, email, telp } = useSelector(
    (state) => state.auth
  );
  const favorite = useSelector((state) => state.home.favorites);
  const booking = useSelector((state) => state.booking.booking);
  const dispatch = useDispatch();

  console.log(booking.map((item) => item.checkIn));

  return isLoggedIn ? (
    <View style={styles.container}>
      <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLOR.lightGray },
            headerShadowVisible: false,
            headerTitle: "Profile",
            headerTitleStyle: {
              fontFamily: "DMBold",
            }
          }}
        />
      <View style={styles.profileContainer}>
        <View style={styles.profileInfo}>
          <View>
            <Image
              source={ICON.person}
              style={{ height: 50, width: 50, borderRadius: 10 }}
            />
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", textAlign: "center" }}>
            <Text style={{ fontFamily: "DMBold" }}>{fullName}</Text>
            <Text style={{ fontFamily: "DMRegular" }}>{email}</Text>
          </View>
        </View>
        <View style={styles.profileHistory}>
          <View style={{ textAlign: "center" }}>
            <View>
              <Text>Bookings</Text>
            </View>
            <View>
              <Text style={{ color: "#32a852", fontWeight: "bold" }}>
                {booking.length}
              </Text>
            </View>
          </View>
          <View style={{ textAlign: "center" }}>
            <View>
              <Text>Favorites</Text>
            </View>
            <View>
              <Text style={{ color: "#32a852", fontWeight: "bold" }}>
                {favorite.length}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text
            style={{ padding: 10, fontWeight: "bold", textAlign: "center" }}>
            List Booking
          </Text>
          <TouchableOpacity onPress={() => dispatch(clearBooking())}>
            <Text
              style={{
                padding: 10,
                fontWeight: "bold",
                textAlign: "center",
                color: "red",
              }}>
              Hapus History
            </Text>
          </TouchableOpacity>
        </View>

        {booking.length < 1 ? (
          <View style={styles.listHistory}>
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontFamily: "DMRegular" }}>No History</Text>
            </View>
          </View>
        ) : (
          booking.map((item, index) => (
            <View style={styles.listHistory} key={index}>
              <View style={styles.historyContainer}>
                <View>
                  <Image
                    source={{ uri: item.propertyGallery.images[0].image.url }}
                    style={{ height: 50, width: 330, borderRadius: 10 }}
                  />
                </View>
                <View>
                  <View>
                    <Text style={{ fontFamily: "DMMedium" }}>
                      Nama : {item.summary.name}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontFamily: "DMMedium" }}>
                      Lokasi : {item.summary.location.address.addressLine}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontFamily: "DMMedium" }}>
                      Rating : {item.summary.overview.propertyRating.rating}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 10,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                    <View>
                      <Text style={{ fontFamily: "DMMedium" }}>Check In</Text>
                      <Text style={{ fontFamily: "DMMedium" }}>
                        {booking.map((item) => item.checkIn)}
                      </Text>
                    </View>
                    <View>
                      <Text style={{ fontFamily: "DMMedium" }}>Check Out</Text>
                      <Text style={{ fontFamily: "DMMedium" }}>
                        {booking.map((item) => item.checkOut)}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          ))
        )}
      </View>
    </View>
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
          Belum login?
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

export default Profile;
