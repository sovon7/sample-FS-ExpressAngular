# Teacher Management

A full-stack teacher management application built with Angular, Express, and MongoDB. The application supports adding, viewing, editing, and deleting teacher records.

## Features

- Add teacher records to MongoDB
- Display saved teachers in a table
- Edit existing teacher records
- Delete teacher records
- Angular and Express applications separated into `Frontend` and `Backend`

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
# Teacher Management Frontend

This folder contains the Angular frontend for the Teacher Management application.

For complete project setup instructions, backend configuration, API endpoints, and frontend commands, see the repository [README.md](../../README.md).
```bash
