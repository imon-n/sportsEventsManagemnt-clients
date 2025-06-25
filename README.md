# 🏃 Athletic-hub

**Live Link:** [Visit Athletic-hub](http://assignment-11-imon.surge.sh/)

Athletic-hub is a modern web platform that allows users to create, manage, and book athletic events. With user authentication, dynamic booking features, and a responsive interface, it's an all-in-one hub for sports enthusiasts and event organizers.

## ✨ Features

* 🔐 User Authentication (Register/Login/Private Routes)
* 📅 Create, Update, and Manage Athletic Events
* 📥 Book Events and View Booking History
* 🏠 Interactive Home Page with Carousel and Highlights
* 🔍 Event Details and Search Functionality
* 🎨 Clean UI with Dynamic Components
* 🔔 Sweet Alert for Notifications
* 🧠 Context-based Global State Management
* 🌀 Reusable Components (Navbar, Footer, Loading)
* ⚠️ 404 Not Found Page for Invalid Routes

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* React Router DOM
* Tailwind CSS
* Axios
* SweetAlert2

---

## 📁 Project Structure (Highlights)

```
src/
├── components/
│   ├── common/                 # Navbar, Footer, SweetAlert, etc.
│   ├── events/                 # EventCard, EventDetails
│   ├── forms/                  # Create, Update, Login, Register Forms
│   └── homeComponent/          # Carousel, Collapsibles, HomeCards
├── pages/                      # Route pages (Home, Login, Events, etc.)
├── provider/                   # AuthContext, Provider, PrivateRoute
├── hooks/                      # Custom hooks like useAuth
├── services/                   # API utilities
├── utils/                      # Helper functions
├── firebase/                   # Firebase config
├── layouts/                    # MainLayout wrapper
├── main.jsx                    # Entry point
└── index.css                   # Styles
```

---

## 🚀 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/athletic-hub.git
   cd athletic-hub
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up Firebase:**

   * Create a Firebase project
   * Enable Email/Password Authentication
   * Add your Firebase credentials in `src/firebase/firebase.config.js`

4. **Run the app:**

   ```bash
   npm run dev
   ```

5. **Build for production:**

   ```bash
   npm run build
   ```
