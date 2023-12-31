import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";

import {
  addToFavorites,
  removeFromFavorites,
  getHome,
} from "../../../../redux/slice/homeSlice";
import COLOR from "../../../../constants/color";

const PopularIndonesia = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const home = useSelector((state) => state.home);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getHome());
  }, [dispatch]);

  return (
    <>
      <Text style={{ fontFamily: "DMBold", color: "black" }}>
        POPULAR DESTINATIONS
      </Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => setModalVisible(!openModal)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setOpenModal(!openModal)}
              style={{ alignSelf: "flex-end" }}>
              <MaterialCommunityIcons name="close" size={18} />
            </TouchableOpacity>
            <Text style={styles.modalText}>Anda belum login.</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setOpenModal(!openModal);
                router.replace("login");
              }}>
              <Text style={styles.textStyle}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{ gap: 16 }}>
        {!isLoggedIn
          ? home.home.map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  console.log(item.id);
                  router.push({
                    pathname: `details/${item.id}`,
                    params: item.id,
                  });
                }}
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  borderWidth: 0.3,
                  borderColor: "grey",
                }}
                key={index}>
                <View style={{ borderRadius: 20 }}>
                  <Image
                    source={{ uri: item.propertyImage.image.url }}
                    style={{ width: "auto", height: 125, borderRadius: 10 }}
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
                    <Text
                      style={{
                        fontFamily: "DMRegular",
                        fontSize: 16,
                        alignItems: "center",
                      }}>
                      <MaterialCommunityIcons
                        name="star"
                        color={COLOR.accent}
                        size={16}
                      />
                      <Text>{item.reviews.score}</Text>
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                    }}>
                    <Text style={{ fontFamily: "DMRegular", fontSize: 16}}>
                      {item.price.lead.formatted}
                    </Text>
                    <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
                      <MaterialCommunityIcons
                        name="heart-outline"
                        color="black"
                        size={25}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          : home.home.map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  console.log(item.id);
                  router.push({
                    pathname: `details/${item.id}`,
                    params: item.id,
                  });
                }}
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  borderWidth: 0.3,
                  borderColor: "grey",
                }}
                key={index}>
                <View style={{ borderRadius: 20 }}>
                  <Image
                    source={{ uri: item.propertyImage.image.url }}
                    style={{ width: "auto", height: 125, borderRadius: 10 }}
                  />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    margin: 10,
                  }}>
                  <View style={{ flex: 2 }}>
                    <Text style={{ fontFamily: "DMBold", fontSize: 16, paddingBottom: 15 }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "DMRegular",
                        fontSize: 16,
                        alignItems: "center",
                      }}>
                      <MaterialCommunityIcons
                        name="star"
                        color={COLOR.accent}
                        size={16}
                      />
                      <Text>{item.reviews.score}</Text>
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                    }}>
                    <Text style={{ fontFamily: "DMRegular", fontSize: 16 }}>
                      {item.price.lead.formatted}
                    </Text>
                    {home.favorites.find(
                      (favorite) => favorite.id === item.id
                    ) ? (
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(removeFromFavorites(item.id));
                          console.log("ini hapus", item.id);
                        }}>
                        <MaterialCommunityIcons
                          name="heart"
                          color="red"
                          size={25}
                        />
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          dispatch(addToFavorites(item));
                          console.log("ini tambah", item);
                        }}>
                        <MaterialCommunityIcons
                          name="heart-outline"
                          color="black"
                          size={25}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 10,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 50,
    elevation: 2,
    backgroundColor: COLOR.secondary,
  },
  textStyle: {
    color: COLOR.primary,
    fontFamily: "DMBold",
    textAlign: "center",
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily: "DMRegular",
    fontSize: 18,
  },
});

export default PopularIndonesia;
