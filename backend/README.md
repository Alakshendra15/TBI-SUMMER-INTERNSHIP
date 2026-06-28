# StaySense AI Backend

Backend REST API for the StaySense AI – Smart Homestay Booking & Review Management Platform.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## Project Structure

```
backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   └── server.js
│
├── .env
├── .env.example
├── package.json
└── README.md
```

---

## Installation

Clone the repository and navigate to the backend folder.

```bash
cd backend
npm install
```

---

## Environment Variables

Create a `.env` file in the backend directory.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

---

## Run Backend Locally

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server URL:

```
http://localhost:5000
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/bookings` | Get all bookings |
| GET | `/api/bookings/:id` | Get booking by ID |
| POST | `/api/bookings` | Create booking |
| PUT | `/api/bookings/:id` | Update booking |
| PATCH | `/api/bookings/:id/status` | Update booking status |
| DELETE | `/api/bookings/:id` | Delete booking |
| GET | `/api/bookings/search?guest=name` | Search bookings by guest name |

---

## Response Format

```json
{
  "success": true,
  "message": "Request successful",
  "data": {}
}
```

---

## Features

- RESTful API
- MongoDB Atlas Integration
- CRUD Operations
- Booking Search
- JSON Responses
- Centralized Error Handling
- Environment Variable Support