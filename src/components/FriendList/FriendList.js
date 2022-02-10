import React from "react";
import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map((friend) => (
      <FriendListItem friend={friend} key={friend.id} />
    ))}
  </ul>
);

export default FriendList;
