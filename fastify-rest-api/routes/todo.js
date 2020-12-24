const blogController = require("../controller/todo");

const opt = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          world: { type: "string" },
        },
      },
    },
  },
};
const todoGetOpt = {
  schema: {
    querystring: {
      id: { type: "string" },
    },
    response: {
      200: {
        type: "object",
        properties: {
          title: { type: "string" },
          id: { type: "number" },
        },
      },
    },
  },
};
async function routes(fastify, options, done) {
  fastify.addHook("preHandler", async (request, reply) => {
    if (!fastify.auth(request)) {
      const err = new Error();
      err.statusCode = 401;
      err.message = "not authorized";
      throw err;
    }
  });
  fastify.get("/", opt, function (req, res) {
    return { world: "hello" };
  });

  fastify.get("/api/todos", (req, reply) => {
    return blogController.getAllTodos(fastify, req, reply);
  });

  fastify.get("/api/todos/:id", todoGetOpt, async (req, reply) => {
    return blogController.getTodo(req, reply);
  });
  done();
}

module.exports = routes;
