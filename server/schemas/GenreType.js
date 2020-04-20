import Book from "../Modal/Book";
import Author from "../Modal/Author";

import AuthorType from "./AuthorType";
import BookType from "./BookType";

import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
} from "graphql";

const GenreType = new GraphQLObjectType({
    name: "GenreType",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        authors: {
            type: GraphQLList(AuthorType),
            resolve: (parent, {}) => Author.find({ genreId: parent.id }),
        },
        books: {
            type: GraphQLList(BookType),
            resolve: (parent, {}) => Book.find({ genreId: parent.id }),
        },
    }),
});

export default GenreType;
