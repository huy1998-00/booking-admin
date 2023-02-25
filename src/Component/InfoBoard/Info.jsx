import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faDollarSign,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import "./info.css";
import { useSelector } from "react-redux";

import { getTrans } from "../../redux/trans";
import { getUser } from "../../redux/user";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Info = ({ name, data, type }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrans());
    dispatch(getUser());
  }, []);
  const userData = useSelector((state) => state.user);
  const transData = useSelector((state) => state.trans);

  let amount = 0;
  if (transData.tranList.length > 0) {
    transData.tranList.forEach((t) => {
      return (amount = amount + t.price);
    });
  }

  let icon;
  if (type === 1) {
    icon = (
      <div className="info_items">
        <h3>{name}</h3>
        <h3>{userData.userList?.length}</h3>
        <div className="info_icons">
          <FontAwesomeIcon
            icon={faUser}
            className="info_icon1"
          ></FontAwesomeIcon>
        </div>
      </div>
    );
    return icon;
  }
  if (type === 2) {
    icon = (
      <div className="info_items">
        <h3>{name}</h3>
        <h3>{transData.tranList?.length}</h3>
        <div className="info_icons">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="info_icon2"
          ></FontAwesomeIcon>
        </div>
      </div>
    );
    return icon;
  }
  if (type === 3) {
    icon = (
      <div className="info_items">
        <h3>{name}</h3>
        <h3> ${amount}</h3>
        <div className="info_icons">
          <FontAwesomeIcon
            icon={faDollarSign}
            className="info_icon3"
          ></FontAwesomeIcon>
        </div>
      </div>
    );
    return icon;
  }
  if (type === 4) {
    icon = (
      <div className="info_items">
        <h3>{name}</h3>
        <h3>${amount / 30}</h3>
        <div className="info_icons">
          <FontAwesomeIcon
            icon={faWallet}
            className="info_icon4"
          ></FontAwesomeIcon>
        </div>
      </div>
    );
    return icon;
  }

  return <icon></icon>;
};

export default Info;
