import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    axios.get("http://localhost:8080/api/expense/get")
      .then(response => {
        setTransactions(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  
  const filteredTransactions = transactions.filter((t) => {
    if (filter === "income") return t.amount > 0 ;
    if (filter === "outgoing") return t.amount < 0;
    return true;
  });

 
  const totalIncome = filteredTransactions
    .filter((t) => t.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0);
  
  const totalOutgoing = filteredTransactions
    .filter((t) => t.amount < 0)
    .reduce((acc, curr) => acc + curr.amount, 0);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="containe">
      <h2 className="text-center mb-4">Transaction History</h2>

      <div className="d-flex justify-content-center mb-3">
        <button
          className={`btn ${filter === "all" ? "btn-primary" : "btn-outline-primary"} mx-2`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button style={{color:"white"}}
          className={`btn ${filter === "income" ? "btn-success" : "btn-outline-success"} mx-2`}
          onClick={() => setFilter("income")}
        >
          Income
        </button>
        <button style={{color:"white"}}
          className={`btn ${filter === "outgoing" ? "btn-danger" : "btn-outline-danger"} mx-2`}
          onClick={() => setFilter("outgoing")}
        >
          Outgoing
        </button>
      </div>

      <ul className="list-group">
        {filteredTransactions.length ? (
          filteredTransactions.map((t, i) => (
            <li key={i} className={`list-group-item ${t.amount > 0 ? "list-group-item-success" : "list-group-item-danger"}`}>
              {t.description}: ₹{t.amount}
            </li>
          ))
        ) : (
          <p className="text-center">No transactions found</p>
        )}
      </ul>

      <div className="mt-4">
        <h4>Total Income: ₹{totalIncome}</h4>
        <h4>Total Outgoing: ₹{Math.abs(totalOutgoing)}</h4>
      </div>
    </div>
  );
};

export default ViewHistory;
