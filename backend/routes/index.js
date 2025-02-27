const express = require("express");
const router = express.Router();

router.use("/admin", require("./admin"));
router.use("/course", require("./course"));
router.use("/user", require("./user"));
router.use("/query", require("./query")); // ✅ Add this line

module.exports = router;
