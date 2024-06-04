# Recrutary

## About the Project

Recrutary is a recruitment platform that allows you to manage users and their information. This project uses Next.js with TypeScript for the frontend and backend, integration with Firebase for authentication, and MongoDB for data storage.

## Project Structure

### Frontend

The frontend code is primarily located in the `/src/app` folder. Here you will find:

- **Pages**: Next.js pages, including `dashboard`, `login`, and the home page.
- **Components**: Reusable components such as forms, navbar, and protected components.
- **Context**: Authentication context to manage user state.
- **Locales**: Translation files for multi-language support.

### Backend

The backend code is distributed in the following folders:

- **/pages/api**: API endpoints handling backend logic.
- **Middleware**: Middlewares for request processing.
- **Repositories**: Classes and interfaces for interacting with the MongoDB database.
- **Modules**: Model definitions and DTOs used in the project.

## Setup and Initialization

### Clone the Repository

```
git clone https://github.com/Recrutary/nextjs-application.git
cd nextjs-application
```

### Install Dependencies

```
npm install
```

### Environment Configuration

Copy the `.env.local-dist` file to `.env.local` and fill in the environment variables as needed:

```
cp .env.local-dist .env.local
```

#### Environment Variables

```
MONGODB_URI=mongodb://localhost:27017/recrutary
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=recrutary-frb.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=recrutary-frb
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=recrutary-frb.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=874710423193
NEXT_PUBLIC_FIREBASE_APP_ID=1:874710423193:web:c720baa0f1f55d6dd2ca08
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-7B42KG6CTW
FIREBASE_PROJECT_ID=recrutary-frb
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-tw58c@recrutary-frb.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="ask-a-leader-about-it"
```

## Frontend Development

For frontend development, focus on the `/src/app` directory. This includes creating and managing components, pages, and handling the UI.

### Key Areas:

- **Components**: Create and manage reusable UI components in the `/components` directory.
- **Pages**: Add and manage new pages within the `/[locale]` directory.
- **Context**: Manage authentication state within the `auth.context.tsx`.
- **Localization**: Add new translations in the `/locales` directory.

## Backend Development

For backend development, focus on the following areas:

### Key Areas:

- **API**: Implement and manage API routes in the `/pages/api` directory.
- **Middleware**: Manage request processing in the `/middleware` directory.
- **Repositories**: Handle data operations in the `/repositories` directory.
- **Modules**: Define and manage models and DTOs in the `/modules` directory.

By following these guidelines, you can effectively contribute to both frontend and backend development in the Recrutary project.
