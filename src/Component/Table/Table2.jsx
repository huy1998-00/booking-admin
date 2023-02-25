import React from "react";
import style from "./table2.module.css";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useNavigate } from "react-router-dom";

const Table2 = ({ data }) => {
  const navigate = useNavigate();
  const handleDelete = async (e) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const request = axios
              .post("http://localhost:5000/admin/deletehotel", {
                id: e.target.value,
              })
              .then((result) => {})
              .catch((err) => {
                alert(err.response.data);
              });

            navigate("/admin");
          },
        },
        {
          label: "No",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };

  const handleEditHotel = (e) => {
    navigate(`/admin/edithotel/${e.target.value}`);
  };

  return (
    <div className={style.table2_container}>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox"></input>
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Title</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((h) => {
            return (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{h._id}</td>
                <td>{h.name}</td>

                <td>{h.type}</td>

                <td>{h.title}</td>

                <td>{h.city}</td>

                <td>
                  <button
                    className={style.edit}
                    onClick={handleEditHotel}
                    value={h._id}
                  >
                    edit
                  </button>
                  <button
                    className={style.delete}
                    onClick={handleDelete}
                    value={h._id}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
