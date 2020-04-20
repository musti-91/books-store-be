import mongoose, { Schema } from "mongoose";

const authorSchema = new Schema({
    name: String,
    age: Number,
    genreId: String,
    description: String,
    urls: Array,
    genres: Array,
    born: String,
    books: [],
    profilePicture: String,
});

export default mongoose.model("Author", authorSchema);
