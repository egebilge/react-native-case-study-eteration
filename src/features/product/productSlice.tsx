import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProduct } from "../../utils/IProduct"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { StorageKeys } from "../../types/StorageKeys"
import { IProductState } from "../../utils/IProductState"

const initialState: IProductState = {
  allProducts: [],
  cartItems: [],
  filteredProducts: [],
  favoriteItems: [],
  isLoading: false,
  error: null,
}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.allProducts = action.payload
    },
    setCartItems: (state, action: PayloadAction<IProduct[]>) => {
      state.cartItems = action.payload
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingItemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity += 1
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }
      saveCartItems(state.cartItems)
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
      saveCartItems(state.cartItems)
    },
    updateCartItemQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload
      const itemToUpdate = state.cartItems.find((item) => item.id === id)
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity
        saveCartItems(state.cartItems)
      }
    },
    sortProducts: (state, action: PayloadAction<string>) => {
      const sortedProducts = [...state.allProducts]
      switch (action.payload) {
        case "oldToNew":
          sortedProducts.sort(
            (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
          )
          break
        case "newToOld":
          sortedProducts.sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          )
          break
        case "priceHighToLow":
          sortedProducts.sort((a, b) => b.price - a.price)
          break
        case "priceLowToHigh":
          sortedProducts.sort((a, b) => a.price - b.price)
          break
      }
      state.allProducts = sortedProducts
    },
    filterProducts: (state, action: PayloadAction<string>) => {
      const searchQuery = action.payload.toLowerCase()
      if (searchQuery) {
        state.filteredProducts = state.allProducts.filter((product) =>
          product.name.toLowerCase().includes(searchQuery),
        )
      } else {
        state.filteredProducts = state.allProducts.slice(0, 12)
      }
    },
    addToFavorites: (state, action: PayloadAction<IProduct>) => {
      state.favoriteItems.push(action.payload)
      saveFavoriteItems(state.favoriteItems)
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favoriteItems = state.favoriteItems.filter((item) => item.id !== action.payload)
      saveFavoriteItems(state.favoriteItems)
    },
    setFavoriteItems: (state, action: PayloadAction<IProduct[]>) => {
      state.favoriteItems = action.payload
    },
    appendProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.filteredProducts = state.filteredProducts.concat(action.payload)
    },
  },
})

export const {
  setAllProducts,
  setCartItems,
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  sortProducts,
  filterProducts,
  appendProducts,
  addToFavorites,
  removeFromFavorites,
  setFavoriteItems,
} = productSlice.actions

const saveCartItems = async (cartItems: IProduct[]) => {
  try {
    await AsyncStorage.setItem(StorageKeys.CART, JSON.stringify(cartItems))
  } catch (error) {
    console.error("Error saving cart items", error)
  }
}

export const loadCartItems =
  () => async (dispatch: (arg0: { payload: IProduct[]; type: "product/setCartItems" }) => void) => {
    try {
      const cartItems = await AsyncStorage.getItem(StorageKeys.CART)
      if (cartItems) {
        dispatch(setCartItems(JSON.parse(cartItems)))
      }
    } catch (error) {
      console.error("Error loading cart items", error)
    }
  }

const saveFavoriteItems = async (favoriteItems: IProduct[]) => {
  try {
    await AsyncStorage.setItem(StorageKeys.FAVORITES, JSON.stringify(favoriteItems))
  } catch (error) {
    console.error("Error saving favorite items", error)
  }
}

export const loadFavoriteItems =
  () =>
  async (dispatch: (arg0: { payload: IProduct[]; type: "product/setFavoriteItems" }) => void) => {
    try {
      const favoriteItemsString = await AsyncStorage.getItem(StorageKeys.FAVORITES)
      if (favoriteItemsString) {
        const favoriteItems = JSON.parse(favoriteItemsString)
        dispatch(setFavoriteItems(favoriteItems))
      }
    } catch (error) {
      console.error("Error loading favorite items", error)
    }
  }
export default productSlice.reducer
