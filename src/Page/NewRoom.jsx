import React from "react";
import "./newroom.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewRoom = () => {
  const navigate = useNavigate();
  const hotelData = useSelector((state) => state.hotel.hotelList);
  const [infor, setinfor] = useState({
    title: "",
    description: "",
    price: "",
    max: "",
    room: "",
    hotel: null,
  });

  const handleChangeInfor = (e) => {
    const { name, value } = e.target;
    setinfor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      infor.title.trim().length === 0 ||
      infor.description.trim().length === 0 ||
      infor.price.trim().length === 0 ||
      infor.room.trim().length === 0 ||
      infor.hotel === null
    ) {
      return alert("vui Long Dien day du thong tin");
    }

    axios
      .post("http://localhost:5000/admin/newroom", {
        title: infor.title,
        description: infor.description,
        price: infor.price,
        max: infor.max,
        room: infor.room,
        hotel: infor.hotel,
      })
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });

    alert("them room thanh cong");
    navigate("/admin/rooms");
  };
  return (
    <div>
      <div className="nr_container">
        <div className="nr_header">Add New Product </div>
        <div className="nr_forms">
          <div className="form_items">
            <label htmlFor="name">Title</label>
            <input
              name="title"
              value={infor.title}
              onChange={handleChangeInfor}
              required={true}
            ></input>
          </div>
          <div className="form_items">
            <label htmlFor="Type">Description</label>
            <input
              name="description"
              value={infor.description}
              onChange={handleChangeInfor}
              required={true}
            ></input>
          </div>
          <div className="form_items">
            <label htmlFor="City">Price</label>
            <input
              name="price"
              value={infor.price}
              onChange={handleChangeInfor}
              required={true}
            ></input>
          </div>
          <div className="form_items">
            <label htmlFor="Address">Max People</label>
            <input
              name="max"
              value={infor.max}
              onChange={handleChangeInfor}
              required={true}
            ></input>
          </div>

          <div className="form_items">
            <label htmlFor="Images">Rooms</label>
            <textarea
              name="room"
              value={infor.room}
              onChange={handleChangeInfor}
              required={true}
            ></textarea>
          </div>
          <div className="">
            <label htmlFor="hotel">Chose A hotel </label>
            <select name="hotel" onChange={handleChangeInfor}>
              <option value={null}> Please chose a hotel</option>
              {hotelData.map((h) => {
                return <option value={h._id}>{h.name}</option>;
              })}
            </select>
          </div>
          <div className="form_btn">
            <button onClick={handleSubmit}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
