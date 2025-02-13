# eBuddy Test - Monorepo

This repository is a monorepo using Turborepo that contains both the **frontend** (Next.js) and **backend** (Node.js/Express) applications. It includes Firebase authentication, Firestore collections, and a shared package for user data types.

## Features
- **Frontend**: Next.js 14+ with React MUI, Redux, and Firebase Authentication.
- **Backend**: Express.js with Firebase Functions and Firestore as the database.
- **Shared Package**: `user.ts` is used across both frontend and backend for consistent user data types.
- **API Documentation**: Backend routes for user-related operations.

---

## Prerequisites
Before setting up the project, ensure you have:
- **Node.js** (>= 18)
- **npm** (or npm/yarn, but npm is recommended for monorepos)
- **Firebase CLI** (for running Firebase functions locally)
- **Google Firebase Project** (for authentication and Firestore database)

## Getting Started
### 1. Clone the Repository
```sh
git clone https://github.com/satriyoaji/ebuddy-test.git
cd ebuddy-test
```

### 2. Install Dependencies
```sh
npm install  # or npm install / yarn install
```

### 3. Set Up Firebase
#### a) Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Enable **Email/Password Authentication** in Authentication settings.
4. Enable Firestore Database and create a collection named **users**.

#### b) Configure Firebase Locally
1. Copy the `.env.example` file and rename it to `.env.local` inside `apps/frontend` and `apps/backend`.
2. Update the values in `.env.local` with your Firebase credentials.

Example `.env.local` for **Frontend** (`apps/frontend/.env.local`):
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

Example `.env` for **Backend** (`apps/backend/.env`):
```env
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY="your_private_key"
FIREBASE_CLIENT_EMAIL=your_client_email
JWT_SECRET=your_jwt_secret
PORT=3000
```

### 4. Run Firebase Emulator (for Local Development)
```sh
cd apps/backend
firebase emulators:start --only functions,firestore,auth
```

### 5. Run Backend & Frontend
In the root directory, start both services using Turborepo:
```sh
npm turbo run dev
```
Alternatively, you can start each service individually:

#### Start Backend
```sh
cd apps/backend
npm run dev
```
#### Start Frontend
```sh
cd apps/frontend
npm run dev
```

The frontend will be available at `http://localhost:3000` and the backend will run on `http://localhost:5000`.

---

## Shared `user.ts` Package
The `user.ts` package is shared between frontend and backend to maintain a consistent user data structure. It is located in `packages/user/src/user.ts`.

### Example `user.ts`:
```typescript
export interface User {
  uid: string;
  email: string;
  name: string;
  age: number;
  photoURL?: string;
}
```
This package ensures that both frontend and backend use the same type definition for users, reducing inconsistencies in data handling.

To use the package in your services:
```typescript
import { User } from "@repo/shared";
```

---

## API Documentation
The backend API routes are defined in `apps/backend/routes/`. Below is the API documentation for the available endpoints:

### **1. User Authentication**
#### **Authentication a User**
- **Endpoint:** `POST /api/auth/login`
- **Description:** Registers a new user with email and password.
- **Request Body:**
  ```json
  {
    "userId": "63a0607ab2281fc5e0a24d49"
  }
  ```
- **Response:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NSIsImlhdCI6MTczOTMyNzcxMiwiZXhwIjoxNzM5MzMxMzEyfQ.6I68A60oYjZCUUGlmugGkIuyn3-7vIEE7GPoq_1svOU"
  }
  ```

### **2. User Profile**
#### **Get User Profile**
- **Endpoint:** `GET /api/users/fetch-user-data/:userId`
- **Description:** Returns the authenticated user’s profile.
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```
- **Response:**
  ```json
  {
    "email": "ryoaji@gmail.com",
    "displayName": "Ryo",
    "age": 29,
    "photoURL": "https://media.licdn.com/dms/image/v2/D5603AQGs34UoT5jK1Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727968547149?e=1744848000&v=beta&t=XHPM0wKHbsd6ugpWLeC9VIdsaKD_IMN0if8qPjWZ354"
  }
  ```

#### **Update User Profile**
- **Endpoint:** `PUT /api/users/update-user-data/:userId`
- **Description:** Updates user profile details.
- **Headers:**
  ```
  Authorization: Bearer <token>
  ```
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "photoURL": "https://example.com/photo.jpg"
  }
  ```
- **Response:**
  ```json
  {
    "uid": "user-uid",
    "email": "user@example.com",
    "name": "John Doe",
    "photoURL": "https://example.com/photo.jpg"
  }
  ```

---

## Deployment
### Deploy Backend (Firebase Functions)
1. Ensure Firebase CLI is authenticated:
   ```sh
   firebase login
   ```
2. Deploy functions:
   ```sh
   firebase deploy --only functions
   ```

### Deploy Frontend
The frontend can be deployed to Vercel, Netlify, or Firebase Hosting. To build the project:
```sh
cd apps/frontend
npm run build
```
Then deploy using your preferred platform.

---

## Contributing
Feel free to open issues and PRs for improvements.

---

## License
This project is open-source under the MIT License.

