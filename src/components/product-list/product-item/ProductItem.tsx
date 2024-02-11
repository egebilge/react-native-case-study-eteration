import React, { useCallback } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { IProduct } from "../../../utils/IProduct"
import { styles } from "./styles"
import { useWindowDimensions } from "../../../hooks/common/useWindowDimensions"
import { useDispatch, useSelector } from "react-redux"
import Ionicons from "react-native-vector-icons/Ionicons"
import { RootState } from "../../../store"
import {
  addToCart,
  addToFavorites,
  removeFromFavorites,
} from "../../../features/product/productSlice"
import { NavigationProp, useNavigation } from "@react-navigation/native"

interface IProductItemProps {
  readonly product: IProduct
}

const ProductItem: React.FC<IProductItemProps> = ({ product }) => {
  const windowDimensions = useWindowDimensions()
  const numColumns = 2
  const itemWidth = (windowDimensions.width - 30) / numColumns
  const navigation = useNavigation<NavigationProp<Record<string, object>>>()
  const dispatch = useDispatch()
  const { favoriteItems } = useSelector((state: RootState) => state.product)
  const isFavorite = favoriteItems.some((item) => item.id === product.id)

  const addToCartAndNavigateCart = useCallback(() => {
    dispatch(addToCart(product))
    navigation.navigate("Cart" as never)
  }, [dispatch, product, navigation])

  const goToProductDetail = useCallback(() => {
    navigation.navigate("ProductDetail", { product } as never)
  }, [navigation, product])

  const toggleFavorite = useCallback(() => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id))
    } else {
      dispatch(addToFavorites(product))
    }
  }, [dispatch, isFavorite, product])

  return (
    <View style={[styles.productCard, { width: itemWidth }]} key={product.id}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <View onTouchEnd={goToProductDetail}>
        <Text style={styles.productPrice}>{product.price} ₺</Text>
        <Text style={styles.productTitle}>{product.name}</Text>
      </View>
      <TouchableOpacity style={styles.addToCartButton} onPress={addToCartAndNavigateCart}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
        <Ionicons
          name={isFavorite ? "star" : "star-outline"}
          size={30}
          color={isFavorite ? "gold" : "gold"}
        />
      </TouchableOpacity>
    </View>
  )
}

export { ProductItem }
