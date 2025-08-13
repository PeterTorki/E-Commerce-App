import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "@/navigation/HomeStack";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="HomeStack"
        component={HomeStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
