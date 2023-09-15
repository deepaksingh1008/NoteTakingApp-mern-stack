import mongoose from "mongoose";

export function dbConnection() {
  mongoose
    .connect(process.env.DBURL, { maxPoolSize: 5 })
    .then((data) => {
      console.log("DB URL is ", process.env.DBURL);
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("error in connection", err);
      throw err;
    });
}
