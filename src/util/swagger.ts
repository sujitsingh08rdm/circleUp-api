import AuthApiDocs from "../swagger/auth.swagger";
import FriendApiDocs from "../swagger/friend.swagger";
import StorageApiDocs from "../swagger/storage.swagger";

const SwaggerConfig = {
  openapi: "3.0.0",
  info: {
    title: "circleUp official api",
    description: "All public and private APIs of the application is here",
    version: "1.0.0",
    contact: {
      name: "Sujit bhai",
      email: "Sujit@test.com",
    },
  },
  servers: [
    {
      url: process.env.SERVER,
    },
  ],
  paths: { ...AuthApiDocs, ...StorageApiDocs, ...FriendApiDocs },
};

export default SwaggerConfig;
