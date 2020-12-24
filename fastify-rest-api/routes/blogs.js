const blogController = require("../controller/blogs");

// Validation schema for blogs
const getBlogValidation = {
  params: {
    id: { type: "integer" }, // Try changing to object to see error
  },
  response: {
    200: {
      type: "object",
      properties: {
        id: { type: "integer" },
        title: { type: "string" },
      },
    },
  },
};

const addBlogValidation = {
  body: {
    type: "object",
    additionalProperties: false,
    required: [
      // 'id',
      "title",
    ],
    properties: {
      // id: { type: 'number' },
      title: { type: "string" },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        id: { type: "integer" },
        title: { type: "string" },
      },
    },
  },
};

const routes = (fastify, req) => [
  {
    method: "GET",
    url: "/api/blogs",
    handler: (req, reply) => {
      return blogController.getAllBlogs(fastify, req, reply);
    },
  },
  {
    method: "GET",
    url: "/api/blogs/:id",
    schema: getBlogValidation, // add validation
    handler: (req, reply) => {
      blogController.getBlog(fastify, req, reply);
    },
  },
  //   {
  //     method: "POST",
  //     url: "/api/blogs",
  //     schema: addBlogValidation, // add validation
  //     handler: blogController.addBlog,
  //   },
  //   {
  //     method: "PUT",
  //     url: "/api/blogs/:id",
  //     handler: blogController.updateBlog,
  //   },
  //   {
  //     method: "DELETE",
  //     url: "/api/blogs/:id",
  //     handler: blogController.deleteBlog,
  //   },
];
module.exports = routes;
