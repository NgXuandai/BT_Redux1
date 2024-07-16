// ExpenseForm.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addExpense, updateExpense } from '../Redux/actions';

const ExpenseForm = ({ expense, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(expense ? expense.title : '');
  const [description, setDescription] = useState(expense ? expense.description : '');
  const [amount, setAmount] = useState(expense ? expense.amount : '');
  const [date, setDate] = useState(expense ? expense.date : '');
  const [type, setType] = useState(expense ? expense.type : 'income');
  
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newExpense = {
      id: expense ? expense.id : Date.now().toString(),
      title,
      description,
      amount: parseFloat(amount),
      date,
      type,
    };
    if (expense) {
      dispatch(updateExpense(newExpense));
    } else {
      dispatch(addExpense(newExpense));
    }
    onSubmit();
  };

  useEffect(() => {
    if (expense) {
      setTitle(expense.title);
      setDescription(expense.description);
      setAmount(expense.amount.toString());
      setDate(expense.date);
      setType(expense.type);
    }
  }, [expense]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tiêu đề"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Mô tả"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Số tiền"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Ngày"
        value={date}
        onChangeText={setDate}
      />
      <View style={styles.typeContainer}>
        <Text>Loại:</Text>
        <Button title="Thu" onPress={() => setType('income')} />
        <Button title="Chi" onPress={() => setType('expense')} />
      </View>
      <Button title="Lưu" onPress={handleSubmit} />
      <Button title="Hủy" onPress={onCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    marginBottom: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 8,
    borderRadius: 4,
  },
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
});

export default ExpenseForm;
