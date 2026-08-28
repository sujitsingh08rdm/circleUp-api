const StorageApiDocs = {
  "/storage/download": {
    post: {
      summary: "Generate Signed url for download",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                path: { type: "string", example: "folder/file.ext" },
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
                  url: {
                    type: "string",
                    example: "signed url valid for 60 seconds",
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
                    example: "Failed to generate URL, path is missing",
                  },
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
                  message: {
                    type: "string",
                    example: "Failed to download, download url path is missing",
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

  "storage/upload": {
    post: {
      summary: "Upload S3 signed image to AWS",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                path: { type: "string", example: "folder/file.ext" },
                status: { type: "string", example: "private | public-read " },
                type: { type: "string", example: "image/png" },
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
                  url: {
                    type: "string",
                    example: "signed url valid for 60 seconds",
                  },
                },
              },
            },
          },
        },
        400: {
          description: "Error",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "nvalid request, path or type is missing",
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

export default StorageApiDocs;
