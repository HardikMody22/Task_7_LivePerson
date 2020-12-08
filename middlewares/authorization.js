"use strict";
const express = require("express");

module.exports = (request, response, next) => {
  const token = request.headers["authorization"];
  if (!token) {
    return response.status(401).send("Unauthorised User");
  } else {
    request.body["bearer"] = token;
    next();
  }
};
