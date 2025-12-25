# 🔗 GoLink

GoLink is a full-stack web application for smart URL and file sharing. It allows users to shorten URLs, generate QR codes, create secure and expiring links, and share files through protected links — all via a responsive and clean user interface.

The project is built with a backend-first mindset while maintaining a well-structured frontend using custom CSS for layout and responsiveness.

---

## ✨ Features

- 🔗 URL shortening with unique, shareable links  
- 📱 QR code generation from URLs  
- ⏳ Time-based link expiration (auto-deletion using database TTL)  
- 🔒 Password-protected links  
- 📁 Secure file sharing (local storage / optional Google Drive API)  
- 📊 Basic link analytics (click tracking)  
- 👤 User authentication using JWT  
- 🛡️ Secure password hashing and input validation  
- 🎨 Responsive frontend with custom CSS  

---

## 🛠️ Tech Stack

### Frontend
- React  
- HTML5  
- CSS3 (custom styling, responsive layout)

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  
- TTL Indexes (for automatic expiry of links)

### Authentication & Security
- JWT (JSON Web Tokens)  
- bcrypt (password hashing)  
- Zod (request validation)

### Other Tools & Libraries
- Multer (file uploads)  
- QR Code generation  
- Optional Google Drive API integration  

---

## 📂 Project Structure (Simplified)
golink/
│
├── backend/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── models/
│   ├── utils/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── src/
│
├── .env
├── package.json
└── README.md


---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB (local or cloud)
- npm or yarn

---

### Installation

1. Clone the repository
git clone https://github.com/MdAyaanQuadri/GoLink
cd golink
2.	Install backend dependencies
cd backend
3.Install frontend dependencies
cd ../frontend
npm install


Environment Variables
Create a .env file in the backend folder and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start Backend
cd backend
npm run dev

Start Frontend
cd frontend
npm run dev


Frontend runs on http://localhost:5173
Backend runs on http://localhost:5000

