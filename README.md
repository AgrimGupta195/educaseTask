# EduCase Task

## Project Overview
EduCase is a Node.js-based application built with Express.js and MongoDB to manage school data. The API allows users to add schools and retrieve a list of schools sorted by their proximity to a given location. It also supports automatic user location detection based on IP.

## Features
- Add a new school with its name, address, latitude, and longitude.
- Retrieve a list of schools sorted by distance from a given location.
- Automatically determine user location via IP if latitude and longitude are not provided.
- Uses MongoDB to store school information.

## Technologies Used
- **Node.js** - Backend runtime
- **Express.js** - Web framework for API handling
- **MongoDB** - Database for storing school information
- **geoip-lite** - IP-based geolocation

## Project Structure
```
EduCase/
│── models/
│   ├── schoolModel.js
│── controllers/
│   ├── schoolController.js
│── routes/
│   ├── schoolRoutes.js
│── config/
│   ├── database.js
│── app.js
│── README.md
```

## API Endpoints
### Base URL
```
URL/api
```

### 1. Add a School
**Endpoint:** `POST /addSchool`

**Description:** Adds a new school to the database.

**Request Body:**
```json
{
  "name": "School Name",
  "address": "School Address",
  "latitude": 28.7041,
  "longitude": 77.1025
}
```

**Response:**
```json
{
  "message": "School added successfully!"
}
```

### 2. List Schools
**Endpoint:** `GET /listSchools`

**Description:** Lists all schools sorted by distance from the provided latitude and longitude.

**Query Parameters:**
- `latitude` (optional)
- `longitude` (optional)

**Response:**
```json
[
  {
    "_id": "schoolId",
    "name": "School Name",
    "address": "School Address",
    "latitude": 28.7041,
    "longitude": 77.1025,
    "distance": 5.2
  }
]
```