import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
    name: String,
    genreId: String,
    authorId: String,
    description: String,
    reviews: Number,
    rating: Number,
    sources: Array,
    published: String,
    languages: Array,
    urls: Array,
    pages: Number,
    price: Number,
    awards: Array,
    coverPicture: String,
});

export default mongoose.model("Book", bookSchema);
