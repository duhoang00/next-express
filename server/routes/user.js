const express = require("express");
const { parse } = require("url");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  const parsedUrl = parse(req.url, true);
  const { pathname, query } = parsedUrl;

  res.send({ api: "user", pathname, query });
});

module.exports = userRouter;
