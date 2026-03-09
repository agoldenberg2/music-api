# Music API

This project is a RESTful API for managing a music library. 

---

## Technologies Used

- Node.js
- Express.js
- Sequelize ORM
- SQLite
- dotenv

---

## Installation

Clone the repository:

git clone https://github.com/agoldenberg2/music-api 

Navigate into the project folder:

cd music-api

Install dependencies:

npm install

Install required packages:

npm install sequelize sqlite3 dotenv

---

## Database Setup

Create the database and tables:

node database/setup.js

Seed the database with sample tracks:

node database/seed.js

---

## Running the Server

Start the server with:

node server.js

The server will run on:

http://localhost:3000

---

## API Endpoints

### Get All Tracks
GET /api/tracks

Returns all tracks in the database.

---

### Get Track by ID
GET /api/tracks/:id

Returns a single track.

---

### Create a Track
POST /api/tracks

Creates a new track.

Example JSON body:

{
 "songTitle": "Bad Guy",
 "artistName": "Billie Eilish",
 "albumName": "When We All Fall Asleep",
 "genre": "Pop",
 "duration": 194,
 "releaseYear": 2019
}

---

### Update a Track
PUT /api/tracks/:id

Updates an existing track.

---

### Delete a Track
DELETE /api/tracks/:id

Deletes a track from the database.

---

## Environment Variables

This project uses a `.env` file to store configuration settings.

Example:

PORT=3000
DB_NAME=music_library

---

