Sure, here’s a well-structured `README.md` for your **BoltLabs Website** project. It's tailored for a professional full-stack project setup with Node.js, Express, Prisma, PostgreSQL, and React:

---

```md
# ⚡ BoltLabs Website

BoltLabs Website is a full-stack web platform built to manage teams, services, client onboarding, and member requests. Designed with scalability and clarity in mind, this project enables both users and admins to interact through a streamlined dashboard and efficient backend APIs.

## 🔧 Tech Stack

**Frontend**
- React.js
- React Router DOM
- Tailwind CSS
- Axios

**Backend**
- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- Nodemailer (for email functionality)

**Other Tools**
- dotenv
- UUID
- JWT 

---

````

---

## 🛠 Setup Instructions

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/your-username/boltlabs-website.git
cd boltlabs-website
````

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

* Create a `.env` file in `backend/` with the following:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/yourdb
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

* Push DB schema:

```bash
npx prisma db push --schema=backend/prisma/schema.prisma
```

* Start server:

```bash
npm run dev
```

Backend runs on: `http://localhost:8080`

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173` (or your Vite default)
