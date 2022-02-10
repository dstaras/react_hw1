import React from "react";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend }) => (
  <li className={css.item}>
    <span
      className={friend.isOnline === true ? css.status : css.statusFolse}
    ></span>
    <img
      className={css.avatar}
      src={friend.avatar}
      alt="User avatar"
      width="48"
    />
    <p className={css.name}>{friend.name}</p>
  </li>
);

export default FriendListItem;
