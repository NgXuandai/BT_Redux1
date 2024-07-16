// ExpenseList.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../Redux/actions';

const ExpenseList = ({ onEdit }) => {
  const expenses = useSelector(state => state.expenses);
  const searchTerm = useSelector(state => state.searchTerm);
  const dispatch = useDispatch();

  const filteredExpenses = expenses.filter(expense =>
    expense.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <FlatList
      data={filteredExpenses}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
          <Text>{item.amount}</Text>
          <Text>{item.date}</Text>
          <Text>{item.type}</Text>
          <Button title="Sửa" onPress={() => onEdit(item)} />
          <Button title="Xóa" onPress={() => dispatch(deleteExpense(item.id))} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});

export default ExpenseList;