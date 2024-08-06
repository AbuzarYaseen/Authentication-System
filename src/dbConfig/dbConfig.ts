import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!); //mongoose connected
    const connection = mongoose.connection; //once connected gives you a connection and based on this you can listen a variety of events

    connection.on("connected", () => {
      console.log("Mongo DB connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        `Mongo DB connection error. Make sure mongoDB is running. ${err}`
      );
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
