const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const carRoutes = require("./app/routes/CarRoute");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", carRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
