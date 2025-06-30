export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export interface PostContentProps {
  post: Post;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export type Role = "user" | "admin" | null;

export interface AuthContextType {
  isAuthenticated: boolean;
  role: Role;
  login: (role: Role) => void;
  logout: () => void;
}

export interface PostsProviderProps {
  children: React.ReactNode;
}

export interface PostsContextType {
  posts: Post[];
  addPost: (post: Post) => void;
  removePost: (id: number) => void;
}
