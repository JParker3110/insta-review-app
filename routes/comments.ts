
import { Request, Response, NextFunction } from "express";
import { supabase } from "../supabaseInstance";

// Get all comments for a specific post
const getCommentsByID = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const postID = request.params.id;
      const { data, error } = await supabase
        .from('comment')
        .select('*')
        .eq('PostID', postID);
  
      if (error) {
        response.status(500).json({ error: error.message });
        return;
      }
  
      response.json(data);
    } catch (error) {
      next(error);
    }
  };
// Add a new comment to a specific post
const addComment = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    const { PostID, content } = request.body;
  
    try {
      const { data, error } = await supabase
        .from('comment')
        .insert([{ PostID, content }]);
  
      if (error) {
        response.status(500).json({ error: error.message });
        return;
      }
  
      response.status(201).json(data);
    } catch (error) {
      next(error);
    }
  };

export { getCommentsByID, addComment };




