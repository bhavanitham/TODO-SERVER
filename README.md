# User-Based To-Do Application with JWT Authentication and Authorization

## 🚀 Project Overview

This is a **Node.js** and **Express.js**-based application for managing user-specific to-do tasks. The project implements **JWT-based authentication and authorization**, ensuring secure access and task management for individual users.

---

## 🛠️ Features

- **User Authentication**: Secure login and registration using JWT.
- **Authorization**: Role-based access to protect endpoints.
- **CRUD Operations**: Users can:
  - Create to-do tasks.
  - Read their to-do list.
  - Update specific tasks.
  - Delete tasks securely.
- **Token Security**: Passwords are hashed, and sensitive endpoints require valid JWT tokens.
- **User-based Tasks**: Each user has their own to-do list isolated from others.

---

## 🖥️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas or Local)
- **Authentication**: JWT (JSON Web Tokens)
- **Other Tools**: bcrypt, mongoose

---

## 📂 Project Structure

```plaintext
📦project-root
 ┣ 📂controllers
 ┃ ┣ 📜authController.js
 ┃ ┣ 📜todoController.js
 ┣ 📂models
 ┃ ┣ 📜User.js
 ┃ ┣ 📜Todo.js
 ┣ 📂routes
 ┃ ┣ 📜authRoutes.js
 ┃ ┣ 📜todoRoutes.js
 ┣ 📂middleware
 ┃ ┣ 📜authMiddleware.js
 ┣ 📜.env
 ┣ 📜app.js
 ┣ 📜package.json
 ┣ 📜README.md
