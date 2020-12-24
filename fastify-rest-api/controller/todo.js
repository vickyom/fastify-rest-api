let todo = [
  {
    id: 1,
    title: "Todo 1",
  },
  {
    id: 2,
    title: "Todo 2",
  },
  {
    id: 3,
    title: "Todo 3",
  },
];

// Handlers
const getAllTodos = async (fastify, req, reply) => {
  console.log("fastify --- >", fastify.addNum);
  const sum = fastify.addNum(1, 2);
  console.log(todo, "-sum =>", sum);
  return todo;
};

const getTodo = async (req, reply) => {
  try {
    const id = Number(req.params.id); // blog ID
    const blog = todo.find((blog) => blog.id === id);
    console.log(id, "-- getBlog req ->", blog);
    reply.send(blog);
    // return blog;
  } catch (error) {
    // console.log("--error ->", error);
  }
};

module.exports = {
  getAllTodos,
  getTodo,
};
