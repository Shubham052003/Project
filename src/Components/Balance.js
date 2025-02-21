import React, { useState, useEffect } from "react";
import axios from "axios";

const Balance = () => {
  const [transactions, setTransactions] = useState([]);
  const [remainingBalance, setRemainingBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all transactions from the backend
    axios
      .get("http://localhost:8080/api/expense/get") // Replace with your backend API URL
      .then((response) => {
        const allTransactions = response.data;
        
        // Calculate income and expenses
        const income = allTransactions.filter((t) => t.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
        const expenses = allTransactions.filter((t) => t.amount < 0).reduce((acc, curr) => acc + curr.amount, 0);
        
        // Calculate remaining balance (income - expenses)
        const remainingBalance = income + expenses; // expenses are negative, so this subtracts expenses
        setTransactions(allTransactions);
        setRemainingBalance(remainingBalance);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching transaction data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading financial data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="balance">
      <h2 className="title">Remaining Balance</h2>
      <h3>₹{remainingBalance}</h3>
    </div>
  );
};

export default Balance;
