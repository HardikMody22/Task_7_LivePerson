const got = require("got");
module.exports = {
  getShortUrl: function (url, token) {
    var options = {
      headers: {
        Authorization: token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        long_url: url,
        domain: "bit.ly",
      }),
    };
    return got
      .post("https://api-ssl.bitly.com/v4/shorten", options)
      .then((response) => {
        console.log(response.body);
        return Promise.resolve({
          success: true,
          shortUrl: JSON.parse(response.body).link,
        });
      })
      .catch((e) => {
        return Promise.resolve({
          success: false,
          error: "Internal Error: " + e.toString(),
        });
      });
  },
};
