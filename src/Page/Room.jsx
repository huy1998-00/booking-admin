import React from "react";
import "./room.css";
import Table3 from "../Component/Table/Table3";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getRoom } from "../redux/room";
const Room = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRoom());
  }, []);

  const handleClick = () => {
    navigate("/admin/newroom");
  };

  const roomData = useSelector((state) => state.room.RoomList);
  return (
    <div className="room_container">
      <h1>Room List</h1>
      <button onClick={handleClick}>Add New </button>
      <Table3 data={roomData}></Table3>
    </div>
  );
};

export default Room;
