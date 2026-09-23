# Still & Wild Library

Still & Wild Library is a full-stack digital story card reader for educational children's content.

The project is based on my own Story Card concept and was built as a full-stack application using React, TypeScript and Express.

## Live Demo

[View the live application](https://still-wild-library.onrender.com/)

## Features

- Browse educational story card collections
- Open individual collections and story cards
- Interactive 3D card flip
- Previous and next card navigation
- Keyboard navigation with the left and right arrow keys
- Loading and error states
- Responsive layout
- REST API for collections and story card data
- Reusable collection and story card structure

## Tech Stack

### Frontend

- React
- TypeScript
- React Router
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express
- TypeScript
- REST API

### Development

- Git
- GitHub
- ESLint

## How It Works

The application is split into a React frontend and an Express backend.

The frontend requests collection data from the Express API using `fetch()`.

The API returns JSON data containing collections and their story cards.

Example endpoints:

```text
GET /api/health
GET /api/collections
GET /api/collections/:id
```

The frontend then uses the returned data to render the library, collection pages and story card reader.

The basic data flow looks like this:

```text
React frontend
      ↓
    fetch()
      ↓
Express REST API
      ↓
     JSON
      ↓
React state
      ↓
User interface
```

## Story Card Reader

Each collection contains multiple story cards.

A story card contains:

- title
- subtitle
- illustration
- Story Time text
- reflection questions
- mini facts

The reader includes an animated 3D flip between the front and back of the card.

Users can also move between cards using buttons or the left and right arrow keys.

## TypeScript

TypeScript interfaces are used to define the structure of collections and story cards.

For example:

```ts
interface StoryCard {
  id: number;
  title: string;
  subtitle: string;
  frontImage: string;
  storyTime: string;
  wonderQuestions: string[];
  miniFacts: string[];
}

interface Collection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  cards: StoryCard[];
}
```

This provides type safety and helps catch invalid or incomplete data during development.

## Project Structure

```text
still-wild-library/
│
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
│
├── server/
│   ├── src/
│   │   ├── data/
│   │   │   └── collections.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
├── package.json
├── vite.config.ts
└── README.md
```

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/Vikinghelmet95/still-wild-library.git
cd still-wild-library
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

The frontend runs locally at:

```text
http://localhost:5173
```

### 4. Install backend dependencies

Open another terminal:

```bash
cd server
npm install
```

### 5. Start the backend

```bash
npm run dev
```

The backend runs locally at:

```text
http://localhost:3001
```

You can test the API directly in the browser:

```text
http://localhost:3001/api/health
http://localhost:3001/api/collections
```

## Current Collections

The application currently includes two complete educational Story Card collections:

- A Quiet Journey Through the Solar System
- Autumn Animals

Each collection contains nine interactive story cards and uses the same reusable components, routes and API structure.

## What I Learned

Through this project I practiced and improved my understanding of:

- structuring a React application
- reusable React components
- React state and effects
- client-side routing with React Router
- dynamic URL parameters
- asynchronous API requests with `fetch`
- loading and error states
- TypeScript interfaces and type safety
- separating frontend and backend responsibilities
- building REST API endpoints with Express
- Git version control and GitHub workflow
- responsive styling with Tailwind CSS

## Future Improvements

Possible future improvements include:

- PostgreSQL database
- Prisma ORM
- user accounts
- favorites
- search and filtering
- saved reading progress
- automated frontend and backend testing
- additional story card collections
- improved accessibility

## About the Project

Still & Wild Library combines my background in early childhood education with my interest in web development.

The educational content is based on my own children's learning resources, while the application itself was built as a full-stack development project.

My goal was to build a small but complete application where I could work with both the user interface and the data flow between a React frontend and an Express API.