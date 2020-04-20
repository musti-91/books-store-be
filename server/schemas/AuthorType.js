import Book from "../Modal/Book";
import Genre from "../Modal/Genre";

import GenreType from "./GenreType";
import BookType from "./BookType";
// types
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
} from "graphql";

const AuthorType = new GraphQLObjectType({
    name: "AuthorType",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        description: { type: GraphQLString },
        born: { type: GraphQLString },
        profilePicture: { type: GraphQLString },
        urls: { type: GraphQLList(GraphQLString) },
        genre: {
            type: GenreType,
            resolve: (parent, {}) => Genre.findById(parent.genreId),
        },
        books: {
            type: GraphQLList(BookType),
            resolve: (parent, {}) => Book.find({ authorId: parent.id }),
        },
    }),
});

export default AuthorType;
