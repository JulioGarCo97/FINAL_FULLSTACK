const Buy = require("../models/Buy");

const CTRL = {};

CTRL.getShopping = (req, res) => {
    Buy.find({})
    .populate("product")
    .exec((err, buy) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
      res.json({
        ok: true,
        buy,
      });
    });
};

CTRL.getShoppingById = (req, res) => {
  const { id } = req.params;
  Buy.findById(id)
    .populate("product")
    .exec((err, buy) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
      res.json({
        ok: true,
        buy,
      });
    });
};

CTRL.createBuy = (req, res) => {
  const newBuy = new Buy({
    nameClient: req.body.nameClient,
    dniClient: req.body.dniClient,
    directionClient: req.body.directionClient,
    countryClient: req.body.countryClient,
    emailClient: req.body.emailClient,
    dateSend: req.body.dateSend,
    typePay: req.body.typePay,
    description: req.body.description,
    product: req.body.product,
    totalAmount: req.body.totalAmount,    
  });

  newBuy.save((err, buy) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    return res.status(201).json({
      ok: true,
      buy,
    });
  });
};


module.exports = CTRL;
