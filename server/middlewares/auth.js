authentication = (req, res, next) => {
  const { token } = req.headers;
  console.log(token);
};

module.exports = authentication;
