const mainHelp = require('../helpers/main.helper');
const mainServ = require('../services/calculator.service');

let main = async (req, res, next) => {
  try {
    const env = process.env;
    const request = mainHelp.validateRequest(req.body);
    const promises = [
      mainServ.sum(request.a, request.b),
    ];
    const resolve = await Promise.all(promises);

    return res.status(200).send({
      success: true,
      message: env.MSG_200,
      result: resolve[0],
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message || env.MSG_000,
    });
  }
};

module.exports = {
  main,
};



