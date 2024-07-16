// Statistics.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Statistics = () => {
  const expenses = useSelector(state => state.expenses);
  const totalIncome = expenses.filter(expense => expense.type === 'income').reduce((sum, expense) => sum + expense.amount, 0);
  const totalExpense = expenses.filter(expense => expense.type === 'expense').reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <View style={styles.container}>
      <Text>Tổng Thu: {totalIncome}</Text>
      <Text>Tổng Chi: {totalExpense}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    marginVertical: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default Statistics;
