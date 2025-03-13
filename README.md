# Travel Collections API & Frontend

A Next.js application with a backend API that allows users to create and manage travel collections, each containing multiple destinations.

## 🚀 Setup Instructions

### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/travel-collections.git
cd travel-collections
```
### 2️⃣ Install dependencies
```sh
npm install
```
### 3️⃣ Start the development server
```sh
npm run dev
```
The server will run on http://localhost:3000/


## 🔍 Overview of Implementation
This project consists of:

1. Frontend (Next.js + Tailwind CSS)

* Dynamic pages for listing and viewing collections
* Form for creating new collections with destinations
* Uses fetch() to interact with the backend API

2. Backend API (Next.js API Routes)

* GET /api/collections → List all collections
* GET /api/collections/:id → Retrieve a specific collection
* POST /api/collections → Create a new collection
* DELETE /api/collections/:id → Delete a collection
* Stores collections in-memory (lib/data.ts)

## 📐 Assumptions & Design Decisions
- *In-memory storage: The collections are stored in lib/data.ts. No database is used.
- Unique IDs: crypto.randomUUID() is used for generating unique IDs.
- Next.js App Router: Uses Next.js' latest features for API and dynamic routing.
- Data Fetching: API calls are made to /api/collections instead of reading directly from lib/data.ts to ensure dynamic updates.


## 🚧 Challenges & Solutions

Newly Added Collections Were Returning 404
- Problem: Collections added via POST were not found when navigating to their detail pages.
- Solution: Changed the collection page to fetch data from /api/collections/:id instead of relying on the static in-memory store.

## 🚀 Future Improvements

1️⃣ Use a Database
2️⃣ Add User Authentication
3️⃣ Improve UI & UX
4️⃣ Edit Collections
