import express from 'express';
import { User } from '../models/account.js';

let userRouter = express.Router()

// Add New User
userRouter.post("/add", async (request, response) => {
    console.log(request.body);
    try {
        const userData = {
            username: request.body.username,
            age: request.body.age,
            name: request.body.name,
        }

        const user = await User.create(userData);
        response.status(201).send({message: "Added user successfully!", ...user});

    } catch (error) {
        console.error(`Unable to add new User due to ${error}`)
        response.status(500).send({message: error.message});
    }
})


// User list
userRouter.get("/", async (request, response) => {
    try {
        const users = await User.find({});
        response.status(200).json(users);
    } catch (error) {
        console.error(`Unable to get all-users due to error ${error}`)
        response.status(400).json(`Unable to get all-users due to error ${error}`);
    }
})


// User Details based on ID
userRouter.get("/:id", async (request, response) => {
    try {
        let { id } = request.params;
        const users = await User.findById(id);
        response.status(200).json(users);
    } catch (error) {
        console.error(`Unable to get all-users due to error ${error}`)
        response.status(400).json(`Unable to get all-users due to error ${error}`);
    }
})

userRouter.patch("/:id", async (request, response) => {
    try {
        let { id } = request.params;
        const result = await User.findByIdAndUpdate(id, request.body);

        if(!result){
            response.status(404).json({"message": "No User found"});
        }

        response.status(200).json({"message": "Updated User successfully!"});
    } catch (error) {
        console.error(`Unable to get all-users due to error ${error}`)
        response.status(400).json(`Unable to get all-users due to error ${error}`);
    }
})


userRouter.delete("/:id", async (request, response) => {
    try {
        let { id } = request.params;
        const result = await User.findByIdAndDelete(id);

        if(!result){
            response.status(404).json({"message": "No User found"});
        }

        response.status(200).json({"message": "Delete User successfully!"});
    } catch (error) {
        console.error(`Unable to get all-users due to error ${error}`)
        response.status(400).json(`Unable to get all-users due to error ${error}`);
    }
})

export default userRouter;