import { ScaledSheet } from "react-native-size-matters"

const styles = ScaledSheet.create({
  filtersContainer: {
    width: "100%",
  },
  filtersLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: "10@s",
  },
  filtersLabelText: {
    fontSize: "18@s",
  },
  filtersLabelButtonContainer: {
    width: "50%",
    backgroundColor: "#D9D9D9",
  },
  modalView: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: "20@s",
  },
  centeredView: {
    flex: 1,
  },
  closeButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "10@s",
  },
  closeButton: {
    paddingVertical: "20@s",
  },
  closeButtonTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
  },
  closeButtonText: {
    fontSize: "24@s",
    fontWeight: "300",
  },
  modalText: {
    marginBottom: "10@s",
    fontSize: "10@s",
  },
  sortByContainer: {
    width: "100%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: "2@s",
  },
  applyButton: {
    width: "100%",
    backgroundColor: "#2A59FE",
    padding: "7.5@s",
    alignItems: "center",
    marginBottom: "40@s",
    borderRadius: "5@s",
  },
  applyButtonText: {
    fontSize: "18@s",
    color: "white",
    fontWeight: "bold",
  },
  modalViewIOS: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    paddingHorizontal: "20@s",
    marginTop: "50@s",
  },
})

export { styles }
