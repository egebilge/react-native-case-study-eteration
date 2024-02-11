import { ScaledSheet } from "react-native-size-matters"

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10@s",
    padding: "10@s",
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: "16@s",
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: "14@s",
    color: "#2a59fe",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: "5@s",
    paddingHorizontal: "10@s",
  },
  quantityText: {
    fontSize: "16@s",
    marginHorizontal: "10@s",
    backgroundColor: "#2a59fe",
    color: "#fff",
    width: "35@s",
    height: "35@s",
    textAlign: "center",
    lineHeight: "35@s",
    borderRadius: "15@s",
  },
  buttonWrapper: {
    backgroundColor: "#2A59FE",
    padding: "5@s",
    borderRadius: "5@s",
    width: "50%",
  },
  buttonQuantityWrapper: {
    padding: "5@s",
  },
  buttonTextQuantity: {
    fontSize: "16@s",
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: "16@s",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  totalPriceContainer: {
    flexDirection: "column",
  },
  totalPriceUpperText: {
    fontSize: "18@s",
    color: "#2a59fe",
  },
  totalPriceLowerText: {
    fontSize: "16@s",
    color: "#000",
    fontWeight: "bold",
    marginLeft: "5@s",
  },
  totalPriceSpace: {
    marginBottom: "5@s",
  },
  flatList: {
    flex: 1,
  },
  emptyCartText: {
    textAlign: "center",
    fontSize: "20@s",
    marginTop: " 20@s",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
})

export { styles }
