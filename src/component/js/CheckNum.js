import React, { useState } from "react";
import { initData } from "./InitialParam";
import "bootstrap/dist/css/bootstrap.min.css";
import  ExecutionModel  from "../../executionModel/ExecutionModel";

const CheckNum = () => {
  const [data, setData] = useState(initData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ ...data,[process.env.REACT_APP_RES_R]: ExecutionModel(data) });
  };

  return (
    <div className="container mt-4">
      <form
        className="container border border-danger col-sm-2 col-sm-offset-2"
        onSubmit={handleSubmit}
        style={{ backgroundColor: "#0B0B45" }}
      >
        <h4 className="text-center text-warning">Check Number Status</h4>
        <div className="container text-center mb-2">
          <input
            type="number"
            name="num1"
            placeholder="enter number"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="container text-center mb-2">
          <input type="submit" value="checkNum" className="btn btn-primary" />
        </div>
        <div className="container text-center mb-2">
          <input 
          type="text" 
          value={data.result || ""} 
          className="form-control"
          disabled />
        </div>
      </form>
    </div>
  );
};

export default CheckNum;
