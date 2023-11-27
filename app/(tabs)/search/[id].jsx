import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import COLOR from "../../../constants/color";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearch, resetSearch } from "../../../redux/slice/searchSlice";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.white,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});

const Search = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    dispatch(resetSearch());
  }, []);

  useEffect(() => {
    dispatch(fetchSearch(id));
  }, []);

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLOR.lightGray },
          headerShadowVisible: false,
          headerTitle: "Search",
          headerTitleStyle: { fontFamily: "DMBold" },
          headerLeft: () => <Text></Text>,
        }}
      />
      <ScrollView style={{ maxWidth: "100%", paddingHorizontal: 16 }}>
        <View style={styles.container}>
          {search.loading ? (
            <ActivityIndicator />
          ) : (
            search &&
            search?.search?.sr?.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  router.push({
                    pathname: `details/${item.hotelId}`,
                    params: item.hotelId,
                  })
                }>
                <View key={index}>
                  <Text
                    style={{
                      fontFamily: "DMMedium",
                      color: "white",
                      marginVertical: 5,
                      padding: 10,
                      borderRadius: 8,
                      backgroundColor: COLOR.secondary,
                    }}>
                    {item.regionNames.fullName}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
