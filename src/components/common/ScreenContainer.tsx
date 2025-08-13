import React, { ReactNode } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface ScreenContainerProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
  edges?: ("top" | "bottom" | "left" | "right")[];
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  style,
  edges = ["top", "left", "right", "bottom"],
}) => {
  return (
    <SafeAreaView style={[styles.container, style]} edges={edges}>
      {children}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default ScreenContainer;
