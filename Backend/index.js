const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/User");

const app = express();

// Enable All CORS Requests
app.use(cors());

app.use(express.json());

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "User not found" });
    }
  } else {
    res.send({ result: "Invalid request" });
  }
});

console.log("Server Running on port 8080");

app.listen(8080);
