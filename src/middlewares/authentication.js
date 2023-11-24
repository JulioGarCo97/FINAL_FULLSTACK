const config = require("../config/config");
const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  //let token = req.get("Authorization").split(' ')[1];  
  //let token = req.get("Authorization");
  let token = req.body.token;
 console.log(token,'TOKENN');
  jwt.verify(token, config.SECRET_KEY, (err, user) => {
    
    if (err) {
      console.log(err,'ERRRR');
      return res.status(500).json({
        ok: false,
        msg: "Token invalid!",
      });
    }

    req.body.user = user.data;

    next();
  });
};

module.exports = {
  isAuth,
};
