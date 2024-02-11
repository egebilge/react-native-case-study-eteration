import React, { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { BottomTabsNavigator } from "./src/navigation/bottom-tabs/BottomTabsNavigator"
import { Provider } from "react-redux"
import { store } from "./src/store"
import { loadCartItems, loadFavoriteItems } from "./src/features/product/productSlice"

const App = () => {
  useEffect(() => {
    store.dispatch(loadCartItems())
  }, [])

  useEffect(() => {
    store.dispatch(loadFavoriteItems())
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App
