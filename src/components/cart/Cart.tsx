import React, { useEffect, useMemo } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import {
  loadCartItems,
  removeFromCart,
  updateCartItemQuantity,
} from "../../features/product/productSlice"
import { IProduct } from "../../utils/IProduct"
import { styles } from "./style"
import { AppDispatch, RootState } from "../../store"

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.product.cartItems)
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCartItems())
  }, [dispatch])

  const handleUpdateItemQuantity = (productId: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateCartItemQuantity({ id: productId, quantity }))
    } else {
      dispatch(removeFromCart(productId))
    }
  }

  const renderCartItem = ({ item }: { item: IProduct }) => {
    return (
      <View style={styles.cartItem}>
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}₺</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.buttonQuantityWrapper}
            onPress={() => handleUpdateItemQuantity(item.id, item.quantity - 1)}
          >
            <Text style={styles.buttonTextQuantity}>-</Text>
          </TouchableOpacity>

          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.buttonQuantityWrapper}
            onPress={() => handleUpdateItemQuantity(item.id, item.quantity + 1)}
          >
            <Text style={styles.buttonTextQuantity}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const total = useMemo(() => {
    return cartItems.reduce(
      (acc: number, item: { price: number; quantity: number }) => acc + item.price * item.quantity,
      0,
    )
  }, [cartItems])

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
        ListFooterComponent={<View style={{ height: 50 }} />}
        ListEmptyComponent={<Text style={styles.emptyCartText}>No items in cart</Text>}
      />
      <View style={styles.footer}>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceUpperText}>Total:</Text>
          <View style={styles.totalPriceSpace} />
          <Text style={styles.totalPriceLowerText}>{`${total} ₺`}</Text>
        </View>
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => console.log("Complete")}>
          <Text style={styles.buttonText}>Complete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export { Cart }
