import express from "express";
import { connectMongo } from "./database.js";

import userRouter from "./routes/usersRoutes.js"

const PORT = 5050;
const app = express();


app.use(express.json());
app.use("/users", userRouter);

app.listen(PORT, () => {
    console.log(`Server started running on ${PORT}`)
    connectMongo()
})

app.get("/", (request, response) => {
    response.send("<h1>Hello World 😀</h1>")
})

