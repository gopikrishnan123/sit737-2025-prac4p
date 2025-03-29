# SIT737 – 4.1P: Calculator Microservice with Logging

This project is a Node.js microservice that performs basic arithmetic operations via a REST API. It includes robust error handling and structured logging using the `winston` package. This fulfills the 4.1P task requirement of SIT737.

---

## 🧰 Technologies Used

- Node.js
- Express.js
- Winston (for logging)
- Git & GitHub (for version control)

---

## 📦 How to Set Up and Run the Project (Step-by-Step)

### 1. Clone the repository

```bash
git clone https://github.com/gopikrishnan123/sit737-2025-prac4p.git
cd sit737-2025-prac4p
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the microservice

```bash
node index.js
```

> The service will start on:  
> `http://localhost:3000`

---

## 📡 API Endpoints

| Operation     | Endpoint              | Parameters         |
|---------------|------------------------|--------------------|
| Addition      | `/add`                 | `num1`, `num2`     |
| Subtraction   | `/subtract`            | `num1`, `num2`     |
| Multiplication| `/multiply`            | `num1`, `num2`     |
| Division      | `/divide`              | `num1`, `num2`     |

### Example:
```
GET http://localhost:3000/add?num1=5&num2=3
Response: { "result": 8 }
```

---

## ⚠️ Error Handling

- If inputs are missing or invalid:
  ```json
  { "error": "Invalid numbers" }
  ```
- If division by zero is attempted:
  ```json
  { "error": "Cannot divide by zero" }
  ```

---

## 📋 Logging (with Winston)

All API requests and errors are logged using `winston` and saved into files inside the `logs/` folder.

### Files:
- `logs/combined.log` → All requests and info logs
- `logs/error.log` → Only errors (like invalid input, divide-by-zero)

### Each log entry includes:
- IP address of requester
- HTTP method used
- Request URL and query parameters
- Request headers
- Response status code
- Response body

---

## 📂 Project Structure

```
sit737-2025-prac4p/
│
├── index.js              # Main service with endpoints and logging
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Exact version lock of packages
├── README.md             # This documentation
├── /logs                 # Stores log files
│   ├── combined.log
│   └── error.log
└── /node_modules         # Installed dependencies (auto-generated)
```

---

## 🧠 Code Explanation

### Express Setup
```js
const express = require('express');
const app = express();
```

### Winston Logger
```js
const winston = require('winston');
const logger = winston.createLogger({...});
```

### API Endpoints
Each route:
- Parses `num1` and `num2` from query
- Validates input
- Logs the request (and errors if any)
- Returns JSON response

### Example Logging:
```js
logger.info({
  message: 'Addition operation',
  ip: req.ip,
  method: req.method,
  url: req.originalUrl,
  headers: req.headers,
  status: 200,
  response: { result }
});
```

---

## ✅ Summary of Steps Taken

1. Created Node.js project using `npm init -y`
2. Installed Express and Winston
3. Wrote 4 API routes: add, subtract, multiply, divide
4. Added input validation and error handling
5. Configured Winston to log detailed info into separate files
6. Tested each route with browser
7. Logged every request and error into files
8. Pushed all files to GitHub with full README

---

## 🔗 GitHub Repository Link

👉 [https://github.com/gopikrishnan123/sit737-2025-prac4p](https://github.com/gopikrishnan123/sit737-2025-prac4p)



