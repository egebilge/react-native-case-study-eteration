import { ScaledSheet } from "react-native-size-matters"

const styles = ScaledSheet.create({
  productCard: {
    flex: 1,
    paddingHorizontal: "10@s",
    backgroundColor: "#fff",
    borderRadius: "5@s",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: "280@s",
    marginVertical: "10@s",
    marginHorizontal: "5@s",
  },
  productImage: {
    width: "100%",
    height: "120@s",
    resizeMode: "contain",
  },
  productTitle: {
    fontSize: "14@s",
    marginVertical: "5@s",
  },
  productPrice: {
    fontSize: "14@s",
    fontWeight: "bold",
    marginVertical: "10@s",
  },
  addToCartButton: {
    paddingVertical: "10@s",
    paddingHorizontal: "20@s",
    backgroundColor: "#0066cc",
    borderRadius: "5@s",
    marginVertical: "10@s",
    position: "absolute",
    bottom: "10@s",
    left: "10@s",
    right: "10@s",
  },
  addToCartButtonText: {
    color: "#fff",
    fontSize: "16@s",
    textAlign: "center",
  },
  favoriteButton: {
    position: "absolute",
    right: "10@s",
    top: "10@s",
    padding: "7.5@s",
  },
})

export { styles }
