import RoomService from "@roomservice/browser";
import { useSharedState } from "@roomservice/react";
import React from "react";

const client = new RoomService({
  authUrl: "http://localhost:3000/api/roomservice"
});

export default () => {
  const [sharedState, setSharedState] = useSharedState(client, "my-room");

  function onClick() {
    setSharedState(prevDoc => {
      prevDoc.number = Math.floor(Math.random() * 100);
    });
  }

  return (
    <div>
      <h1>Open multiple browser windows!</h1>

      <p>{sharedState.number || 0}</p>

      <button onClick={onClick}>Pick Random Number</button>
    </div>
  );
};
