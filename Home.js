import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="text-center">
        <h1 className="display-4 fw-bold text-primary">Welcome to Expense Tracker</h1>
        <p className="lead">Track your income, expenses, and stay financially organized.</p>
        <img
          src="https://media.istockphoto.com/id/1343525434/photo/operations-management-involving-business-process-and-workflow-problem-solving-high-perfomance.jpg?s=2048x2048&w=is&k=20&c=n5A-fCCysZEjL7Q01wEHjMTytYFnrEuUBiRKeGQzoaI="
          alt="Expense Tracker"
          className="img-fluid rounded shadow-lg my-4"
          style={{ maxWidth: "600px" }}
        />
      </div>
    </div>
  );
};

export default Home;
