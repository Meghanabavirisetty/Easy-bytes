document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted');

        const expenseName = document.getElementById('expense-name').value;
        const expenseAmount = document.getElementById('expense-amount').value;
        const expenseCategory = document.getElementById('expense-category').value;
        const expenseDate = document.getElementById('expense-date').value;

        console.log(`Expense Name: ${expenseName}, Amount: ${expenseAmount}, Category: ${expenseCategory}, Date: ${expenseDate}`);

        if (expenseName && expenseAmount && expenseCategory && expenseDate) {
            const expenseItem = document.createElement('li');
            expenseItem.textContent = `${expenseName} - $${expenseAmount} - ${expenseCategory} - ${expenseDate}`;
            expenseList.appendChild(expenseItem);
            expenseForm.reset();
        }
    });
});

