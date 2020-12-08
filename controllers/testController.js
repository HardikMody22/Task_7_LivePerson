const { getGoogle, getMaps } = require("../utils/google-parser");
const bitlyUtils = require("../utils/bitlyUtils");

module.exports = {
  showme: async function (req, res, next) {
    res
      .status(200)
      .send({ success: true, message: "Your call is successful!" });
    res.end();
  },

  whynot: async function (req, res, next) {
    if (req.query.id) {
      //Query
      let id = parseInt(req.query.id);
      id = 5000;

      if (id === 5000) {
        res.status(200).send({
          success: true,
          message: "Your call is successful! ID is 5000",
        });
      } else {
        res.status(200).send({
          success: true,
          message: "Your call is successful! ID is ${id}",
        });
      }
    } else
      res
        .status(200)
        .send({ success: false, message: "A valid id is required!" });

    res.end();
  },

  google: async function (req, res, next) {
    let googleResp = await getGoogle();
    if (googleResp.success) res.status(200).send(googleResp.data);
    else res.status(200).send("NO DATA FROM GOOGLE!");

    res.end();
  },

  googleMaps: async function (req, res, next) {
    let mapsResp = await getMaps();
    if (mapsResp.success) res.status(200).send(mapsResp.data);
    else res.status(200).send("NO DATA FROM GOOGLE MAPS!");

    res.end();
  },

  shortenUrl: async function (req, res, next) {
    let bitlyResp = await bitlyUtils.getShortUrl(
      req.query.url,
      req.body.bearer
    );
    res.status(200).send(bitlyResp);
  },
};
