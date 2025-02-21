import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Expense Tracker</h2>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/login" style={styles.link}>Login</Link></li>
        <li><Link to="/register" style={styles.link}>Register</Link></li>
        <li><Link to="/dashboard" style={styles.link}>Dashboard</Link></li>
        <li><Link to="/add-transaction" style={styles.link}>Add Transaction</Link></li>
        <li><Link to="/add-income" style={styles.link}>Add Income</Link></li>
        <li><Link to="/view-history" style={styles.link}>View History</Link></li>
        <li><Link to="/balance" style={styles.link}>Balance</Link></li>
      </ul>
    </nav>
  );
};

// Inline styles applied correctly
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px 20px",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    padding: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default NavBar;
