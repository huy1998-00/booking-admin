import React from "react";
import "./newhotel.css";
import { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const EditHotel = () => {
  const navigate = useNavigate();

  const id = useParams();

  const [infor, setinfor] = useState({
    name: "",
    type: "",
    city: "",
    address: "",
    title: "",
    description: "",
    price: "",
    images: "",
    featured: true,
    distance: "",
  });

  useEffect(() => {
    fetchdata();
  }, [id]);

  const fetchdata = () => {
    axios
      .post(`http://localhost:5000/admin/edithotel`, { id: id })
      .then((data) => {
        setinfor({
          name: data.data.name,
          type: data.data.type,
          city: data.data.city,
          address: data.data.address,
          title: data.data.title,
          description: data.data.desc,
          price: data.data.cheapestPrice,
          images: data.data.photos,
          distance: data.data.distance,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeInfor = (e) => {
    const { name, value } = e.target;
    setinfor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/admin/editedHotel", {
        id: id,
        name: infor.name,
        type: infor.type,
        city: infor.city,
        address: infor.address,
        title: infor.title,
        description: infor.description,
        price: infor.price,
        images: infor.images,
        featured: true,
        distance: infor.distance,
      })
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });

    navigate("/admin");
  };

  return (
    <div className="nh_container">
      <div className="nh_header">Edit </div>
      <div className="nh_forms">
        <div className="form_items">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            value={infor.name}
            onChange={handleChangeInfor}
          ></input>
        </div>
        <div className="form_items">
          <label htmlFor="Type">Type</label>
          <input
            name="type"
            value={infor.type}
            onChange={handleChangeInfor}
          ></input>
        </div>
        <div className="form_items">
          <label htmlFor="City">City</label>
          <input
            name="city"
            value={infor.city}
            onChange={handleChangeInfor}
          ></input>
        </div>
        <div className="form_items">
          <label htmlFor="Address">Address</label>
          <input
            name="address"
            value={infor.address}
            onChange={handleChangeInfor}
          ></input>
        </div>
        <div className="form_items">
          <label htmlFor="distance">Distance from City Center</label>
          <input
            name="distance"
            value={infor.distance}
            onChange={handleChangeInfor}
          ></input>
        </div>
        <div className="form_items">
          <label htmlFor="Title">Title</label>
          <input
            name="title"
            value={infor.title}
            onChange={handleChangeInfor}
          ></input>
        </div>
        <div className="form_items">
          <label htmlFor="Description">Description</label>
          <input
            name="description"
            value={infor.description}
            onChange={handleChangeInfor}
          ></input>
        </div>
        <div className="form_items">
          <label htmlFor="Price">Price</label>
          <input
            name="price"
            value={infor.price}
            onChange={handleChangeInfor}
          ></input>
        </div>
        <div className="form_items">
          <label htmlFor="Images">Images</label>
          <textarea
            name="images"
            value={infor.images}
            onChange={handleChangeInfor}
          ></textarea>
        </div>
        <div className="">
          <label htmlFor="Featured">Featured </label>
          <select name="Featured">
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="form_btn">
          <button onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditHotel;
