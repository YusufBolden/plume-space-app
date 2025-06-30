# 🖋️ PlumeSpace

PlumeSpace is a modern blog platform built with **React**, **TypeScript**, and **Context API** featuring dynamic routing for individual posts, client-side authentication for protected admin pages, and smooth page transitions with Framer Motion. Designed for clarity, scalability, and ease of maintenance.

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF4F5F?style=for-the-badge&logo=framer&logoColor=white)


---

## 🚀 Local Setup & Tailwind CSS Installation

To set up and run this project locally with Tailwind CSS and Vite:

1. **Clone the repository**

```bash
git clone https://github.com/YusufBolden/plume-space-app.git
cd plume-space-app
```

2. **Install project dependencies**

```
npm install
```

3. **Install Tailwind CSS (with Vite)**

```
npm install tailwindcss @tailwindcss/vite
```

4. **Configure the Vite plugin**

```
// vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

5. **Import Tailwind in your CSS file**

```
/* src/index.css */
@import "tailwindcss";
```

6. **Start the dev server**

```
npm run dev
```

---

## 🗄️ File Structure
```
plume-space-app/
├── public/
|   ├── screenshot.png
│   ├── screenshot.png
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── PostList.tsx
│   │   └── PostContent.tsx
│   ├── context/
│   │   ├── AuthProvider.tsx      
│   │   └── useAuth.ts            
│   ├── data/
│   │   └── posts.ts   
│   ├── types/
│   │   └── index.ts              
│   ├── pages/
│   │   ├── BlogIndex.tsx
│   │   ├── BlogPost.tsx
│   │   ├── Login.tsx
│   │   └── Admin.tsx
│   ├── App.tsx                   
│   ├── main.tsx                 
│   ├── index.css                 
│   └── vite-env.d.ts
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```
---

## 🚀 Features

- **Dynamic Blog System**
  - Lists all blog posts after login.
  - Each post has its own dynamic URL and dedicated detail page.

- **Protected Routes & Authentication**
  - Login system with `user` and `admin` roles.
  - Unauthenticated users are redirected to the login page.
  - Only authenticated users can view the blog index.
  - Only admins can access the admin dashboard.

- **Admin Dashboard**
  - Displays admin dashboard with management tools.
  - Admins can add new blog posts through a simple form.
  - Admins can delete posts directly from the dashboard.
  - Shows a live list of posts added.

- **Persistent Data Hook**
  - Generic `useLocalStorage` hook for future persistent state management.

- **Responsive Navigation Bar**
  - Displays brand logo and app name.
  - Highlights active links and changes based on authentication state.
  - Admins see an additional admin link.

- **Animated Page Transitions**
  - Smooth fade transitions between pages using Framer Motion.

- **Empty States & UI Feedback**
  - Clear messaging when no posts exist.
  - Toast notifications appear for adding or deleting posts in the admin dashboard.

- **Tailwind CSS Design**
  - Modern, clean UI built with Tailwind CSS.
  - Fully responsive across devices.

---

## 📸 Previews

### Home Page
<img src="../plume-space-app/src/assets/login.png" width="500" />

### Blog List
<img src="../plume-space-app/src/assets/blogIndex.png" width="500" />

### Admin Dashboard - upper
<img src="../plume-space-app/src/assets/adminUpper.png" width="500" />

### Admin Dashboard - lower
<img src="../plume-space-app/src/assets/adminLower.png" width="500" />


---

## 🧑🏿‍💻 Author

Created by [Yusuf Bolden](https://github.com/YusufBolden). Feedback and suggestions are welcome!

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
