# 📝 Blog Website

A full-stack blog platform where users can sign up, log in, create, view, and manage blog posts. Built using **React**, **Tailwind CSS**, **Appwrite**, and **TinyMCE**, and deployed on **Vercel**.

## 🚀 Live Demo

👉 [https://blogs-website-gules.vercel.app](https://blogs-website-gules.vercel.app)

👉 [https://blogs-website-aditya-gahukar.vercel.app](https://blogs-website-aditya-gahukar.vercel.app)

---

## 📦 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend Services**: Appwrite (Auth, Database, Storage)
- **Rich Text Editor**: TinyMCE
- **Deployment**: Vercel

---

## 📸 Features

- 🔐 User authentication (signup/login/logout)
- 📝 Create and edit blog posts with rich text support
- 🗂 Upload and display blog cover images
- 📚 Browse all published posts
- 🧑‍💻 Author-based post management

---

## 🔧 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/blog-website.git
cd blog-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your Appwrite configuration:

```
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
VITE_TINYMCE_API_KEY=your_tinymce_api_key
```

> ⚠️ Make sure to add your domain (`*.vercel.app` or your custom domain) in Appwrite's **CORS settings**.

### 4. Start the development server
```bash
npm run dev
```

---

## 📁 Folder Structure

```
.
├── public/               # Static assets
├── src/
│   ├── appwrite/         # Appwrite service configuration and SDK setup
│   ├── components/       # Reusable UI components (Header, PostCard, etc.)
│   ├── conf/             # Environment variables access
│   ├── pages/            # Page-level components (Login, Home, AddPost, etc.)
│   ├── store/            # Redux Toolkit slices and store config
│   ├── utils/            # Helper functions (e.g., for validations, formatting)
│   ├── App.jsx           # Root component with routes
│   └── main.jsx          # Entry point of the React app
├── .env                  # Environment variables (Appwrite config, etc.)
├── vercel.json           # Vercel routing config (for SPA refresh handling)
└── README.md             # Project documentation

```

---

## 🛠 Deployment

The project is deployed using **Vercel**.

If you face a 404 on page refresh (e.g., on `/add-post`), add the following to your `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

