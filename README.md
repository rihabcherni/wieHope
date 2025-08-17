# WIE Hope — Donations for Schools (TSYP Competition)

A web application by the **IEEE ENSIT WIE Affinity Group** to connect donors with underserved schools. Built with **Angular** (frontend) and **MongoDB** (database), with a Node/Express API.

> **Goal:** Make it easy to discover needs, donate transparently, and track impact for students in under‑resourced schools.

---

## Key Features

* **Campaigns for Schools**: Create and browse campaigns (supplies, uniforms, repairs, scholarship kits, etc.).
* **Transparent Donations**: Real‑time progress bars, public totals, and automated receipts.
* **School Profiles**: Pages with verified needs, photos, and updates from staff/volunteers.
* **Donor Accounts**: Simple signup/login, donation history, and downloadable receipts.
* **Admin Dashboard**: Manage schools, campaigns, and verify payouts.
* **Notifications**: Email/Slack/Web push (pluggable) for milestones and success stories.
* **Accessibility & i18n**: Semantic UI, keyboard navigation; ready for **EN/FR/AR** translations.
* **Mobile‑friendly**: Responsive layout for phones and tablets.

---

## Architecture

```
frontend/   → Angular 16+ SPA (Angular CLI)
backend/    → Node.js + Express (TypeScript recommended)
db/         → MongoDB (local Docker or managed Atlas)
```

High‑level flow:

1. Client (Angular) ↔ REST API (Express) ↔ MongoDB.
2. Auth with JWT (access/refresh) + role‑based permissions (donor, school, admin).
3. Optional payment gateway (Stripe/PayPal) via backend routes (webhooks supported).

---

## Screenshots

Add screenshots to the repo (or `docs/`) and reference them here:

| Screen            | Path                                    |
| ----------------- | --------------------------------------- |
| Home / Landing    | `docs/screenshots/home.png`             |
| Explore Campaigns | `docs/screenshots/campaigns.png`        |
| Campaign Details  | `docs/screenshots/campaign-details.png` |
| Donate Flow       | `docs/screenshots/donate.png`           |
| Admin Dashboard   | `docs/screenshots/admin.png`            |

> Tips: keep images \~1400px wide; name files kebab‑case; compress with TinyPNG or Squoosh.

---

## Tech Stack

**Frontend**

* Angular 16+ (Angular CLI)
* RxJS, Angular Router, HttpClient
* UI: Bootstrap/Tailwind (pick one) + Font Awesome

**Backend**

* Node.js 18+, Express 4+
* Mongoose (MongoDB ODM)
* JSON Web Tokens (JWT)
* Nodemailer (emails) / Slack webhooks (optional)

**Database**

* MongoDB 6+ (local Docker or MongoDB Atlas)

**Tooling**

* TypeScript, ESLint, Prettier, Jest (or Karma/Jasmine) for tests

---

## Getting Started

### Prerequisites

* **Node.js** 18+ and **npm** or **pnpm**
* **Angular CLI**: `npm i -g @angular/cli`
* **MongoDB** running locally or URI from MongoDB Atlas
* (Optional) Docker & Docker Compose

### Local Setup

```bash
# 1) Clone
git clone https://github.com/<your-org>/wie-hope.git
cd wie-hope

# 2) Frontend
cd frontend
npm install
# run dev server
npm start           # or: ng serve -o

# 3) Backend (new terminal)
cd ../backend
npm install
npm run dev         # nodemon ts-node dev server
```

The Angular app defaults to `http://localhost:4200/` and the API to `http://localhost:3000/` (configurable).

### Environment Variables

Create `.env` files in `backend/` (and optionally `frontend/` for build‑time configs).

**backend/.env.example**

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/wiehope
JWT_SECRET=change-me
JWT_EXPIRES_IN=15m
REFRESH_SECRET=change-me-too
REFRESH_EXPIRES_IN=7d
# Optional integrations
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SLACK_WEBHOOK_URL=
# Payments (optional)
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
FRONTEND_URL=http://localhost:4200
```

**frontend/src/environments/environment.ts** (example)

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
};
```

### Seed Data (optional)

```bash
# from backend/
npm run seed  # inserts demo schools, campaigns, and an admin user
```