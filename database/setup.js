// database/setup.js
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

// initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "music_library.db"
});

// define the track model
const Track = sequelize.define("Track", {
  trackId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  songTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artistName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  albumName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER
  },
  releaseYear: {
    type: DataTypes.INTEGER
  }
});

// create database
async function setupDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Database connected");

    await sequelize.sync();
    console.log("Tables created");

    await sequelize.close();
  } catch (error) {
    console.error("Error setting up database:", error);
  }
}
// run the setup function

// setupDatabase();

module.exports = { sequelize, Track };