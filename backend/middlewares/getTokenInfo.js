const jwt = require("jsonwebtoken");

const getTokenInfo = (req, res) => {
  const tokenToParse = req.body.token;
  const rest = jwt.decode(tokenToParse);
  console.log(rest);
  res.send(rest);
};

module.exports = getTokenInfo;
