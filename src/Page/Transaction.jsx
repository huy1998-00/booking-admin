import React from "react";

import Table1 from "../Component/Table/Table1";
import { useSelector } from "react-redux";
const Transaction = () => {
  const transData = useSelector((state) => state.trans.tranList);
  return (
    <div>
      <h1>Transaction List</h1>
      <Table1 trans={transData}></Table1>
    </div>
  );
};

export default Transaction;
