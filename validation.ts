import { Request, Response, NextFunction } from 'express';
import { supabase } from './supabaseInstance';

export const validateContent = (request: Request, response: Response, next: NextFunction): void => {
  const { content } = request.body;
  if (!content || typeof content !== 'string' || content.trim() === '') {
    response.status(400).json({ error: 'Content must be a non-empty string' });
    return;
  }
  next();
};

export const validatePostID = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const postID = request.params.id;
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('id', postID);

    if (error) {
      response.status(500).json({ error: error.message });
      return;
    }

    if (!data || data.length === 0) {
      response.status(404).json({ error: 'Post not found.' });
      return;
    }

    next();
  } catch (error) {
    next(error);
  }
};

export const validateCommentID = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const commentID = request.params.id;
    const { data, error } = await supabase
      .from('comment')
      .select('*')
      .eq('id', commentID);

    if (error) {
      response.status(500).json({ error: error.message });
      return;
    }

    if (!data || data.length === 0) {
      response.status(404).json({ error: 'Comment not found.' });
      return;
    }

    next();
  } catch (error) {
    next(error);
  }
};
