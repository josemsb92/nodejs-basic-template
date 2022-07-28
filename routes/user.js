const router = require("express").Router();
router.get("/all", require("../controllers/getUsers"));
router.get("/:id", require("../controllers/getById"));
router.post("/post", require("../controllers/postUser"));
router.delete("/delete", require("../controllers/deleteUser"));
router.post("/login", require("../controllers/login"));
module.exports = router;
