import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chats from "./Chats";
import ChatView from "./ChatView";
import Preview from "./Preview";
import WebcamCapture from "./WebcamCapture";
import Login from "./Login";
import { auth } from "./firebase";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/appSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            username: user.displayName,
            profilePic: user.photoURL,
            id: user.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img
              className="app__logo"
              src="lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg"
              alt=""
            />
            <div className="app__body">
              <Switch>
                <Route path="/chats/view">
                  <ChatView />
                </Route>
                <Route path="/chats">
                  <Chats />
                </Route>
                <Route path="/preview">
                  <Preview />
                </Route>
                <Route exact path="/">
                  <WebcamCapture />
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
