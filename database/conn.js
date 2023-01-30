import mongoose from "mongoose";

/*
const connectMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    const { connection } = await mongoose.connect(process.env.MONGO_URL, () => {
      console.log("Connected to MongoDB");
    });

    if (connection.readyState == 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
*/

const connectMongo = async () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGO_URL);
};

export default connectMongo;
