import React from "react"
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { IProduct } from "../../utils/IProduct"
import { removeFromFavorites } from "../../features/product/productSlice"
import { styles } from "./style"
import { RootState } from "../../store"

const FavoritesScreen = () => {
  const dispatch = useDispatch()
  const { favoriteItems } = useSelector((state: RootState) => state.product, shallowEqual)

  const removeFavorite = (productId: string) => {
    dispatch(removeFromFavorites(productId))
  }

  const renderFavoriteItem = ({ item }: { item: IProduct }) => (
    <TouchableOpacity onPress={() => removeFavorite(item.id)} style={styles.favoriteItem}>
      <Image source={{ uri: item.image }} style={styles.favoriteItemImage} />
      <Text style={styles.favoriteItemTitle}>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {favoriteItems.length > 0 ? (
        <FlatList
          data={favoriteItems}
          renderItem={renderFavoriteItem}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text style={styles.noFavoritesText}>You haven't added any favorites yet.</Text>
      )}
    </View>
  )
}

export default FavoritesScreen
