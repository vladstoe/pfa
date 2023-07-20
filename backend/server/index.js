const express = require("express");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3001;
const cors = require("cors");

const app = express();
app.use(cors()); // Allow all origins (*). You can specify specific origins if needed.


// Middleware to parse JSON data from incoming requests
app.use(express.json());

// Route to read data from the file and send categories as a response
app.get("/api/categories", (req, res) => {
  const filePath = path.join(__dirname, "data.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading data JSON file:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData.categories);
    } catch (parseError) {
      console.error("Error parsing data JSON:", parseError);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

// Route to read data from the file and send products as a response
app.get("/api/products", (req, res) => {
  const filePath = path.join(__dirname, "data.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading data JSON file:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData.products);
    } catch (parseError) {
      console.error("Error parsing data JSON:", parseError);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
