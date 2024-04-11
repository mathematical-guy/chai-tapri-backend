import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String,
        unique: true
    },
    age: {
        required: false,
        type: Number,
    },
    name: {
        required: true,
        type: String,
    },
    // hash: {
    //     type: String
    // },
}, { timestamps: true }
)

export const User = mongoose.model('User', UserSchema);
