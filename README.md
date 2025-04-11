```markdown
# 📝 Task Web App

A simple task management web app built using **Express**, **Node.js**, and **EJS**.  
Users can add tasks with a name and description, view them on the homepage, and click "More Info" to see task details on a separate page.

---

## 🚀 Features

- Add a task with a **name** and **description**
- View all tasks listed in a container format
- Click on **More Info** to see full task details on a separate page
- Navigate back to the homepage

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **EJS** (Embedded JavaScript templating)
- **Bootstrap** (optional, for styling)

---

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yashesh-akbari/Task_express.git
   cd Task_express
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the server:**

   ```bash
   node app.js
   ```

4. **Open in browser:**

   Visit `http://localhost:3000`

---

## 📸 Screenshots

### ✅ Home Page
- Add task via a form
- See all added tasks below

### 📋 Task Details Page
- Displays selected task name and full description
- Includes a link to go back to the home page

---

## 📁 Folder Structure

```
Task_express/
├── views/
│   ├── index.ejs
│   └── show.ejs
├── public/
│   └── (optional CSS or JS)
├── app.js
└── package.json
```

---

## 📌 Routes

| Method | Route        | Description                       |
|--------|--------------|-----------------------------------|
| GET    | `/`          | Show task form and all tasks      |
| POST   | `/add`       | Add a new task                    |
| GET    | `/task/:id`  | Show detailed view of one task    |

---

## ✍️ Author

- **Yashesh Akbari**  
[GitHub](https://github.com/yashesh-akbari)

---

## 📃 License

This project is open source and available under the [MIT License](LICENSE).

```

---

Let me know if you'd like to include sample code, example screenshots, or a `.env` section if you're using one.
