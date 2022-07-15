const router = require("express").Router();
router.get("/all", require("../controllers/getUsers"));
/* router.get("/id", require("../controllers/getUser")); */

module.exports = router;
