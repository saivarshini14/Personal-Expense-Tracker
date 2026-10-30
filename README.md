# Personal Expense Tracker 💰

A full-stack web application built to help users manage and track their daily expenses. Users can add, view, update, and delete expenses, filter them by category, and calculate their total spending.

## 🚀 Features

- Add new expenses with title, amount, category, and date.
- View all saved expenses.
- Edit existing expenses.
- Delete expenses.
- Filter expenses by category.
- Calculate total expenses automatically.
- Validate expense details before submission.
- Store expense records in a MySQL database.
- Display success and error messages.

## 🛠️ Technologies Used

**Frontend**
- React.js
- HTML
- CSS
- JavaScript
- Vite

**Backend**
- Java 17
- Spring Boot
- Spring Data JPA
- REST API
- Maven

**Database**
- MySQL

**Tools**
- Visual Studio Code
- Git and GitHub
- Postman

## 📂 Project Structure

```text
PersonalExpenseTracker/
│
├── backend/
│   └── PersonalExpenseTracker/
│       ├── src/
│       ├── pom.xml
│       └── mvnw
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
│
└── .gitignore
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/saivarshini14/Personal-Expense-Tracker.git
```

### 2. Configure MySQL

Create a database:

```sql
CREATE DATABASE expense_tracker;
```

### 3. Configure Backend

Open the backend folder:

```bash
cd backend/PersonalExpenseTracker
```

Set your MySQL password as an environment variable in Windows CMD:

```cmd
set DB_PASSWORD=your_mysql_password
```

Start the Spring Boot application:

```cmd
mvnw.cmd spring-boot:run
```

Backend runs at:

`http://localhost:8080`

### 4. Configure Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

`http://localhost:5173`

## 🔗 REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/expenses` | Add an expense |
| GET | `/api/expenses` | View all expenses |
| GET | `/api/expenses/{id}` | View an expense |
| PUT | `/api/expenses/{id}` | Update an expense |
| DELETE | `/api/expenses/{id}` | Delete an expense |
| GET | `/api/expenses/category/{category}` | Filter by category |

## 📌 Expense Categories

- Food
- Travel
- Shopping
- Other

## 👩‍💻 Developer

**Sai Varshini**

B.Tech – Artificial Intelligence and Machine Learning

GitHub: [@saivarshini14](https://github.com/saivarshini14)

---

⭐ If you find this project useful, consider giving the repository a star!
