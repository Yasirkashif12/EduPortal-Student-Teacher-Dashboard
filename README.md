

# EduPortal – Student & Teacher Dashboard

**Tagline:** *Interactive Dashboard for Students and Teachers to Manage Assignments and Quizzes.*

EduPortal is a responsive educational dashboard that provides a seamless interface for students and teachers. Built with **React** and **Vite**, it allows students to access classes, subjects, and assignments, while teachers can review and grade submissions efficiently.

This project demonstrates **frontend skills, state management, and authentication integration** using Firebase (for student login) and local/session storage for handling application data.

---

## ✨ Key Features

### Student Panel

* **Authentication:** Secure student login using Firebase.
* **Class & Subject Navigation:** Browse classes (1–5) and subjects (Math, Science, etc.).
* **Assignment & Quiz Access:** View Today’s Assignment or Today’s Quiz.
* **Answer Submission:** Submit assignment answers, which are stored locally in **localStorage**.

### Teacher Panel

* **Authentication:** Teacher login via fixed credentials (session-based).
* **Student Submissions Review:** View student names, subjects, and submitted answers.
* **Marking System:** Assign marks to submitted assignments and quizzes.
* **Filtered Views:** View all submissions or filter by type (Quiz or Assignment).

---

## 🛠 Technology Stack

* **Frontend:** React, Vite
* **Authentication:** Firebase (student login only)
* **State Management:** LocalStorage & SessionStorage
* **Styling:** CSS, Tailwind CSS
* **Version Control:** Git & GitHub

---

## 🚀 How to Run Locally

1. **Clone the repository:**

```bash
git clone https://github.com/Yasirkashif12/EduPortal-Student-Teacher-Dashboard.git
cd EduPortal-Student-Teacher-Dashboard
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure Firebase (Student login only):**

* Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
* Enable Firebase Authentication.
* Replace the Firebase config in the project with your credentials.

4. **Start the application:**

```bash
npm run dev
```

5. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000) to access the dashboards.

---

## 🤝 Contributing

* Fork the repository
* Create a feature branch
* Commit your changes
* Push the branch and create a pull request

---

## 📄 License

This project is licensed under the **MIT License** – see [LICENSE](LICENSE) for details.

---


---


Do you want me to do that next?
