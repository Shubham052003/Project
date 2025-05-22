import React, { useState } from "react";
import axios from "axios";
import './TransactionForm.css'

const TransactionForm = ({ fetchExpenses }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      alert("Please add description and amount");
      return;
    }

    const expense = { description, amount };

    axios.post('http://localhost:8080/api/expense/add', expense)
      .then(() => {
        alert("Expense added successfully!");
        setDescription("");
        setAmount("");
        fetchExpenses();
      })
      .catch((error) => {
        console.error(error);
        alert("Error adding expense");
      });
  };

  return (
    <div className="transaction">
      <h3 className="title">Add New Transaction</h3><br/>
      <form onSubmit={handleSubmit} className="form">
        <input  className="input"
          type="text"
          placeholder="Transaction Name"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><br/><br/>
        <input className="input"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        /><br/><br/>
        <button type="submit" className="btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
