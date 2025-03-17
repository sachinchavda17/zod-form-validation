import mongoose from "mongoose";

const connection = {
  isConnected: Number,
};
async function dbConnect() {
  if (connection.isConnected) {
    console.log("db already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
    console.log("db connected success");
  } catch (error) {
    console.log("db failed");
    process.exit(1);
  }
}
