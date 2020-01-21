import RoomService from "@roomservice/browser";
import { useRoomService } from "@roomservice/react";
import React from "react";

const client = new RoomService({
  authUrl: "http://localhost:3000/api/roomservice"
});

export default () => {
  const [doc, setDoc] = useRoomService(client, "my-room");

  function onClick() {
    setDoc(prevDoc => {
      prevDoc.number = Math.floor(Math.random() * 100);
    });
  }

  return (
    <div>
      <h1>Open multiple browser windows!</h1>

      <p>{doc.number || 0}</p>

      <button onClick={onClick}>Pick Random Number</button>
    </div>
  );
};
