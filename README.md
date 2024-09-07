
# 🎬 Netflix Clone

A sleek and responsive Netflix clone built using **React**, **Tailwind CSS**, and state management with **Context API**. This project replicates the look and feel of the popular streaming platform while showcasing the power of **React hooks** like `useState`, `useNavigate`, and the **Context API** for managing global state.

## 🌟 Features

- **Responsive Design**: Fully responsive UI built using **Tailwind CSS**, ensuring it looks great on all devices.
- **User Authentication**: Supports login and sign-up functionality (with future plans for Firebase authentication).
- **Dynamic Movie Listings**: Movies and shows are displayed dynamically with real-time data (placeholder data in this version).
- **Context API for State Management**: Centralized global state for managing user data, movie lists, and more.
- **React Hooks**: 
  - `useState` to handle component-level states.
  - `useNavigate` for routing between pages.
- **Search Bar**: Users can search for their favorite movies.
- **Add to Watchlist**: Easily add or remove movies from your personal watchlist.

## 🛠️ Technologies Used

- **HTML**: For structuring the content.
- **CSS**: For styling (with the assistance of Tailwind CSS for utility-first styles).
- **React**: JavaScript framework for building UI components.
- **Tailwind CSS**: A utility-first CSS framework to style the app in a responsive way.
- **React Hooks**: `useState`, `useNavigate`, and custom hooks for managing the app's logic.
- **Context API**: Used for state management, allowing a global store for managing app-wide state (like user login, movie data, etc.).

## 🚀 Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   ```
2. **Navigate to the project folder**:
   ```bash
   cd netflix-clone
   ```
3. **Install the dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm start
   ```
   The app will run at `http://localhost:3000`.

## 📁 Project Structure

```bash
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── assets/         # Images and other static assets
│   ├── components/     # Reusable React components
│   ├── context/        # Context API for state management
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Different pages like Home, Login, Watchlist
│   ├── App.js          # Main App component
│   ├── index.js        # React entry point
│   └── ...
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json
```

## ⚙️ Core Concepts

### 1. **React Hooks**
   - **`useState`**: Manages component-level state, such as keeping track of user's movie selections, watchlist, and more.
   - **`useNavigate`**: Simplifies navigation between different pages in the app (e.g., navigating from login to the home page).
   
### 2. **State Management (Context API)**
   The Context API is used to manage global state. It handles shared data like user authentication state, the movie list, and watchlist across the app.

   - **`UserContext`**: Stores user information and authentication status.
   - **`MoviesContext`**: Centralized management of movie data across components.

### 3. **Responsive Design with Tailwind CSS**
   Tailwind CSS is used to ensure the UI is responsive across devices with clean utility classes for styling.
   

## 🔮 Future Improvements

- **Firebase Integration**: To implement real-time user authentication.
- **API Integration**: Fetch real movie data from an external API like TMDB.
- **Watchlist Persistence**: Store user watchlists locally or in a database.

## 💻 Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Submit a pull request.

## 📝 License

This project is licensed under the MIT License.
