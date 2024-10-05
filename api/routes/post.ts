import { Request, Response, NextFunction } from "express";
import { supabase } from "../../supabaseInstance";

// Create a new post
const addPost = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    const { content } = request.body;
  
    try {
      const { data, error } = await supabase
        .from('Post')
        .insert([{ content }]);
  
      if (error) {
        response.status(500).json({ error: error.message });
        return;
      }
  
      response.status(201).json(data);
    } catch (error) {
      next(error);
    }
  };

// Retrieve all posts
const getAllPost = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { data, error } = await supabase
        .from('Post')
        .select('*');
  
      if (error) {
        response.status(500).json({ error: error.message });
        return;
      }
  
      response.json(data);
    } catch (error) {
      next(error);
    }
  };

// Retrieve a specific post by its id
const getPostByID = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    const postID = request.params.id;
  
    try {
      const { data, error } = await supabase
        .from('Post')
        .select('*')
        .eq('id', postID);
  
      if (error) {
        response.status(500).json({ error: error.message });
        return;
      }
  
      if (data.length === 0) {
        response.status(404).json({ error: 'Post not found' });
        return;
      }
  
      response.json(data[0]);
    } catch (error) {
      next(error);
    }
  };
  

export { addPost, getAllPost, getPostByID };
