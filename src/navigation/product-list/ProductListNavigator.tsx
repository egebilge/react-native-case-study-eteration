import { createStackNavigator } from "@react-navigation/stack"
import { ProductDetailScreen, ProductListScreen } from "../../screens"
import { moderateScale } from "react-native-size-matters"

const Stack = createStackNavigator()

const ProductListNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductListStack"
        component={ProductListScreen}
        options={{
          title: "E-Market",
          headerStyle: {
            backgroundColor: "#2A59FE",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "left",
          headerTitleStyle: {
            fontSize: moderateScale(24),
            fontWeight: "800",
            lineHeight: moderateScale(29.26),
          },
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        options={{ title: "Product Detail" }}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  )
}

export { ProductListNavigator }
