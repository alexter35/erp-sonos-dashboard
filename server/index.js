const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Config
const zones = require('./config/zones.json');
const auth = require('./config/auth.json');
const playlists = require('./config/playlists.json');

// Exemple API
app.get('/api/state', (req, res) => {
  res.json({
    principale: {
      title: "Mock Title",
      artist: "Mock Artist",
      albumArt: "https://code.hauff.fr/logo/alexandrehauff01.png",
      duration: 200,
      position: 80
    },
    petite: {
      title: "Another Title",
      artist: "Another Artist",
      albumArt: "https://code.hauff.fr/logo/alexandrehauff01.png",
      duration: 180,
      position: 45
    },
    terrasse: {
      title: "Third Title",
      artist: "Third Artist",
      albumArt: "https://code.hauff.fr/logo/alexandrehauff01.png",
      duration: 240,
      position: 120
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});