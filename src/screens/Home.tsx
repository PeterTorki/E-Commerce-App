import React, { useCallback } from "react";
import { View, Image, StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";
import ScreenContainer from "@/components/common/ScreenContainer";

const Home = () => {
  const handleCheck = () =>
    useCallback(() => {
      console.log("Hi");
    }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        <Image style={styles.mainImg} source={require("@/assets/home/homeBackground.png")} />
        <View style={styles.absoluteBox}>
          <Text style={styles.textImage}>Fashion Sale</Text>
          <TouchableOpacity style={styles.button} onPress={handleCheck}>
            <Text>Check</Text>
          </TouchableOpacity>
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
  },
  absoluteBox: {
    position: "absolute",
    left: 0,
    bottom: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 20,
  },
  textImage: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    alignSelf: "center",
    width: 190,
  },
  button: {
    paddingHorizontal: 80,
    paddingVertical: 12,
    borderRadius: 24,
    backgroundColor: "red",
  },
});

export default Home;
