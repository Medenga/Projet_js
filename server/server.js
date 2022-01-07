const PORT = process.env.PORT || 3000;
const UserRouter = require("./routes/user");
const PostRouter = require("./routes/post");
const AuthentificationRouter = require("./routes/authentification.js");
const express = require("express");
const vehiculeRouter = require("./routes/vehicule");
const securityRouter = require("./routes/security");
const userRouter = require("./routes/user");
const postArticle = require("./routes/Article");
const connection = require("./lib/db");
const verifyJWT = require("./middlewares/verifyJWT");
connection.sync();
const app = express();


app.use(express.json());

app.use(UserRouter);
app.use(PostRouter);

app.use(AuthentificationRouter);
app.use("", securityRouter);
app.use("/users", userRouter);
app.use("/articles", postArticle);
app.use(verifyJWT);


app.listen(3000, () => console.log("Server is listening"));
