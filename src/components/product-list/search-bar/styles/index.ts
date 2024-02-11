import { ScaledSheet } from "react-native-size-matters"

const styles = ScaledSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.06)",
    borderRadius: "5@s",
    marginBottom: "20@s",
  },
  searchIcon: {
    padding: "10@s",
  },
  input: {
    flex: 1,
    paddingVertical: "10@s",
    color: "#424242",
    fontSize: "18@s",
  },
})

export { styles }
