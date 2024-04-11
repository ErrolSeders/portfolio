const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

var router = express.Router();

router.get("/", (er, res) => {
  var options = { root: __dirname };
  res.sendFile("public/index.html", options, (er) => {
    if (er) {
      res.writeHead(500);
      res.end();
    }
  });
});

router.get("/projects", (er, res) => {
  var options = { root: __dirname };
  res.sendFile("public/projects.html", options, (er) => {
    if (er) {
      res.writeHead(500);
      res.end();
    }
  });
});

router.get("/fr", (er, res) => {
  var options = { root: __dirname };
  res.sendFile("public/fr.html", options, (er) => {
    if (er) {
      res.writeHead(500);
      res.end();
    }
  });
});

router.get("/gallery", (er, res) => {
  var options = { root: __dirname };
  res.sendFile("public/gallery.html", options, (er) => {
    if (er) {
      res.writeHead(500);
      res.end();
    }
  });
});

router.get("/contact", (er, res) => {
  var options = { root: __dirname };
  res.sendFile("public/contact.html", options, (er) => {
    if (er) {
      res.writeHead(500);
      res.end();
    }
  });
});

router.get("/fractalanimation", (er, res) => {
  var options = { root: __dirname };
  res.sendFile("public/fractalanimation.html", options, (er) => {
    if (er) {
      res.writeHead(500);
      res.end();
    }
  });
});

app.use("/", router);

app.listen(port, () => console.log(`App listening on port ${port}!`));
