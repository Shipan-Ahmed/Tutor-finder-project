# 🎓 MediQueue – Tutor Booking System

MediQueue is a modern tutor booking platform where students can explore tutors, book learning sessions, manage scheduled classes, and avoid manual scheduling conflicts. The system provides a smooth and organized learning experience with real-time slot management and digital booking flow.

🔗 **Live Site:** https://your-live-link.vercel.app  
💻 **Client Repository:** https://github.com/yourusername/client-repo  
🖥️ **Server Repository:** https://github.com/yourusername/server-repo  

---

## ✨ Features

✅ User Authentication with Email/Password and Google Login  
✅ Private Routes using JWT Authentication  
✅ Add Tutor functionality with detailed tutor information  
✅ Browse Available Tutors with dynamic cards  
✅ Book learning sessions with slot restrictions  
✅ Automatic slot decrease after successful booking  
✅ Session date restriction logic implemented  
✅ My Tutors dashboard with update and delete functionality  
✅ My Booked Sessions page with booking cancellation  
✅ Search tutors by name using regex search  
✅ Filter tutors by registration date range  
✅ Dark / Light theme support  
✅ Responsive design for Mobile, Tablet, and Desktop  
✅ Beautiful loading, error and 404 pages  
✅ Toast notifications for all CRUD operations  

---

## 🛠 Tech Stack

### Frontend
- Next.js
- React
- Tailwind CSS
- Shadcn UI
- React Icons
- next-themes
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- CORS
- dotenv

---

## 🔐 Authentication Features

- Email & Password Login
- Google Login
- Protected Routes
- JWT Token Generation
- Session Persistence
- Route Protection Middleware

---

## 📚 Main Pages

### Public Pages
- Home
- Tutors
- Login
- Register

### Private Pages
- Add Tutor
- Tutor Details
- My Tutors
- My Booked Sessions

---

## ⚙️ Core Functionalities

### Tutor Management
- Create Tutor
- Update Tutor
- Delete Tutor
- View Tutor Details

### Booking System
- Book Session
- Session Validation
- Slot Availability Check
- Automatic Slot Decrease
- Booking Status Tracking
- Cancel Booking

---

## 🎨 UI Features

- Custom modern design
- Consistent color system
- Interactive animations
- Responsive layouts
- Dark / Light mode toggle
- Friendly empty states

---

## 📂 Project Structure

```bash
client/
│
├── app
├── components
├── lib
├── hooks
├── middleware.js
└── public


server/
│
├── routes
├── index.js
├── .env
└── package.json
```

---

## 🚀 Installation Guide

Clone client:

```bash
git clone https://github.com/yourusername/client-repo.git
```

Clone server:

```bash
git clone https://github.com/yourusername/server-repo.git
```

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Run backend:

```bash
nodemon index.js
```

---

## 🔑 Environment Variables

Create `.env` file:

```env
DB_URI=your_mongodb_uri

JWT_SECRET=your_secret

NEXT_PUBLIC_API_URL=http://localhost:3500
```

---

## 📸 Screenshots

### Home Page

(Add screenshot here)

### Tutor Details

(Add screenshot here)

### Dashboard

(Add screenshot here)

---

## 👨‍💻 Developed By

Shipan Miah

Software Engineering Enthusiast | Full Stack Learner | Competitive Programmer
