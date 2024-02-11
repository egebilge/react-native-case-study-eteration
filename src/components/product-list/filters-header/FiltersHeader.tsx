import React, { useState } from "react"
import { Text, View, Button, Modal, ScrollView, TouchableOpacity, Platform } from "react-native"
import { SearchBar } from "../search-bar/SearchBar"
import { styles } from "./styles"
import Ionicons from "react-native-vector-icons/Ionicons"
import { useDispatch } from "react-redux"
import { sortProducts } from "../../../features/product/productSlice"
import BouncyCheckbox from "react-native-bouncy-checkbox"

interface IFiltersHeaderProps {
  readonly searchQuery: string
  readonly setSearchQuery: (query: string) => void
}

const FiltersHeader: React.FC<IFiltersHeaderProps> = ({ searchQuery, setSearchQuery }) => {
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)

  const handleSort = (sortType: string) => {
    dispatch(sortProducts(sortType))
  }

  return (
    <View style={styles.filtersContainer}>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <View style={styles.filtersLabelContainer}>
        <Text style={styles.filtersLabelText}>Filters: </Text>
        <View style={styles.filtersLabelButtonContainer}>
          <Button title="Select Filter" color="#000" onPress={() => setModalVisible(true)} />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, Platform.OS === "ios" && styles.modalViewIOS]}>
            <View style={styles.closeButtonContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Ionicons name="close" size={34} />
              </TouchableOpacity>
              <View style={styles.closeButtonTextContainer}>
                <Text style={styles.closeButtonText}>Filter</Text>
              </View>
            </View>
            <Text style={styles.modalText}>Sort By</Text>
            <ScrollView>
              <View style={styles.sortByContainer}>
                <View style={styles.checkboxContainer}>
                  <BouncyCheckbox onPress={() => handleSort("oldToNew")} />
                  <Text>Old to new</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <BouncyCheckbox onPress={() => handleSort("newToOld")} />
                  <Text>New to old</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <BouncyCheckbox onPress={() => handleSort("priceHighToLow")} />
                  <Text>Price high to low</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <BouncyCheckbox onPress={() => handleSort("priceLowToHigh")} />
                  <Text>Price low to high</Text>
                </View>
              </View>
            </ScrollView>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.applyButtonText}>Primary</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export { FiltersHeader }
