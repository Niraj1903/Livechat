---
# 📡 **Live Chat UI – YouTube Style (Vite + React + Redux + TailwindCSS)**
---

## 📌 **Project Overview**

This project is a **real-time chat UI** inspired by **YouTube Live Chat**, built using:

- ⚡ **Vite** – for super-fast development
- ⚛️ **React** – UI components
- 🗂️ **Redux Toolkit** – state management for chat messages
- 🎨 **TailwindCSS** – styling with utility-first classes

It simulates live incoming chat messages using an interval, and also allows the user to send messages like a real-time chat application.

---

## 🎯 **Features**

### ✅ **YouTube-style Chat Interface**

- Profile icon
- Username + message layout
- Hover effects
- Clean spacing & typography

### ✅ **Auto-Generated Live Messages**

Every second, a new random message is added using:

- `generate()` → random username
- `makeid()` → random message text

### ✅ **User Message Input**

- Type a message → click **Send**
- Message instantly appears in the chat feed
- Scrollable messages container

### ✅ **Fully Responsive**

- Chat container centered and limited width (`max-w-md`)
- Works on mobile, tablet, desktop

---

## 🏗️ **Tech Stack**

| Technology        | Purpose                        |
| ----------------- | ------------------------------ |
| **Vite**          | Fast dev environment + bundler |
| **React**         | UI components                  |
| **Redux Toolkit** | Manage chat messages           |
| **Tailwind CSS**  | Styling with utility classes   |
| **React Icons**   | Profile icons                  |

---

## 📁 **Project Structure**

```
src/
 ├── components/
 │    ├── LiveChat.jsx
 │    └── ChatMessage.jsx
 │
 ├── utils/
 │    ├── chatSlice.js
 │    ├── helper.js
 │    └── store.js
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## 🚀 **How to Run This Project**

### 1️⃣ Clone the Repository

```sh
git clone <your-repo-url>
cd your-project-folder
```

---

### 2️⃣ Install Dependencies

```sh
npm install
```

---

### 3️⃣ Run Development Server

```sh
npm run dev
```

Vite will start the project at:

```
http://localhost:5173/
```

---

## 🎨 **TailwindCSS Configuration**

Tailwind is already configured in:

**`tailwind.config.js`**

```js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
```

**`index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🔧 **Redux Slice (chatSlice.js)**

Manages the chat messages list:

```js
const chatSlice = createSlice({
  name: "chat",
  initialState: { messages: [] },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});
```

---

## 💬 **Live Chat Auto-Message Logic**

Inside `LiveChat.jsx`:

```js
useEffect(() => {
  const Interval = setInterval(() => {
    dispatch(
      addMessage({
        name: generate(),
        message: makeid(30),
      })
    );
  }, 1000);

  return () => clearInterval(Interval);
}, []);
```

---

## 🖼️ **UI Preview**

- YouTube-like message rows
- Fixed-width centered chat box
- Scrollable message feed

---

## 🧑‍💻 **Author**

**Niraj Singh**
🔗 LinkedIn: [www.linkedin.com/in/niraj1903](http://www.linkedin.com/in/niraj1903)

If you like this project, feel free to ⭐ the repo or connect on LinkedIn!

---
