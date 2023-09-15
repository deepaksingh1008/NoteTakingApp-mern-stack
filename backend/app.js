import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbConnection } from './src/shared/db/connection.js';
import userRouter from './src/modules/users/routes/user-route.js';
import noteRouter from './src/modules/notes/routes/note-route.js';
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/",userRouter);
app.use("/",noteRouter);

app.listen(process.env.PORT, (err) => {
    if (err) {
      console.log("server crash", err);
    } else {
      console.log(`Server running on port ${process.env.PORT}`);
       dbConnection();
    }
  });