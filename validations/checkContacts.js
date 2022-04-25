const checkPhoneNumber = (req, res, next) => {
  if (req.body.phoneNumber) {
    next();
  } else {
    res.status(400).json({ error: "Phone Number is required " });
  }
};

const validateURL = (req, res, next) => {
  if (
    req.body.url.substring(0, 7) === "http://" ||
    req.body.url.substring(0, 8) === "https://"
  ) {
    return next();
  } else {
    res
      .status(400)
      .json({ error: `You forgot to start your url with http:// or https://` });
  }
};

module.exports = { checkPhoneNumber, validateURL };
