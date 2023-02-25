import React from "react";

import Info from "../Component/InfoBoard/Info";
import "./dasboard.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Table1 from "../Component/Table/Table1";

import { useDispatch } from "react-redux";
import { getTrans } from "../redux/trans";

import { useSelector } from "react-redux";
const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrans());
  }, []);

  const transData = useSelector((state) => state.trans.tranList);
  return (
    <div>
      <div className="infor_container">
        <Info name={"User"} type={1}></Info>
        <Info name={"Orders"} type={2}></Info>
        <Info name={"Earnings"} type={3}></Info>
        <Info name={"Balance"} type={4}></Info>
      </div>
      <h3>Lastest Transaction</h3>
      <Table1 trans={transData.slice(0, 8)}></Table1>
    </div>
  );
};

export default Dashboard;
