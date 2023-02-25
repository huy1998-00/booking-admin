import React from "react";
import Table2 from "../Component/Table/Table2";
import { useSelector } from "react-redux";
import "./hotel.css";
import { getHotel } from "../redux/hotel";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Hotel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getHotel());
  }, []);
  const hotelData = useSelector((state) => state.hotel.hotelList);

  const handleClick = () => {
    navigate("/admin/newhotel");
  };

  return (
    <div className="hotel_container">
      <h1>Hotels List</h1>
      <button onClick={handleClick}>Add New </button>
      <Table2 data={hotelData}></Table2>
    </div>
  );
};

export default Hotel;
