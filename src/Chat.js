import React from "react";
import { Avatar } from "@material-ui/core";
import "./Chat.css";
import { StopRounded } from "@material-ui/icons";
import ReactTimeago from "react-timeago";
// Reduxに関連しているの部分
import { selectImage } from "./features/appSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { db } from "./firebase";

function Chat({ id, username, timestamp, read, imageUrl, profilePic }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );

      history.push("/chats/view");
    }
  };

  return (
    <div onClick={open} className="chat">
      <Avatar src="chat__avatar" src={profilePic} />
      <div className="chat__info">
        <h4>{username}</h4>
        <p>
          {!read && "Tap to view -"}{" "}
          <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>
      {!read && <StopRounded className="chat__readIcon" />}
    </div>
  );
}

export default Chat;
