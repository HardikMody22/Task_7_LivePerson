const express = require("express");
const router = express.Router();
const authorise = require("../middlewares/authorization");

const tstController = require("../controllers/testController");

router.route("/api/showme").get(tstController.showme);
router.route("/api/whynot/").get(tstController.whynot);
router.route("/api/google").get(tstController.google);
router.route("/api/googlemaps").get(tstController.googleMaps);
router.route("/api/shortenurl").get(authorise).get(tstController.shortenUrl);

module.exports = router;
