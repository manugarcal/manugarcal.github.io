import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>Coming Soon!</h1>
      <div className="spinners">
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-primary ml-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-danger ml-2" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <p>by Manuel Garcia Calderón...</p>
    </div>
  );
};
export default Home;
