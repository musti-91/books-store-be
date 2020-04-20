import Book from "../Modal/Book";
import Author from "../Modal/Author";
import Genre from "../Modal/Genre";
// types

import { GraphQLObjectType, GraphQLID, GraphQLList } from "graphql";

import BookType from "./BookType";
import GenreType from "./GenreType";
import AuthorType from "./AuthorType";

const RootQuery = new GraphQLObjectType({
    name: "Root",
    fields: {
        // get book by Id
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, { id }) => Book.findById(id),
        },
        // get Author by Id
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, { id }) => Author.findById(id),
        },
        // get Genre by Id
        genre: {
            type: GenreType,
            args: { id: { type: GraphQLID } },
            resolve: (parent, { id }) => Genre.findById(id),
        },
        // get all genres
        genres: {
            type: GraphQLList(GenreType),
            resolve: (parent, {}) => Genre.find({}),
        },
        // get All books
        books: {
            type: GraphQLList(BookType),
            resolve: (parent, {}) => Book.find({}), // if empty object than will return full book
        },
        // get all authors
        authors: {
            type: GraphQLList(AuthorType),
            resolve: (parent, {}) => Author.find({}),
        },
    },
});

export default RootQuery;
