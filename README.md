# Nishant Sapkal Portfolio

Deployable MERN portfolio with:

- React + Tailwind frontend
- Express + MongoDB backend
- Contact form storage
- Optional email notifications through SMTP
- Protected admin inbox at `/admin`
- Replace-in-place resume download at `/resume.pdf`

## 1. Local Setup

Requirements:

- Node.js 18 or newer
- npm
- MongoDB local database or MongoDB Atlas

Install dependencies:

```bash
npm install
cd frontend && npm install
cd ../backend-node && npm install
```

Create backend env:

```bash
cd backend-node
copy .env.example .env
```

Edit `backend-node/.env`:

```env
PORT=8001
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio
CORS_ORIGINS=http://localhost:3000
ADMIN_TOKEN=use-a-long-private-password
```

Create frontend env:

```bash
cd ../frontend
copy .env.example .env
```

Edit `frontend/.env`:

```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

Run locally in two terminals:

```bash
cd backend-node
npm start
```

```bash
cd frontend
npm start
```

Open `http://localhost:3000`.

## 2. Contact Form And Email

The contact form always saves submissions to MongoDB.

To also receive email notifications, add SMTP values to `backend-node/.env` locally and to your backend host in production:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-google-app-password
CONTACT_TO_EMAIL=your-email@gmail.com
CONTACT_FROM_EMAIL=Portfolio <your-email@gmail.com>
```

For Gmail, create an App Password from your Google account security settings. Do not use your normal Gmail password.

## 3. Admin Inbox

Admin URL:

```text
/admin
```

Use the value of `ADMIN_TOKEN` as the password.

Important: `GET /api/contact` is protected by the backend. Without the correct `x-admin-token` header, deployed visitors cannot read contact messages.

## 4. Resume Replacement

The site uses:

```text
frontend/public/resume.pdf
```

To update the resume later:

1. Export the new resume as a PDF.
2. Rename it exactly to `resume.pdf`.
3. Replace `frontend/public/resume.pdf`.
4. Redeploy the frontend.

No code change is needed.

## 5. Production Build Check

Before deploying:

```bash
cd frontend
npm run build
```

The generated folder is:

```text
frontend/build
```

## 6. Deploy Backend

Recommended hosts: Render, Railway, Fly.io, or any Node host.

For Render:

1. Create a MongoDB Atlas cluster.
2. Copy the Atlas connection string.
3. Create a new Render Web Service from this repository.
4. Use the repository root as the root directory.
5. Build command:

```bash
npm install
```

6. Start command:

```bash
npm start
```

7. Add environment variables:

```env
MONGO_URL=your-mongodb-atlas-uri
DB_NAME=portfolio
ADMIN_TOKEN=your-long-private-admin-password
CORS_ORIGINS=https://your-frontend-domain.vercel.app
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO_EMAIL=your-email@gmail.com
CONTACT_FROM_EMAIL=Portfolio <your-email@gmail.com>
```

8. Deploy and confirm:

```text
https://your-backend-domain.onrender.com/api/
```

Expected response:

```json
{ "message": "Portfolio API up" }
```

## 7. Deploy Frontend

Recommended host: Vercel.

1. Create a new Vercel project from this repository.
2. Framework preset: Create React App.
3. Root directory: `frontend`.
4. Build command:

```bash
npm run build
```

5. Output directory:

```text
build
```

6. Add frontend environment variable:

```env
REACT_APP_BACKEND_URL=https://your-backend-domain.onrender.com
```

7. Deploy.

After frontend deployment, update the backend `CORS_ORIGINS` value to the final Vercel domain and redeploy/restart the backend.

## 8. Final Verification Checklist

- Visit the homepage on desktop and mobile.
- Click all nav links.
- Click Resume and confirm `resume.pdf` opens/downloads.
- Submit the contact form.
- Confirm the message appears in MongoDB.
- If SMTP is configured, confirm an email notification arrives.
- Visit `/admin`.
- Log in using `ADMIN_TOKEN`.
- Confirm contact messages load.
- Click Reply and confirm your mail app opens.
- Run `npm run build` in `frontend` before every production deployment.

## Key Files

- Portfolio content: `frontend/src/data.js`
- Resume file: `frontend/public/resume.pdf`
- Contact form UI: `frontend/src/components/Contact.jsx`
- Admin inbox UI: `frontend/src/pages/Admin.jsx`
- Contact API: `backend-node/routes/contact.js`
- Email sender: `backend-node/lib/mailer.js`
- Backend env sample: `backend-node/.env.example`
- Frontend env sample: `frontend/.env.example`
