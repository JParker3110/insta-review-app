import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getAllPost, addPost, getPostByID } from "../api/routes/post";
import { getCommentsByID, addComment } from "../api/routes/comments";
import { addPostLike, addCommentLike, getPostLikesByID } from "../api/routes/postLikes";
import { validateContent, validatePostID, validateCommentID } from "../validation";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.SNACKS_CLIENT,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (request: Request, response: Response) => {
  response.json({ message: "welcome to our server" });
});

app.post("/posts", validateContent, addPost);
app.get("/posts", getAllPost);
app.get("/posts/:id", getPostByID);
app.post("/posts/:id/comments", validateContent, validatePostID, addComment);
app.get("/posts/:id/comments", getCommentsByID);
app.post("/posts/:id/likes", validatePostID, addPostLike);
app.post("/comments/:id/likes", validateCommentID, addCommentLike);
app.get("/comments/:id/postLikes", getPostLikesByID);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  console.error(error.stack);
  response.status(500).json({
    error: "Something broke!",
    errorStack: error.stack,
    errorMessage: error.message,
  });
});

app.use((request: Request, response: Response) => {
  response.status(404).json({
    error: "Resource not found. Are you sure you're looking in the right place?",
  });
});

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});

export default app;

