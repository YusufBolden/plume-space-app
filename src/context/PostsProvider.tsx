import { createContext, useState } from 'react';
import { posts as initialPosts } from '../data/posts';
import type { Post, PostsProviderProps, PostsContextType } from '../types';

const PostsContext = createContext<PostsContextType | null>(null);

function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const addPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  const removePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, removePost }}>
      {children}
    </PostsContext.Provider>
  );
}

export { PostsContext, PostsProvider };
