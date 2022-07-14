const router = require("express").Router();
router.get("/All", require("../controllers/getUsers"));
/* router.get("/id", require("../controllers/getUser")); */

module.exports = router;
