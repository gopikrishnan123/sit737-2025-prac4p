# SIT737 – 4.1P: Calculator Microservice with Logging

This project is a simple Node.js microservice that performs basic arithmetic operations via a REST API. It also includes structured logging using Winston.

---

## 🧰 Technologies Used

- Node.js
- Express.js
- Winston (for logging)

---

## 📦 How to Set Up

### 1. Clone the repo (or use your local copy)
```bash
git clone https://github.com/YOUR_USERNAME/sit737-2025-prac4p.git
cd sit737-2025-prac4p
```

### 2. Install dependencies
```bash
npm install
```

---

## 🚀 How to Run the Microservice

```bash
node index.js
```

Microservice will run at:  
👉 `http://localhost:3000`

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
- Division by zero:
  ```json
  { "error": "Cannot divide by zero" }
  ```

---

## 📋 Logging (with Winston)

- All requests are logged using Winston
- Logs are saved in the `logs/` folder

### Files:
- `logs/combined.log` → all logs
- `logs/error.log` → only errors





