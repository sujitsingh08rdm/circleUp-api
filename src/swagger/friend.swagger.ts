const FriendApiDocs = {
  "/friend": {
    post: {
      summary: "Add Friend",
      description: "auth token required",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                friend: { type: "string", example: "your friend id" },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "success",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Friend request sent",
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Invalid token",
                  },
                },
              },
            },
          },
        },
        500: {
          description: "error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Something went wrong",
                  },
                },
              },
            },
          },
        },
      },
    },
    get: {
      summary: "Fetch Your Friend",
      description: "auth token required",
      responses: {
        200: {
          description: "success",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    friend: {
                      type: "object",
                      properties: {
                        fullname: { type: "string" },
                        email: { type: "string" },
                        mobile: { type: "string" },
                        image: { type: "string" },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Invalid token",
                  },
                },
              },
            },
          },
        },
        500: {
          description: "error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Something went wrong",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/friend/{id}": {
    put: {
      summary: "Accept friend request",
      parameters: [
        { in: "path", name: "id", required: true, schema: { type: true } },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                status: { type: "string", example: "Accepted" },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "success",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Friend request updated",
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Invalid token",
                  },
                },
              },
            },
          },
        },
        500: {
          description: "error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Something went wrong",
                  },
                },
              },
            },
          },
        },
      },
    },
    delete: {
      summary: "Reject friend request",
      parameters: [
        { in: "path", name: "id", required: true, schema: { type: true } },
      ],

      responses: {
        200: {
          description: "success",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Friend deleted",
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Invalid token",
                  },
                },
              },
            },
          },
        },
        500: {
          description: "error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Something went wrong",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/friend/suggestion": {
    get: {
      summary: "get suggested friends",
      description: "auth token required",
      responses: {
        200: {
          description: "success",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    fullname: { type: "string" },
                    email: { type: "string" },
                    mobile: { type: "string" },
                    image: { type: "string" },
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Invalid token",
                  },
                },
              },
            },
          },
        },
        500: {
          description: "error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Something went wrong",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/friend/request": {
    get: {
      summary: "get friend requests",
      description: "auth token required",
      responses: {
        200: {
          description: "success",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    fullname: { type: "string" },
                    email: { type: "string" },
                    mobile: { type: "string" },
                    image: { type: "string" },
                  },
                },
              },
            },
          },
        },
        401: {
          description: "Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Invalid token",
                  },
                },
              },
            },
          },
        },
        500: {
          description: "error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Something went wrong",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default FriendApiDocs;
