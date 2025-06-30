import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import { PostsProvider } from './context/PostsProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <PostsProvider>
        <BrowserRouter basename="/plume-space-app">
          <App />
        </BrowserRouter>
      </PostsProvider>
    </AuthProvider>
  </React.StrictMode>
);
