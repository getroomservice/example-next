import { useSharedState, RoomServiceProvider } from "@roomservice/react";
import React from "react";

const App = () => {
  const [sharedState, setSharedState] = useSharedState("my-room");

  function onClick() {
    setSharedState((prevDoc) => {
      prevDoc.number = Math.floor(Math.random() * 100);
    });
  }

  return (
    <div>
      <h1>Open multiple browser windows!</h1>

      <p>{sharedState.number || 0}</p>

      <button onClick={onClick}>Pick Random Number</button>

      <p>
        <a href="https://roomservice.dev/">
          Check out the Room Service dashboard.
        </a>
      </p>
    </div>
  );
};

export default () => (
  <RoomServiceProvider authUrl={"http://localhost:3000/api/roomservice"}>
    <App />
  </RoomServiceProvider>
);
