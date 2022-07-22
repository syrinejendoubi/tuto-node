const router = require("express").Router();
const blogController = require("../controllers/blogController");

router.get("/", blogController.blog_index);
router.get("/:id", blogController.blog_details);
router.post("/", blogController.blog_create_post);
router.delete("/:id", blogController.blog_delete);

//mongoose and mongo sandbox routes
//create blog
// router.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog",
//     snippet: "about my new blog",
//     body: "read more about my new blog",
//   });
//   blog
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });
//all blogs

//single blog
// router.get("/single-blog", (req, res) => {
//   Blog.findById("62d8608e443c00a6fd7119e4")
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

// router.post("/blogs", (req, res) => {
//   const blog = new Blog(req.body);
//   blog
//     .save()
//     .then((result) => {
//       res.redirect("/blogs");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   console.log(req.body);
// });
//delete

//render views
// router.get("/", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.render("index", { title: "All blogs", blogs: result });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
module.exports = router;
