exports.Ok = function(message) {
  this.status = 200;
  this.success = true;
  this.message = process.env.MSG_200 + ' ' + message;
  this.message.trim();
};

exports.Created = function(message) {
  this.status = 201;
  this.success = true;
  this.message = process.env.MSG_201 + ' ' + message;
  this.message.trim();
};

exports.NoContent = function(message) {
  this.status = 204;
  this.success = true;
  this.message = process.env.MSG_204 + ' ' + message;
  this.message.trim();
};

exports.BadRequest = function(message) {
  this.status = 400;
  this.success = false;
  this.message = process.env.MSG_400 + ' ' + message;
  this.message.trim();
};

exports.Unauthorized = function(message) {
  this.status = 401;
  this.success = false;
  this.message = process.env.MSG_401 + ' ' + message;
  this.message.trim();
};

exports.NotFound = function(message) {
  this.status = 404;
  this.success = false;
  this.message = process.env.MSG_404 + ' ' + message;
  this.message.trim();
};

exports.RequestTimeout = function(message) {
  this.status = 408;
  this.success = false;
  this.message = process.env.MSG_408 + ' ' + message;
  this.message.trim();
};

exports.InternalServerError = function(message) {
  this.status = 500;
  this.success = false;
  this.message = process.env.MSG_500 + ' ' + message;
  this.message.trim();
};
