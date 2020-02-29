import RoomService from "@roomservice/node";

// Implement your own accounts here!
function isLoggedIn() {
  return true;
}

export default async (req, res) => {
  if (!process.env.ROOM_SERVICE_SECRET) {
    throw new Error(
      "Expected ROOM_SERVIVCE_SECRET to be defined in environment variables. See README."
    );
  }

  const client = new RoomService(process.env.ROOM_SERVICE_SECRET);
  const { room } = client.parseBody(req.body);

  if (!isLoggedIn()) {
    return res.status(401).json({ message: "unauthorized" });
  }

  const body = await client.authorize({
    user: "user-id-goes-here",
    room: room.reference
  });

  res.status(200).json(body);
};
