const router = require("express").Router();
const Blog = require("../models/blog");

router.get("/blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { title: "All blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/create", (req, res) => {
  res.render("create", { title: "Creation" });
});
router.post("/", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(req.body);
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
});
//delete
router.delete(":id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
});
//mongoose and mongo sandbox routes
//create blog
router.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "new blog",
    snippet: "about my new blog",
    body: "read more about my new blog",
  });
  blog
    .save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//all blogs
router.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//single blog
router.get("/single-blog", (req, res) => {
  Blog.findById("62d8608e443c00a6fd7119e4")
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
router.get("create", (req, res) => {
  res.render("create", { title: "Creation" });
});
router.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(req.body);
});
router.get(":id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
});
//delete
router.delete(":id", (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
});

//render views
router.get("/", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { title: "All blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
