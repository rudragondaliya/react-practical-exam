# 🎓 React Practical Exam

A simple React-based CRUD application for student management built with **Redux Toolkit**, **React Router**, and **Firebase** (or JSON server if local). This project allows users to **Add**, **Edit**, **Delete**, and **List** student records using forms and displays.

🔗 **Live Demo**: [https://react-practical-exam-ten.vercel.app/](https://react-practical-exam-ten.vercel.app/)
---

## 🧑‍💻 Features

* ✅ Add student details
* ✏️ Edit existing records
* 🗑️ Delete records
* 📋 List all students with search and filter options
* 🔄 Redux Toolkit integration for state management
* 🔗 Firebase/JSON backend ready
* 📱 Responsive UI with Bootstrap
---

## 📁 Project Structure

```
.
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── StudentForm.jsx
│   │   └── StudentList.jsx
│   ├── features/
│   │   ├── studentSlice.js
│   │   └── thunk.js
│   ├── app/
│   │   └── store.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```
---

## 🚀 Installation

```bash
git clone https://github.com/your-username/react-practical-exam.git
cd react-practical-exam
npm install
npm run dev
```

> Replace `your-username` with your actual GitHub username.
---

## 🛠️ Technologies Used

* ReactJS
* Redux Toolkit
* React Router DOM
* Firebase or JSON Server
* Bootstrap 5

---

## 🔧 Backend Setup (If Using JSON Server)

```bash
npm install -g json-server
json-server --watch db.json --port 3000
```

For Firebase, replace the API logic inside `thunk.js` with Firebase-based calls.

---

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature`)
3. Make your changes
4. Commit (`git commit -am 'Add new feature'`)
5. Push (`git push origin feature`)
6. Create a Pull Request
---

## 📃 License

This project is licensed under the MIT License.
---
