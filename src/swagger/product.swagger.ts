const ProductApiDocs = {
  "/products": {
    get: {
      summary: "Fetch All Products",
      parameters: [
        {
          in: "query",
          name: "page",
          default: 1,
          schema: { type: "number" },
        },
        {
          in: "query",
          name: "limit",
          default: 10,
          schema: { type: "number" },
        },
      ],
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    _id: { type: "string" },
                    title: { type: "string" },
                    price: { type: "number" },
                    discount: { type: "number" },
                  },
                },
              },
            },
          },
        },
        500: { description: "Error" },
      },
    },
    post: {
      summary: "Upload a product",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                title: { type: "string" },
                price: { type: "number" },
                discount: { type: "number" },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  _id: { type: "string" },
                  title: { type: "string" },
                  price: { type: "number" },
                  discount: { type: "number" },
                },
              },
            },
          },
        },
        500: {
          description: "Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "Something went wrong" },
                },
              },
            },
          },
        },
      },
    },
  },
  "/products/{id}": {
    put: {
      summary: "Update a product",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "string" },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                title: { type: "string" },
                price: { type: "number" },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  _id: { type: "string" },
                  title: { type: "string" },
                  price: { type: "number" },
                },
              },
            },
          },
        },
        404: {
          description: "Not Found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "not found" },
                },
              },
            },
          },
        },
        500: {
          description: "Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "Internal server error" },
                },
              },
            },
          },
        },
      },
    },
    delete: {
      summary: "Delete a product",
      parameters: [
        {
          in: "path",
          name: "id",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  _id: { type: "string" },
                  name: { type: "string" },
                  price: { type: "number" },
                },
              },
            },
          },
        },
        404: {
          description: "Not Found",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "Not found" },
                },
              },
            },
          },
        },
        500: {
          description: "Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: { type: "string", example: "Something went wrong" },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default ProductApiDocs;
