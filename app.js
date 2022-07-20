const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    { title: "emilie find stars", snippet: "lorem lorem kikiki" },
    { title: "mario find stars", snippet: "lorem lorem kikiki" },
    { title: "bruno find stars", snippet: "lorem lorem kikiki" },
  ];
  res.render("index", { title: "Home", blogs });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});
app.get("/about-us", (req, res) => {
  res.render("about", { title: "About Page" });
});
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Creation" });
});

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
