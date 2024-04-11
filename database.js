import mongoose from "mongoose";

const uri = "mongodb+srv://mbuxiwave:cL8aAsPCMHCS97IL@chai-tapri.usiayh9.mongodb.net/?retryWrites=true&w=majority&appName=chai-tapri";

export function connectMongo() {
    mongoose.connect(uri)
        .then((value) => {
            console.log(`Connected with MongoDB  ${value}`);
        })
        .catch((error) => {
            console.error(`Unable to connect with MongoDB due to Error: ${error}`);
        })
}
