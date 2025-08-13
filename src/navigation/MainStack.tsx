import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "@/navigation/TabNavigator";
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        options={{
          headerShown: false,
        }}
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
