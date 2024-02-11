import React from "react"
import { View, TextInput } from "react-native"
import Icon from "react-native-vector-icons/Feather"
import { styles } from "./styles"

interface ISearchBarProps {
  readonly value: string
  readonly onChange: (query: string) => void
}

const SearchBar: React.FC<ISearchBarProps> = ({ value, onChange }) => {
  return (
    <View style={styles.searchSection}>
      <Icon style={styles.searchIcon} name="search" size={24} color="#D3D3D3" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={"#D3D3D3"}
        value={value}
        onChangeText={(search) => onChange(search)}
        underlineColorAndroid="transparent"
        autoCorrect={false}
      />
    </View>
  )
}

export { SearchBar }
