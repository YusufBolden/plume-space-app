import { useContext } from 'react';
import { PostsContext } from './PostsProvider';

export function usePosts() {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
}
