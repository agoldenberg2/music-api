// server.js
const express = require("express");
const { sequelize, Track } = require("./database/setup");
// test database connection
sequelize.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Unable to connect to the database:", err));
// initialize Express app
const app = express();
app.use(express.json());
// set the port
const PORT = 3000;

// GET all tracks
app.get("/api/tracks", async (req, res) => {
  try {
    const tracks = await Track.findAll();
    res.status(200).json(tracks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve tracks" });
  }
});

// GET track by ID
app.get("/api/tracks/:id", async (req, res) => {
  try {
    const track = await Track.findByPk(req.params.id);

    if (!track) {
      return res.status(404).json({ error: "Track not found" });
    }
// return the track data
    res.json(track);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving track" });
  }
});

// CREATE new track
app.post("/api/tracks", async (req, res) => {

  const { songTitle, artistName, albumName, genre } = req.body;

  if (!songTitle || !artistName || !albumName || !genre) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const newTrack = await Track.create(req.body);
    res.status(201).json(newTrack);
  } catch (error) {
    res.status(500).json({ error: "Error creating track" });
  }
});

//  UPDATE track
app.put("/api/tracks/:id", async (req, res) => {
  try {
    const updated = await Track.update(req.body, {
      where: { trackId: req.params.id }
    });

    if (updated[0] === 0) {
      return res.status(404).json({ error: "Track not found" });
    }

    res.json({ message: "Track updated" });

  } catch (error) {
    res.status(500).json({ error: "Error updating track" });
  }
});

// DELETE track
app.delete("/api/tracks/:id", async (req, res) => {
  try {
    const deleted = await Track.destroy({
      where: { trackId: req.params.id }
    });

    if (!deleted) {
      return res.status(404).json({ error: "Track not found" });
    }

    res.json({ message: "Track deleted" });

  } catch (error) {
    res.status(500).json({ error: "Error deleting track" });
  }
});
// start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});