const AuthApiDocs = {
  "/auth/signup": {
    post: {
      summary: "Register a new user",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",

              properties: {
                fullname: { type: "string" },
                email: { type: "string" },
                password: { type: "string" },
                mobile: { type: "string" },
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
                    example: "User registration done",
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
  "/auth/login": {
    post: {
      summary: "Login User",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",

              properties: {
                email: { type: "string" },
                password: { type: "string" },
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
                    example: "Login Succesfull.",
                  },
                  accessToken: {
                    type: "string",
                    example: "access token valid for 15 mins",
                  },
                  refreshToken: {
                    type: "string",
                    example: "refresh token valid for 7 Days",
                  },
                },
              },
            },
          },
        },
        401: {
          description: "error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Invalid credentials",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "User not found",
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
  "/auth/logout": {
    post: {
      summary: "Logout User",
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
                    example: "Logout Succesfull.",
                  },
                  accessToken: {
                    type: "string",
                    example: "Auto remove access token",
                  },
                  refreshToken: {
                    type: "string",
                    example: "Auto remove refresh token",
                  },
                },
              },
            },
          },
        },
        401: {
          description: "error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Invalid credentials",
                  },
                },
              },
            },
          },
        },
        404: {
          description: "error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "User not found",
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
  "/auth/refresh-token": {
    get: {
      summary: "Getting new Access and Refresh token",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                refreshToken: {
                  type: "string",
                  example: "sent automatically from http only cookie",
                },
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
                    example: "Token refreshed",
                  },
                  accessToken: {
                    type: "string",
                    example: "access token valid for 15 mins",
                  },
                  refreshToken: {
                    type: "string",
                    example: "refresh token valid for 7 Days",
                  },
                },
              },
            },
          },
        },
        401: {
          description: "error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Failed to refresh token",
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
  "/auth/session": {
    get: {
      summary: "Getting user info from token/session",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                accessToken: {
                  type: "string",
                  example: "sent automatically from http only cookie",
                },
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
                  id: { type: "string" },
                  email: { type: "string" },
                  fullname: { type: "string" },
                  mobile: { type: "string" },
                  image: { type: "string" },
                },
              },
            },
          },
        },
        401: {
          description: "error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Invalid session",
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
  "/auth/profile-picture": {
    put: {
      summary: "update image url",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                accessToken: {
                  type: "string",
                  example: "sent automatically from http only cookie",
                },
                image: {
                  type: "string",
                  example: "Your_Image_Public_URL",
                },
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
                  image: { type: "string", example: "Invalid session" },
                },
              },
            },
          },
        },
        401: {
          description: "error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "Invalid session",
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

export default AuthApiDocs;
