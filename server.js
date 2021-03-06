const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || `mongodb://${process.env.HOST}/Workout`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
