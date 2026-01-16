# WIE Hope — Donations for Schools
**TSYP Competition Project**

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Angular](https://img.shields.io/badge/Angular-16-red.svg)](https://angular.io/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6+-green.svg)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-Educational-blue.svg)]()

A full-stack web application developed by the **IEEE ENSIT WIE Affinity Group** to connect donors with underserved schools and ensure transparent, impactful donations.

---

## 🎯 Project Goal

Enable individuals and organizations to:
- 🔍 Discover real school needs
- 💰 Donate transparently
- 📊 Track the social impact of their contributions
- 🤝 Connect with schools and their communities

---

## 🧱 Architecture Overview

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│  Angular 16     │ ◄─────► │  Node.js +      │ ◄─────► │    MongoDB      │
│  Frontend       │  HTTP   │  Express API    │         │    Database     │
│  (Port 4200)    │  + JWT  │  (Port 5000)    │         │                 │
└─────────────────┘         └─────────────────┘         └─────────────────┘
```

### Communication Flow

```
Angular Client
    ↓
  HTTP Requests (JWT Authentication)
    ↓
Express REST API
    ↓
Mongoose 
    ↓
MongoDB Database
```

---

## 🛠️ Tech Stack

### Frontend Technologies
- **Angular 16** - Progressive web framework
- **Angular Router** - Client-side navigation
- **RxJS** - Reactive programming
- **Bootstrap 5** - UI framework
- **Chart.js** - Data visualization
- **ApexCharts** - Advanced charts
- **ngx-bootstrap** - Angular Bootstrap components
- **ngx-owl-carousel-o** - Carousel component

### Backend Technologies
- **Node.js 18+** - JavaScript runtime
- **Express.js 4** - Web application framework
- **MongoDB 8** - NoSQL database
- **Mongoose** - MongoDB 
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **Multer** - File upload middleware
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment configuration
- **Nodemon** - Development auto-reload

### Database
- **MongoDB** (Local or MongoDB Atlas)
- Collections: Users, Schools, Donations, Needs, Ambassadors

---

## ✨ Key Features

### 👥 User Roles
- **Visitor** - Browse campaigns and donate
- **Donor** - Manage donations and view history
- **School Ambassador** - Manage school needs and campaigns
- **Admin** - Full system management

### 🌟 Core Functionalities

#### For Visitors
- Browse school campaigns
- View school profiles and needs
- Secure donation process
- Contact form

#### For Donors
- Personal dashboard
- Donation history with receipts
- Browse active school needs
- Profile management

#### For School Ambassadors
- School needs management
- Track donations received
- View donor information
- Campaign updates

#### For Admins
- Comprehensive dashboard
- User management (donors, ambassadors)
- School management
- Donation tracking and verification

---

## 🖼️ Screenshots

### Visitor Interface
| Screen | Description | Path |
|--------|-------------|------|
| **Home Page** | Landing page with featured campaigns | ![Home](docs/screenshots/home.png) |
| **Our Causes** | Browse all active school campaigns | ![Causes](docs/screenshots/causes.png) |
| **Donation Form** | Secure donation process | ![Donation](docs/screenshots/donation.png) |
| **About Us** | Organization information | ![About](docs/screenshots/about.png) |

### Donor Dashboard
| Screen | Description | Path |
|--------|-------------|------|
| **Dashboard** | Overview of donations and impact | ![Donor Dashboard](docs/screenshots/donor-dashboard.png) |
| **Donation History** | Complete donation records | ![History](docs/screenshots/donation-history.png) |
| **Schools Needs** | Browse needs by school | ![Needs](docs/screenshots/schools-needs.png) |

### Ambassador Interface
| Screen | Description | Path |
|--------|-------------|------|
| **Dashboard** | School statistics and overview | ![Ambassador](docs/screenshots/ambassador-dashboard.png) |
| **School Management** | Manage needs and campaigns | ![Management](docs/screenshots/school-management.png) |
| **Donors List** | View contributing donors | ![Donors](docs/screenshots/donors-list.png) |

### Admin Panel
| Screen | Description | Path |
|--------|-------------|------|
| **Admin Dashboard** | System-wide analytics | ![Admin](docs/screenshots/admin-dashboard.png) |
| **School Management** | Manage all schools | ![Schools](docs/screenshots/admin-schools.png) |
| **Donor Management** | Manage donor accounts | ![Donor Mgmt](docs/screenshots/admin-donors.png) |
| **Ambassador Management** | Manage ambassadors | ![Ambassador Mgmt](docs/screenshots/admin-ambassadors.png) |

> 💡 **Tip**: Keep screenshots at **1200-1400px** width and compress using [TinyPNG](https://tinypng.com/)

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Angular CLI** (`npm install -g @angular/cli`)
- **MongoDB** ([Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- **Git**

### Clone Repository

```bash
git clone https://github.com/your-org/wie-hope.git
cd wie-hope
```

---

## 🔧 Backend Setup (Node.js / Express)

### Installation

```bash
cd backend
npm install
```

### Configuration

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/wie-hope
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
NODE_ENV=development
```

### Database Setup

Start MongoDB locally:

```bash
# Windows
mongod

Or use **MongoDB Atlas** (cloud):
1. Create account at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create cluster
3. Get connection string
4. Update `MONGO_URI` in `.env`

### Start Backend Server

```bash
npm start
# or for development with auto-reload
npm run dev
```

✅ Server runs on: **http://localhost:5000**

### Backend Structure

```
backend/
├── config/
│   └── bd.js              # MongoDB connection
├── routes/
│   ├── AuthRouter.js      # Authentication routes
│   ├── SchoolRouter.js    # School management
│   ├── DonorRouter.js     # Donor operations
│   ├── DonationRouter.js  # Donation handling
│   ├── AdminRouter.js     # Admin operations
│   ├── AmbassadorRouter.js# Ambassador operations
│   ├── DashboardRouter.js # Analytics
│   └── ContactRouter.js   # Contact form
├── models/                # Mongoose schemas
├── middleware/            # Auth, validation, etc.
├── uploads/               # Uploaded files
├── src/
│   └── app.js            # Express app configuration
├── .env                  # Environment variables
└── package.json
```

---

## 🖥️ Frontend Setup (Angular)

### Installation

```bash
cd frontend
npm install
```

### Start Development Server

```bash
npm start
# or
ng serve
```

✅ App runs on: **http://localhost:4200**

### Build for Production

```bash
npm run build
```

### Frontend Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── admin/                 # Admin module
│   │   │   ├── components/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── gestion-donateur/
│   │   │   │   ├── gestion-ecole/
│   │   │   │   ├── gestion-responsable/
│   │   │   │   └── donations/
│   │   │   └── admin.component.ts
│   │   ├── donateur/              # Donor module
│   │   │   ├── components/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── historique-dons/
│   │   │   │   └── liste-besoins/
│   │   │   └── donateur.component.ts
│   │   ├── responsable-ecole/     # Ambassador module
│   │   │   ├── components/
│   │   │   │   ├── dashboard-responsable/
│   │   │   │   ├── gestion-liste-besoins-ecole/
│   │   │   │   └── donations/
│   │   │   └── responsable-ecole.component.ts
│   │   ├── visiteur/              # Visitor module
│   │   │   ├── components/
│   │   │   │   ├── home/
│   │   │   │   ├── about-us/
│   │   │   │   ├── causes/
│   │   │   │   ├── donation-form/
│   │   │   │   └── contact-us/
│   │   │   └── visiteur.component.ts
│   │   ├── auth/                  # Authentication
│   │   │   └── components/
│   │   │       ├── login/
│   │   │       ├── be-donor/
│   │   │       ├── be-ambassador/
│   │   │       └── forgot-password/
│   │   ├── shared/                # Shared services & components
│   │   └── app-routing.module.ts
│   ├── assets/                    # Images, fonts, etc.
│   └── environments/              # Environment configs
└── package.json
```

---

## 📡 API Routes

### Base URL: `http://localhost:5000`

### Authentication Routes (`/auth`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/register` | User registration | No |
| POST | `/auth/login` | User login | No |
| POST | `/auth/forgot-password` | Request password reset | No |
| POST | `/auth/reset-password` | Reset password | No |
| GET | `/auth/profile` | Get user profile | Yes |

### School Routes (`/school`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/school` | Get all schools | No |
| GET | `/school/:id` | Get school by ID | No |
| POST | `/school` | Create school | Admin |
| PUT | `/school/:id` | Update school | Admin/Ambassador |
| DELETE | `/school/:id` | Delete school | Admin |

### Donor Routes (`/donor`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/donor` | Get all donors | Admin |
| GET | `/donor/:id` | Get donor by ID | Admin/Self |
| PUT | `/donor/:id` | Update donor | Self |
| DELETE | `/donor/:id` | Delete donor | Admin/Self |

### Donation Routes (`/donation`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/donation` | Get all donations | Admin |
| GET | `/donation/:id` | Get donation by ID | Admin/Donor |
| POST | `/donation` | Create donation | Donor |
| GET | `/donation/donor/:donorId` | Get donor's donations | Donor/Admin |
| GET | `/donation/school/:schoolId` | Get school's donations | Ambassador/Admin |

### Dashboard Routes (`/dashboard`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/dashboard/stats` | Get platform statistics | Admin |
| GET | `/dashboard/donor/:id` | Get donor dashboard data | Donor |
| GET | `/dashboard/ambassador/:id` | Get ambassador dashboard | Ambassador |

### Contact Routes (`/contact`)
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/contact` | Submit contact form | No |
| GET | `/contact` | Get all messages | Admin |

### Static Files
| Endpoint | Description |
|----------|-------------|
| `/uploads/*` | Access uploaded files (images, documents) |

---

## 🧭 Angular Routing Structure

### Visitor Routes (`/`)
```
/                      → Home page
/about-us              → About the organization
/our-causes            → Browse all campaigns
/donation              → Make a donation
/contact-us            → Contact form
/login                 → User login
/be-donor              → Donor registration
/be-ambassador         → Ambassador registration
/forgot-password       → Password recovery
/reset-password        → Reset password
```

### Admin Routes (`/admin`)
```
/admin                              → Admin dashboard
/admin/schools                      → School management
/admin/donors                       → Donor management
/admin/donor-management             → Advanced donor management
/admin/ambassador-management        → Ambassador management
/admin/school-needs-list-management → School needs management
/admin/donation                     → Donation tracking
/admin/contact-us                   → Contact messages
/admin/profil                       → Admin profile
```

### Ambassador Routes (`/ambassador`)
```
/ambassador                  → Ambassador dashboard
/ambassador/school-management → Manage school needs
/ambassador/donors           → View donors
/ambassador/donation         → View donations received
/ambassador/profil           → Ambassador profile
```

### Donor Routes (`/donor`)
```
/donor                    → Donor dashboard
/donor/history-donations  → Donation history
/donor/schools-needs      → Browse school needs
/donor/profil             → Donor profile
```

---

## 🔐 Security

### Implemented Security Measures

- ✅ **Password Hashing**: bcrypt with salt rounds
- ✅ **JWT Authentication**: Secure token-based auth
- ✅ **Role-Based Access Control**: Admin, Donor, Ambassador, Visitor
- ✅ **CORS Configuration**: Restricted to frontend origin
- ✅ **Input Validation**: Request validation middleware
- ✅ **Secure File Uploads**: Multer with file type restrictions
- ✅ **Environment Variables**: Sensitive data in `.env`

### CORS Configuration

```javascript
app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));
```
---
## 📦 Project Structure

```
wie-hope/
├── backend/
│   ├── config/
│   │   └── bd.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── src/
│   │   └── app.js
│   ├── .env
│   ├── .gitignore
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   └── index.html
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
│
├── screenshots/│
├── .gitignore
└── README.md
```
---

## 🚀 Deployment

### Backend Deployment (Render/Railway/Heroku)

1. Push to GitHub
2. Connect repository
3. Set environment variables
4. Deploy

### Frontend Deployment (Vercel/Netlify)

```bash
ng build --configuration production
```
---

## 🤝 Contributors

- **IEEE ENSIT WIE Affinity Group** (TSYP Competition Team 2024)

---

## 📄 License

This project is for **educational and competition purposes**.

---
<div align="center">
**✨ Empowering education through transparent giving ✨**
Made with ❤️ by IEEE ENSIT WIE
</div>