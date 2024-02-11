import { View } from "react-native"
import { Favorites } from "../../components/favorites/Favorites"
import { ScaledSheet } from "react-native-size-matters"

// There should be free space to add more component to this container

const FavoritesContainer = () => {
  return (
    <View style={styles.container}>
      <Favorites />
    </View>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: "15@s",
  },
})

export { FavoritesContainer }
