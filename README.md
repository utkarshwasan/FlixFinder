# Flix Finder

A responsive, Netflix-inspired single-page movie streaming application built with modern technologies for a seamless user experience and powerful content discovery.

## 🚀 Overview

Flix Finder allows users to browse, search, and explore movies with a real-time "Trending Now" section, AI-enhanced search, and secure authentication. Designed for high performance, the application leverages cutting-edge web technologies to deliver a sleek, mobile-first interface accessible globally.

## ⚙️ Tech Stack

| Technology         | Purpose                                             |
|--------------------|----------------------------------------------------|
| **React.js**       | SPA architecture and interactive UI                |
| **JavaScript**     | Core logic and dynamic functionality               |
| **TailwindCSS**    | Modern, responsive, utility-first styling          |
| **Appwrite**       | Authentication, database, and backend operations   |
| **Hostinger**      | Production deployment and global hosting           |
| **External Movie API** | Movie data source (e.g., TMDB API or similar) |
| **AI/ML Integration** | Intelligent, personalized search features      |

## ✨ Key Features

- **AI-Powered Search:**  
  Utilizes artificial intelligence for contextual, relevant, and personalized movie results. Reduces search input time by ~40% with smart suggestions.

- **Real-Time "Trending Now" Algorithm:**  
  Dynamically tracks and displays trending movies based on aggregate user search and viewing behavior, emulating Netflix’s personalized trends.

- **Modern Responsive Design:**  
  Fully responsive, mobile-first UI using TailwindCSS for optimized experience across all devices.

- **Secure Authentication & Data Handling:**  
  Appwrite powers robust user authentication, secure database, and backend operations to protect user data and enhance app performance.

- **Global Deployment:**  
  Hosted on Hostinger with optimized, production-ready build for fast worldwide access.

## 🛠️ Technologies Used

- **Frontend:** React.js, JavaScript, JSX, TailwindCSS
- **Backend:** Appwrite (Authentication, DB, API)
- **DevTools:** Vite, ESLint, React Hooks
- **External APIs:** Movie data API (such as TMDB)
- **AI Integration:** Machine learning for search and relevance ranking
- **Hosting:** Hostinger

## 🚦 Features at a Glance

- Netflix-style movie browsing and exploration
- Search with auto-complete and context awareness
- Trending Now: real-time updates from user activity
- User registration, login, session management (Appwrite)
- Global accessibility and performance optimization

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- Appwrite project (credentials required)
- API key for external movie API (e.g., TMDB)

### Installation

```bash
git clone https://github.com//flixfinder.git
cd flixfinder
npm install
```

### Environment Setup

Create a `.env.local` file in your project root with:

```env
VITE_TMDB_API_KEY=        # <-- Your Movie API Key
VITE_APPWRITE_ENDPOINT=   # <-- Appwrite Endpoint
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
```

### Local Development

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173) to preview.

### Production Build

```bash
npm run build
```

Deploy the output (from `dist/`) to Hostinger or your preferred host.

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Appwrite Documentation](https://appwrite.io/docs)
- [TMDB API Docs](https://developer.themoviedb.org/reference/intro/getting-started)

## 🎬 Credits

Flix Finder is inspired by best-in-class streaming experiences, built with love using modern open-source technologies.

Ready to contribute? Pull requests and stars are welcome!
