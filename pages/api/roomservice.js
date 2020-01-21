import RoomService from "@roomservice/node";

// Implement your own accounts here!
function isLoggedIn() {
  return true;
}

export default (req, res) => {
  const client = new RoomService(process.env.ROOM_SERVICE_SECRET);
  const { room } = client.parse(req.body);

  if (!isLoggedIn()) {
    return client.reject();
  }

  return client.authorize(res, {
    guest: "user-id-goes-here",
    room: room.reference
  });
};
