# 📝 Blogging Web App

A full-stack blogging platform built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Users can register, log in, create, edit, and delete blog posts.

---

## 🚀 Features

- 🔐 User authentication (JWT-based)
- ✍️ Create, edit, and delete blog posts
- 🧾 Rich text editor for blog content
- 📦 RESTful API backend
- 🗃️ MongoDB for data storage
- 🎨 Responsive React frontend
- ⚙️ Environment-based configuration

---

## 🛠️ Tech Stack

### Frontend (`/frontencode`)
- React.js
- React Router
- Axios
- Context API or Redux (optional)
- CSS / Tailwind / Bootstrap

### Backend (`/backendcode`)
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Bcrypt for password hashing
- dotenv for config

---

## 📁 Project Structure

project/
├── frontencode/ # React frontend
│ └── src/
│ └── components/
│ └── pages/
│ └── App.js
│ └── index.js
│
├── backendcode/ # Express backend
│ └── controllers/
│ └── models/
│ └── routes/
│ └── server.js
│ └── .env

## ⚙️ Getting Started

### Prerequisites

- Node.js & npm
- MongoDB (local or cloud)
- Git

---

### 🖥️ Frontend Setup

```bash
cd frontencode
npm install
npm start
Runs on: http://localhost:3000


```
### Backend Setup 
cd backendcode
npm install

```bash

# Create a .env file with Mongo URI and JWT secret
npm run dev
Runs on: http://localhost:5000

```
### example.env 
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

```bash

## Screenshots:- 


 
### Future Improvements
Add WYSIWYG editor

Like/comment system

Rich media (images, videos)

Admin dashboard

SEO optimization