// database/seed.js
const { sequelize, Track } = require("./setup");
// seed the database with sample tracks
async function seedDatabase() {
// connect to the database
  await sequelize.sync();
// create sample tracks
  await Track.bulkCreate([
    {
      songTitle: "Blinding Lights",
      artistName: "The Weeknd",
      albumName: "After Hours",
      genre: "Pop",
      duration: 200,
      releaseYear: 2020
    },
    {
      songTitle: "Shape of You",
      artistName: "Ed Sheeran",
      albumName: "Divide",
      genre: "Pop",
      duration: 240,
      releaseYear: 2017
    },
    {
    songTitle: "Bohemian Rhapsody",
    artistName: "Queen",
    albumName: "A Night at the Opera",
    genre: "Rock",
    duration: 355,
    releaseYear: 1975
    },
    {
      songTitle: "HUMBLE",
      artistName: "Kendrick Lamar",
      albumName: "DAMN",
      genre: "Hip Hop",
      duration: 177,
      releaseYear: 2017
    }
  ]);
// log success message
  console.log("Database seeded");
// close the database connection
  await sequelize.close();
}
// run the seed function
seedDatabase();