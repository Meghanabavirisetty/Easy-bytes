const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/expense_tracker', { useNewUrlParser: true, useUnifiedTopology: true });

const ExpenseSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    date: { type: Date, default: Date.now }
});

const Expense = mongoose.model('Expense', ExpenseSchema);

app.post('/expenses', async (req, res) => {
    const expense = new Expense(req.body);
    await expense.save();
    res.send(expense);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
app.get('/expenses', async (req, res) => {
    const expenses = await Expense.find();
    res.send(expenses);
});

app.put('/expenses/:id', async (req, res) => {
    const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(expense);
});

app.delete('/expenses/:id', async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.send({ message: 'Expense deleted' });
});
