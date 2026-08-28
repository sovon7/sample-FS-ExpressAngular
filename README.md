# Teacher Management

A full-stack teacher management application built with Angular, Express, and MongoDB. It supports adding, viewing, editing, and deleting teacher records.

## Features

- Add teacher records to MongoDB
- Display saved teachers in a table
- Edit existing teacher records
- Delete teacher records

## Tech Stack

- Angular 18
- Express 5
- MongoDB with Mongoose
- Bootstrap 5

## Project Structure

```text
Backend/                  Express API and MongoDB integration
Frontend/teacher-data/    Angular application
```

## Prerequisites

- Node.js 18 or newer
- npm
- MongoDB running locally or a MongoDB Atlas connection string

## Backend Setup

From the repository root:

```bash
cd Backend
npm install
```

Create a `Backend/.env` file:

```env
DBURL=mongodb://127.0.0.1:27017/teacher-data
PORT=3000
```

Start the API:

```bash
node index.js
```

The API runs at `http://localhost:3000`.

## Frontend Setup

Open a second terminal from the repository root:

```bash
cd Frontend/teacher-data
npm install
npm start
```

Open `http://localhost:4200` in a browser.

The frontend expects the backend at `http://localhost:3000/api/v1`.

## API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/v1/add-teacher` | Add a teacher |
| `GET` | `/api/v1/list-teacher` | Get all teachers |
| `PUT` | `/api/v1/update-teacher/:id` | Update a teacher |
| `DELETE` | `/api/v1/delete-teacher/:id` | Delete a teacher |

Example request body for adding or updating a teacher:

```json
{
  "tName": "Alex Morgan",
  "degree": "M.Ed.",
  "subject": "Mathematics",
  "age": 35,
  "email": "alex.morgan@example.com"
}
```

## Build

```bash
cd Frontend/teacher-data
npm run build
```

Build output is written to `Frontend/teacher-data/dist/`.

## Tests

```bash
cd Frontend/teacher-data
npm test
```

The backend currently has no automated test script.
