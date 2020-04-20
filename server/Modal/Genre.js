import mongoose, { Schema } from "mongoose";

const Genre = new Schema({
    name: String,
    description: String,
    books: Array,
    authors: Array,
});

export default mongoose.model("Genre", Genre);
