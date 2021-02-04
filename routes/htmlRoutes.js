const path = require("path");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join("../public/index.html"));
  });

  //   app.get("/stats", (req, res) => {
  //     res.sendFile(path.join("../public/stats.html"));
  //   });

  //   app.get("/exercise", (req, res) => {
  //     res.sendFile(path.join("../public/exercise.html"));
  //   });
};
