# 🚀 HydroSmart Backend

Backend service untuk proyek **HydroSmart** – sistem manajemen tanaman hidroponik berbasis web. Dibangun menggunakan **Node.js**, **Hapi.js**, dan **MongoDB Atlas**.

---

## 📁 Struktur Direktori

backend/
├── models/
│ ├── PlantModel.js 👉 Skema MongoDB untuk tanaman
│ └── UserModel.js 👉 Skema MongoDB untuk pengguna
├── handlers/
│ ├── plantsHandler.js 👉 Logika CRUD tanaman
│ └── usersHandler.js 👉 Logika register & login pengguna
├── routes/
│ ├── index.js 👉 Menggabungkan semua routes
│ ├── plants.route.js 👉 Rute tanaman (GET, POST, PUT, DELETE)
│ ├── users.route.js 👉 Rute autentikasi user
│ └── reminders.routes.js 👉 (Rencana pengembangan)
├── database.js 👉 Konfigurasi koneksi MongoDB
├── server.js 👉 Entry point aplikasi
├── package.json 👉 Konfigurasi dependencies & scripts
└── .env 👉 Variabel lingkungan (.gitignore)

---

## 🔧 Setup dan Instalasi

1. **Clone repo ini**
```bash
git clone https://github.com/CC25-CF144/FEBE.git
cd backend
```

2. **Instal dependencies**

```bash
npm install
```

Install bcryptjs dan JWT
Jalankan perintah ini di folder backend/:
```bash
npm install bcryptjs
npm install jsonwebtoken
```

isi file .env di root folder
MONGO_URI=<mongodb+srv://rdduan2091:HydroSmart612543@cluster0.ba4f4cg.mongodb.net/hydrosmart?retryWrites=true&w=majority&appName=Cluster0>
JWT_SECRET=<your_jwt_secret> (belum dibuat)

Jalankan server
```bash
npm start
```

---

🔌 API Endpoint Aktif
| Method | Endpoint       | Keterangan            |
| ------ | -------------- | --------------------- |
| GET    | `/`            | Cek status API        |
| GET    | `/plants`      | Ambil semua tanaman   |
| POST   | `/plants`      | Tambah tanaman baru   |
| PUT    | `/plants/{id}` | Perbarui data tanaman |
| DELETE | `/plants/{id}` | Hapus tanaman         |
| POST   | `/register`    | Registrasi pengguna   |
| POST   | `/login`       | Login dan ambil JWT   |

---

🛠️ Teknologi yang Digunakan
Hapi.js – Web framework ringan & modular

MongoDB Atlas – Cloud database NoSQL

Mongoose – ODM untuk MongoDB

JWT (JSON Web Token) – Autentikasi pengguna

dotenv – Pengelolaan environment variables

🧪 Contoh Respons API
GET /
```json
{
  "message": "HydroSmart API is running 🚀"
}

POST /plants
```json
{
  "_id": "665029cdd98b18c...",
  "name": "Selada Hijau",
  "type": "Sayur",
  "description": "Tanaman sayuran daun yang cocok hidroponik",
  "createdAt": "2025-05-20T09:00:00.000Z"
}

---

🔜 Roadmap Fitur Berikutnya
 Proteksi JWT Middleware
 Validasi input dengan Joi
 Rute pengingat penyiraman (reminders)
 Swagger / Postman docs
 Unit test (Jest/Mocha)

👥 Tim Pengembang
Frontend & Backend Developers – Tim FEBE, CC25-CF144
Dokumentasi & QA – Anggota tim dokumentasi