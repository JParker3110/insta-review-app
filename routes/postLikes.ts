import { Request, Response, NextFunction } from "express";
import { supabase } from "../supabaseInstance";

const addPostLike = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { PostID } = request.body;

  try {
    const { data, error } = await supabase
      .from('PostLike')
      .insert([{ PostID }]);

    if (error) {
      response.status(500).json({ error: error.message });
      return;
    }

    response.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

const addCommentLike = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const { CommentID } = request.body;

  try {
    const { data, error } = await supabase
      .from('PostLike')
      .insert([{ CommentID }]);

    if (error) {
      response.status(500).json({ error: error.message });
      return;
    }

    response.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

const getPostLikesByID = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const commentID = request.params.id;
    const { data, error } = await supabase
      .from('PostLike')
      .select('*')
      .eq('CommentID', commentID);

    if (error) {
      response.status(500).json({ error: error.message });
      return;
    }

    response.json(data);
  } catch (error) {
    next(error);
  }
};

export { addPostLike, addCommentLike, getPostLikesByID };



