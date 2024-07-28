const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

// Use CORS middleware
app.use(cors());

app.get("/api/check-username", (req, res) => {
  const { username } = req.query;

  const mockUsernames = ["Ahmad", "Praneetha", "Aadya", "Katherine"]

  if (!username || typeof username !== "string") {
    return res.status(400).json({ error: "Invalid username" });
  }

  console.log("username: ", username);
  

  // Simulate checking username availability
  const isAvailable = !mockUsernames.includes(username);

  console.log("isAvailable: ", isAvailable);
  

  if (!isAvailable) {
    return res.status(200).json({ available: false });
  }

  return res.status(200).json({ available: true });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
