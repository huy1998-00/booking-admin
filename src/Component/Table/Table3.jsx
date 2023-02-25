import React from "react";

import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useNavigate } from "react-router-dom";
import style from "./table3.module.css";

const Table3 = ({ data }) => {
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
              .post("http://localhost:5000/admin/deleteroom", {
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

  const handleEdit = (e) => {
    navigate(`/admin/editroom/${e.target.value}`);
  };

  return (
    <div className={style.table3_container}>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox"></input>
            </th>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Max People</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((r) => {
            return (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{r._id}</td>
                <td>{r.title}</td>

                <td>{r.desc}</td>

                <td>{r.price}</td>

                <td>{r.maxPeople}</td>

                <td>
                  <button
                    className={style.edit}
                    onClick={handleEdit}
                    value={r._id}
                  >
                    edit
                  </button>
                  <button
                    className={style.delete}
                    onClick={handleDelete}
                    value={r._id}
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

export default Table3;
