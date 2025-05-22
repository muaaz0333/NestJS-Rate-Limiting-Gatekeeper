# 🚀 Gatekeeper-API

A secure and scalable authentication API built with **NestJS**, **MongoDB**, and **JWT**, featuring **role-based access control**, **rate-limiting** to prevent brute-force attacks, and a clean modular structure ready for production.

---

## 🛠 Features

- ✅ **User Authentication** (Register / Login)
- 🔐 **JWT-based Access Tokens**
- 👮‍♂️ **Role-Based Authorization** (Admin, User, etc.)
- 🧱 **MongoDB with Mongoose Integration**
- 🚫 **Rate Limiting** (to block brute-force attacks)
- 🌱 **Environment-based Configurations** via `.env`
- 📦 **Modular Folder Structure** using NestJS best practices
- 💡 Extensible for future features like 2FA, email verification, and microservices

---

## 📁 Project Structure

```bash
src/
├── auth/           # Authentication logic (JWT, Guards, etc.)
├── users/          # User management module
├── main.ts         # Entry point
└── app.module.ts   # Root application module
```
---
## ⚙️ Technologies Used
- **NestJS – Progressive Node.js Framework**
- **MongoDB + Mongoose – NoSQL Database Integration**
- **JWT – Secure authentication mechanism**
- **@nestjs/throttler – Built-in rate limiting**
- **dotenv – For environment configs**

---
## 🚀 Getting Started

###  Clone the repository
```
git clone https://github.com/muaaz0333/NestJS-Rate-Limiting-Gatekeeper.git
cd NestJS-Rate-Limiting-Gatekeeper
```

### Install dependencies
```
pnpm install
```

### Configure Environment Variables
```
MONGODB_URI=mongodb://{username}:{yourpassword}@localhost:27017/{yourDBNAME}
JWT_SECRET=yourSuperSecretJWTKey
JWT_EXPIRES_IN={add time}

```
### Run the project
```
pnpm start:dev
```

---

## 🧪 Rate Limiting
#### This API uses NestJS’s @nestjs/throttler to protect against brute-force attacks:

**Max 3 requests per 60 seconds (per IP) on protected endpoints.**

---

## 🔒 Security Considerations
- **Strong hashing for passwords using bcrypt**
- **Rate limiting on sensitive endpoints**
- **JWT-based stateless authentication**
- **MongoDB URI and secrets stored securely in .env**

---

## 🙌 Follow the Author

Made with ❤️ by **Muaaz Ahmad**  
👨‍💻 GitHub: [@muaaz0333](https://github.com/muaaz0333)  
🔗 LinkedIn: [linkedin.com/in/MuaazAhmad](https://www.linkedin.com/in/expertfullstackdeveloper/)

---


