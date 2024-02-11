import { ScaledSheet } from "react-native-size-matters"

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "20@s",
    fontWeight: "bold",
    marginVertical: "20@s",
  },
  noFavoritesText: {
    fontSize: "16@s",
  },
  favoriteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10@s",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  favoriteItemImage: {
    width: "50@s",
    height: "50@s",
    borderRadius: "25@s",
    marginRight: "10@s",
  },
  favoriteItemText: {
    fontSize: "16@s",
  },
  favoriteItemTitle: {
    fontSize: "18@s",
    fontWeight: "bold",
  },
})

export { styles }
