import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
const HomeHeader = ({ searchHandler }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: SIZES.small, paddingHorizontal: 10 }}>
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={24} color={COLORS.white} />
          <TextInput
            placeholder="Search by NFT name"
            placeholderTextColor={COLORS.white}
            style={{ flex: 1, color: COLORS.white }}
            onChangeText={(e) => searchHandler(e)}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
  },
  searchContainer: {
    width: "100%",
    borderRadius: SIZES.small,
    backgroundColor: COLORS.cardBg,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 30,
  },
});
