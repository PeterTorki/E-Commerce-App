import React from "react";
import { View, Image, StyleSheet, ScrollView, Text } from "react-native";
import ScreenContainer from "@/components/common/ScreenContainer";

const Home = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <Image style={styles.mainImg} source={require("@/assets/home/")} />
        <View style={styles.absoluteBox}>
          <Text style={styles.textImage}>Fashion Sale</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainImg: {
    width: "100%",
    height: 628,
    resizeMode: "cover",
  },
  absoluteBox: {
    position: "absolute",
    left: 0,
    bottom: 0,
  },
  textImage: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default Home;
