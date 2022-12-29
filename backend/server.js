const express = require("express");
const cors = require("cors");
require('dotenv').config()
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("./models");
const Role = db.role;


db.mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


// parse requests of content-type - application/x-www-form-urlencoded

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "recipes-app" });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
