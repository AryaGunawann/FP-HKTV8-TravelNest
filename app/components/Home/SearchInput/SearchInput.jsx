import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './SearchInput.style';
import COLOR from '../../../../constants/color';
import { useRouter } from 'expo-router';

const SearchInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(search);
  }, [search])

  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={COLOR.white}
        style={styles.searchInput}
        placeholder="Mau kemana hari ini?"
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <TouchableOpacity style={styles.btnSearch} onPress={() => {
        router.push({
          pathname: `search/${search}`,
          params: search,
        })
      }}>
        <Text style={{ fontFamily: 'DMMedium', color: "white", fontWeight:"bold" }}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
