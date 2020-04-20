import express from "express";
import graphqlHttp from "express-graphql";
import cors from "cors";
import mongoose from "mongoose";
// schemas
import bookSchema from "./server/schemas";

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

const USERNAME = process.env.DATABASE_USERNAME;
const PASSWORD = process.env.DATABASE_PASSWORD;

mongoose.connect(
    `mongodb://${USERNAME}:${PASSWORD}@ds029675.mlab.com:29675/gql-books`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        server: {
            socketOptions: {
                socketTimeoutMS: 0,
                connectionTimeout: 0,
            },
        },
    },
);

mongoose.connection.once("open", () => {
    console.log("connected to database");
});

// allow cross origin
app.use(cors());
app.use(
    "/graphql",
    graphqlHttp({
        schema: bookSchema,
        graphiql: true,
    }),
);

app.listen(PORT, () => {
    console.log(` start listening to PORT: ${PORT}`);
});
