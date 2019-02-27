const errorHelp = require('./error.helper');

/**
 * Valida peticion entrante
 *
 * @param {*} request peticion
 * @return {object} peticion valida
 */
let validateRequest = (request) => {
  if (
    !request.a ||
    typeof request.a !== 'string' ||
    request.a.trim() === ''
  ) {
    throw new errorHelp.BadRequest(
      'El campo a es requerido y debe ser de tipo string.'
    );
  } else if (
    !request.b ||
    typeof request.b !== 'string' ||
    request.b.trim() === ''
  ) {
    throw new errorHelp.BadRequest(
      'El campo b es requerido y debe ser de tipo string.'
    );
  } else {
    return request;
  }
};

module.exports = {
  validateRequest,
};
