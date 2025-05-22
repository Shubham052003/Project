import React, { useEffect, useState } from "react";
import axios from "axios";
import './Dashboard.css';
import TransactionForm from "./TransactionForm";


const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

 
  const fetchExpenses = () => {
    axios
      .get("http://localhost:8080/api/expense")
      .then((res) => setExpenses(res.data))
      .catch((error) => console.error(error));
  };

  

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="dashboard">
      <h2 className="title">Dashboard</h2>
      <TransactionForm fetchExpenses={fetchExpenses} />
      <ul className="expense">
        {expenses.map((expense) => (
          <li key={expense.id} className="item">
            {expense.description} - ₹{expense.amount}
           
            
          </li>
          
        ))}
      </ul>
      <div>
        
      </div>
    </div>
    
  );
};

export default Dashboard;
