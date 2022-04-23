const checkPhoneNumber = (req, res, next) => {
  if (req.body.phoneNumber) {
    next();
  } else {
    res.status(400).json({ error: "Phone Number is required " });
  }
};

module.exports = { checkPhoneNumber };
