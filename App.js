// App.js
import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store';
import ExpenseForm from './component/ExpenseForm';
import ExpenseList from './component/ExpenseList';
import Statistics from './component/Statistics';
import SearchBar from './component/SearchBar';

const App = () => {
  const [editingExpense, setEditingExpense] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddNew = () => {
    setEditingExpense(null);
    setShowForm(true);
  };

  const handleEdit = (expense) => {
    setEditingExpense(expense);
    setShowForm(true);
  };

  const handleSubmit = () => {
    setEditingExpense(null);
    setShowForm(false);
  };

  const handleCancel = () => {
    setEditingExpense(null);
    setShowForm(false);
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <SearchBar />
        <Button title="Thêm mới khoản thu chi" onPress={handleAddNew} />
        {showForm ? (
          <ExpenseForm
            expense={editingExpense}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        ) : (
          <>
            <ExpenseList onEdit={handleEdit} />
            <Statistics />
          </>
        )}
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
});

export default App;