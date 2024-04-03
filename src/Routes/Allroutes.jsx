import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import Todo from "../Components/Todo";
import Private from "../Private/Private";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Private>
              <Todo />
            </Private>
          }
        />
      </Routes>
    </div>
  );
};

export default Allroutes;
