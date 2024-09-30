import { Request, Response, NextFunction } from "express";
import { supabase } from "./supabaseInstance";

// Validate content fields
const validateContent = (request: Request, response: Response, next: NextFunction): void => {
  const { content } = request.body;
  if (!content || typeof content !== 'string' || content.trim() === '') {
    response.status(400).json({ error: 'Content must be a non-empty string' });
  } else {
    next();
  }
};

// Validate existence of PostID
const validatePostID = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  const { PostID } = request.body;
  try {
    const { data, error } = await supabase
      .from('Post')
      .select('id')
      .eq('id', PostID);

    if (error || data.length === 0) {
      response.status(400).json({ error: 'Invalid PostID' });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

// Validate existence of CommentID
const validateCommentID = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  const { CommentID } = request.body;
  try {
    const { data, error } = await supabase
      .from('comment')
      .select('id')
      .eq('id', CommentID);

    if (error || data.length === 0) {
      response.status(400).json({ error: 'Invalid CommentID' });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

export { validateContent, validatePostID, validateCommentID };
