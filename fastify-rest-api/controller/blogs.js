let blogs = [
  {
    id: 1,
    title: "This is an experiment",
  },
  {
    id: 2,
    title: "Fastify is pretty cool",
  },
  {
    id: 3,
    title: "Just another blog, yea!",
  },
];

//decorate
// app.decorate("addNum", (num1, num2) => num1 + num2);

// Handlers
const getAllBlogs = async (fastify) => {
  const sum = fastify.addNum(1, 2);
  reply.send(blogs);
};

const getBlog = async (fastify, req, reply) => {
  try {
    const id = Number(req.params.id); // blog ID
    const blog = blogs.find((blog) => blog.id === id);
    console.log(id, "-- getBlog req ->", blog);
    reply.send(blog);
    // return blog;
  } catch (error) {
    // console.log("--error ->", error);
  }
};

const addBlog = async (req, reply) => {
  const id = blogs.length + 1; // generate new ID
  const newBlog = {
    id,
    title: req.body.title,
  };

  blogs.push(newBlog);
  return newBlog;
};

const updateBlog = async (req, reply) => {
  const id = Number(req.params.id);
  blogs = blogs.map((blog) => {
    if (blog.id === id) {
      return {
        id,
        title: req.body.title,
      };
    }
  });

  return {
    id,
    title: req.body.title,
  };
};

const deleteBlog = async (req, reply) => {
  const id = Number(req.params.id);

  blogs = blogs.filter((blog) => blog.id !== id);
  return { msg: `Blog with ID ${id} is deleted` };
};

module.exports = {
  getAllBlogs,
  getBlog,
  addBlog,
  updateBlog,
  deleteBlog,
};
