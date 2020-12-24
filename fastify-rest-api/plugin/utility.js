const fasityPlugin = require("fastify-plugin");

function utility(fastify, option, done) {
  fastify.decorate("addNum", (num1, num2) => num1 + num2);
  fastify.decorate("auth", (request) => request.headers.auth === "secret");
  done();
}
// function isValidUser(fastify, option, done) {
//   fastify.decorate("auth", (request) => request.headers.auth === "secret");
//   done();
// }

module.exports = fasityPlugin(utility);
// module.exports = fasityPlugin(isValidUser);
