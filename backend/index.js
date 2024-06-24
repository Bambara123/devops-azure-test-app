const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json()); // Middleware to parse JSON bodies

// Root route
app.get("/", (req, res) => {
  console.log("request got");
  res.send("Welcome to the Movies Backend API!");
});

// Movies route
app.get("/movies", (req, res) => {
  console.log("Movies request received");
  const movies = [
    { id: 1, title: "The Shawshank Redemption", year: 1994 },
    { id: 2, title: "The Godfather", year: 1972 },
    { id: 3, title: "The Dark Knight", year: 2008 },
    { id: 4, title: "12 Angry Men", year: 1957 },
    { id: 5, title: "Schindler's List", year: 1993 },
  ];
  res.json(movies);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
