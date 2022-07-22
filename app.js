const express = require("express");
const morgan = require("morgan");
const app = express();
const blogRoutes = require("./routes/blogRoutes");
const mongoose = require("mongoose");
//db config
const dbURI =
  "mongodb+srv://syrine16:Syrine16@cluster0.pdnwg.mongodb.net/node-tuto?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
//register view engine
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.redirect("/blogs");
});
//  middleware and static files
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Creation" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About Page" });
});

app.get("/about-us", (req, res) => {
  res.render("about", { title: "About Page" });
});
//blog routes
app.use("/blogs", blogRoutes);

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
