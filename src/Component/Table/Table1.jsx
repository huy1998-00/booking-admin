import React from "react";

import style from "./table1.module.css";

const Table1 = ({ trans }) => {
  return (
    <div className={style.tab1_container}>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox"></input>
            </th>
            <th>ID</th>
            <th>User</th>
            <th>Hotel</th>
            <th>Room</th>
            <th>Date</th>
            <th>Price</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {trans.map((t) => {
            return (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{t._id}</td>
                <td>{t.user.username}</td>

                <td>{t.hotel.name}</td>

                <td>{t.room.toString()}</td>

                <td>{`${t.dateStart}-${t.dateEnd}`}</td>

                <td>${t.price}</td>

                <td>{t.payment} </td>
                <td>
                  <span
                    className={
                      t.status === "Booked"
                        ? `${style.statusBooked}`
                        : t.status === "Checkin"
                        ? `${style.statusCheckin}`
                        : `${style.statusCheckout}`
                    }
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table1;
