// SearchBar.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../Redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <TextInput
      style={styles.input}
      placeholder="Tìm kiếm theo tiêu đề"
      onChangeText={(text) => dispatch(setSearchTerm(text))}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 8,
  },
});

export default SearchBar;
